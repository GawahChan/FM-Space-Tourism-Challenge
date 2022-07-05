import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

body {
  margin: 0;
  background: ${({ theme }) => theme.colours.background};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif, 'Barlow Condensed', sans-serif, 'Bellefair', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
