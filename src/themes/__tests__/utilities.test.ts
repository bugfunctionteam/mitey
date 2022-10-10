import { rem } from '~/themes/utilities/rem';

test(`${rem.name} converts px to rem`, () => {
  expect(rem(24)).toBe('1.5rem');
});
