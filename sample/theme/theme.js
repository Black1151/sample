import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    brand: {
      50: "#f9f2f4",
      100: "#f2d6dc",
      200: "#e5adc2",
      300: "#d984a8",
      400: "#cc5b8f",
      500: "#b44276",
      600: "#8e3460",
      700: "#67264a",
      800: "#401933",
      900: "#1f071d",
    },
    accent: {
      50: "#f3f5fa",
      100: "#e6ebf5",
      200: "#c5d1e5",
      300: "#a4b6d4",
      400: "#829bc4",
      500: "#627fb4",
      600: "#4d6193",
      700: "#3a446d",
      800: "#262947",
      900: "#131224",
    },
  },
  components: {
    Flex: {
      baseStyle: {
        justifyContent: "space-between",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "heading",
        color: "white",
      },
    },
    Link: {
      baseStyle: {
        color: "white",
        textDecoration: "none",
        _hover: {
          color: "accent.300",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
        textTransform: "uppercase",
        fontSize: "sm",
        _hover: {
          opacity: "0.8",
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.500",
            color: "white",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        mb: "4",
      },
      sizes: {
        xl: {
          fontSize: "4xl",
        },
        lg: {
          fontSize: "2xl",
        },
      },
    },
    Card: {
      baseStyle: {
        bg: "white",
        boxShadow: "lg",
        borderRadius: "lg",
        p: "6",
        mb: "6",
      },
    },
  },
});

export default theme;
