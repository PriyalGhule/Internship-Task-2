import React from 'react';
import { createGlobalStyle } from 'styled-components';
import bgimg from '../../imagesc/background.png';


export const GlobalStyle = createGlobalStyle`

body
{
background-image: url(${bgimg});
background-size: 100vw;
background-repeat: no-repeat;
@media(max-width:780px) {
  background-size:auto;
    
    background-repeat: no-repeat;
}

}

`;
const GlobalStyle1 = () => {
  return (
    
       <GlobalStyle/>
    
  );
}

export default GlobalStyle1;
