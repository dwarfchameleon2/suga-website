export type SugaRoutePath = '/' | '/about' | '/download' | '/support' | '/privacy' | '/terms';

export interface SeoMetadata {
  path: SugaRoutePath;
  title: string;
  description: string;
  heading: string;
}

export interface SupportFormInput {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface SupportFormValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof SupportFormInput, string>>;
}

export const SUGA_APK_URL =
  'https://github.com/DwarfChameleon/suga/releases/download/SUGA-1.0.1/suga.apk';

export const SUGA_COMING_SOON_TEXT =
  'SUGA is coming soon to Google Play and the Apple App Store.';

export const SUGA_DOWNLOAD_BUTTON_LABEL = 'Download SUGA for Android';

export const SUGA_INSTALL_NOTE =
  'When downloading directly for Android, your device may ask you to allow installation from your browser or downloaded files.';

export const SEO_METADATA_MAP: Record<SugaRoutePath, SeoMetadata> = {
  '/': {
    path: '/',
    title: 'SUGA Ecosystem – Discover Great Food, Local Chefs & Delivery',
    description:
      'Discover great food, connect with local chefs and local food vendors, and enjoy smoother food ordering and delivery with SUGA Ecosystem.',
    heading: 'Discover. Connect. Enjoy.',
  },
  '/about': {
    path: '/about',
    title: 'About SUGA Ecosystem – Food Discovery & Local Kitchens',
    description:
      'Learn how SUGA Ecosystem connects food lovers, local chefs, food vendors, and delivery riders across a vibrant, mobile-first food community.',
    heading: 'About SUGA Ecosystem',
  },
  '/download': {
    path: '/download',
    title: 'Download SUGA for Android – SUGA Ecosystem Mobile App',
    description:
      'Download SUGA for Android today and get early access to our food discovery app and food delivery app. Coming soon to Google Play and the Apple App Store.',
    heading: 'Download SUGA Ecosystem',
  },
  '/support': {
    path: '/support',
    title: 'Support & Partnerships – SUGA Ecosystem',
    description:
      'Get help with SUGA Ecosystem, Android installation, food ordering, or connect with our team as a local chef, food vendor, delivery rider, or partner.',
    heading: 'Support & Contact',
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy – SUGA Ecosystem',
    description:
      'Read how SUGA Ecosystem respects and protects your personal information across food discovery, food ordering, and local delivery.',
    heading: 'Privacy Policy',
  },
  '/terms': {
    path: '/terms',
    title: 'Terms and Conditions – SUGA Ecosystem',
    description:
      'Review the Terms and Conditions for using the SUGA Ecosystem website and mobile food discovery and delivery application.',
    heading: 'Terms and Conditions',
  },
};

export function getSeoMetaForPath(pathname: string): SeoMetadata {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (normalized in SEO_METADATA_MAP) {
    return SEO_METADATA_MAP[normalized as SugaRoutePath];
  }
  return SEO_METADATA_MAP['/'];
}

export function validateSupportForm(input: SupportFormInput): SupportFormValidationResult {
  const errors: Partial<Record<keyof SupportFormInput, string>> = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedTopic = input.topic.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedTopic) {
    errors.topic = 'Please select what your message is about.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
