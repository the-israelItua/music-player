import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";
import "reset-css";

const theme = extendTheme({
  colors: {
    black: "#000000",
    gray: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0e",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },

  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
