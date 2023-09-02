import type { Preview, Decorator } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemes } from '@react-theming/storybook-addon';
import {theme} from "../src/themes"
import * as NextImage from "next/image"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
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
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }
`;

const providerFn = ({ story }) => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
  );
};

const themingDecorator = withThemes(null, [theme], { providerFn });

export const decorators= [themingDecorator,];

const preview: Preview = {
  parameters: parameters,
  decorators: decorators
};

export default preview;
