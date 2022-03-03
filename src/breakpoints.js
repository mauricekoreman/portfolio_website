const size = {
  mobileLarge: "500px",
  tablet: "800px",
  desktop: "1024px",
  mediumDesktop: "1400px",
  bigDesktop: "1800px",
};

export const device = {
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  mediumDesktop: `(min-width: ${size.mediumDesktop})`,
  biDesktop: `(min-width: ${size.bigDesktop})`,
};
