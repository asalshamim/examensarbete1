import { createGlobalStyle } from 'styled-components';
import themeList from './data/themeList';

const GlobalStyles = createGlobalStyle`


body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  font-family: 'Poppins', sans-serif;
}

`;

export default GlobalStyles;