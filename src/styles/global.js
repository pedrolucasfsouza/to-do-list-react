import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
`