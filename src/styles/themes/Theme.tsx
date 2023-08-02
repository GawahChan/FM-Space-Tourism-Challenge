export const theme = {
  colours: {
    heading: "#FFFFFF",
    headingNumber: "#716b6ba1",
    subHeading: "#D0D6F9",
    background: "#0b0D17",
    navText: "#FFFFFF",
  },
  typography: {
    primary: "Bellefair",
    secondary: "Barlow Condensed",
  },
  fontWeight: {
    bolder: "bolder",
    bold: "bold",
    regular: "normal",
  },
  fontSize: {
    heading1: "150px",
    heading2: "100px",
    heading3: "56px",
    heading4: "32px",
    heading5: "28px",
    subheading1: "28px",
    subheading2: "14px",
    navText: "16px",
  },
  characterSpace: {
    heading5: "4.75px",
    subheading2: "2.35px",
    navText: "2.7px",
  },
  lineHeight: {
    subHeading1: "32px",
    subHeading2: "25px"
  }
};

export type ThemeType = typeof theme;
