import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap&subset=latin-ext');

    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%    
    }

    body {
        padding-left: 150px;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }

`;

export default GlobalStyle;
