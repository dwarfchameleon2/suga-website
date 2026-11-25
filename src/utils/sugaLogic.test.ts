import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getSeoMetaForPath,
  SUGA_APK_URL,
  SUGA_COMING_SOON_TEXT,
  SUGA_DOWNLOAD_BUTTON_LABEL,
  validateSupportForm,
} from './sugaLogic';

test('SUGA download constants match exact required strings', () => {
  assert.equal(
    SUGA_APK_URL,
    'https://github.com/DwarfChameleon/suga/releases/download/SUGA-1.0.1/suga.apk'
  );
  assert.equal(SUGA_DOWNLOAD_BUTTON_LABEL, 'Download SUGA for Android');
  assert.equal(
    SUGA_COMING_SOON_TEXT,
    'SUGA is coming soon to Google Play and the Apple App Store.'
  );
});

test('getSeoMetaForPath resolves known routes and strips trailing slashes', () => {
  assert.equal(getSeoMetaForPath('/').path, '/');
  assert.equal(getSeoMetaForPath('/about').path, '/about');
  assert.equal(getSeoMetaForPath('/about/').path, '/about');
  assert.equal(getSeoMetaForPath('/download').path, '/download');
  assert.equal(getSeoMetaForPath('/support').path, '/support');
  assert.equal(getSeoMetaForPath('/privacy').path, '/privacy');
  assert.equal(getSeoMetaForPath('/terms').path, '/terms');
  assert.equal(getSeoMetaForPath('/unknown-route').path, '/');
});

test('validateSupportForm rejects empty or invalid inputs', () => {
  const result = validateSupportForm({
    name: 'A',
    email: 'not-an-email',
    topic: '',
    message: 'hi',
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.topic);
  assert.ok(result.errors.message);
});

test('validateSupportForm accepts valid inquiry inputs', () => {
  const result = validateSupportForm({
    name: 'Chidi Okonkwo',
    email: 'chidi@example.com',
    topic: 'chef-vendor',
    message: 'I run a local kitchen and would love to join SUGA Ecosystem.',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});
