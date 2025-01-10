import { purple, yellow, blueGrey, deepOrange } from "@mui/material/colors";
import Colors from "./Colors";

const Fonts = {
  Headers: {
    Type1: {
      fontFamily: "'Roboto', sans-serif", // Example: Use your desired font
      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
      fontWeight: 700, // Bold
      color: purple[500], // Use MUI color palettes or custom colors
      lineHeight: 1.5, // Adjust as needed
      letterSpacing: '0.02em', // Small letter spacing
    },
    Type2: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.1rem' },
      fontWeight: 600, // Semi-bold
      color: yellow[700],
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    Type3: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.4rem' },
      fontWeight: 400, // Normal weight
      color: blueGrey[800],
      lineHeight: 1.6,
      letterSpacing: '0.03em',
    },
  },
  Paragraphs: {
    Body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' },
      fontWeight: 400,
      color: deepOrange[500],
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    Body2: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
      fontWeight: 300, // Light weight
      color: blueGrey[600],
      lineHeight: 1.8,
      letterSpacing: '0.005em',
    },
  },
  Buttons: {
    Primary: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
      fontWeight: 600,
      color: "#FFFFFF", // White text
      lineHeight: 1.4,
      letterSpacing: '0.1em',
    },
    Secondary: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
      fontWeight: 500,
      color: purple[700],
      lineHeight: 1.3,
      letterSpacing: '0.08em',
    },
  },
};

export default Fonts;
