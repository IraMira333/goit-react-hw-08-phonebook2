const breakpoints = {
  xs: '280px',
  sm: '340px',
  md: '550px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
};
