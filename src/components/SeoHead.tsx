import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMetaForPath } from '../utils/sugaLogic';

function upsertMetaTag(
  selector: string,
  attributeName: 'name' | 'property',
  attributeValue: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getSeoMetaForPath(pathname);
    document.title = meta.title;

    upsertMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    upsertMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      meta.description
    );
    upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    upsertMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      meta.description
    );

    const currentUrl = window.location.origin + window.location.pathname;
    upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
