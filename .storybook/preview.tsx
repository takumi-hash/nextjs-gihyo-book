import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

const preview: Preview = {
  parameters: parameters,
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
