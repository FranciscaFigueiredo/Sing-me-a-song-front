import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;

		font-family: 'Oswald', sans-serif;
	}

	body {
        color: #fab23d;
		background-color: #000000;
		font-family: 'Roboto', sans-serif;
	}
`;
 
export default GlobalStyle;