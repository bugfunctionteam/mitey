const breakpoints = {
  small: '500px',
  medium: '768px',
  large: '1048px',
};

type directions = 'up' | 'down';

export const viewport = (
  size: keyof typeof breakpoints,
  direction: directions,
) => {
  return direction === 'up'
    ? `(min-width: ${breakpoints[size]})`
    : `(max-width: ${breakpoints[size]})`;
};
