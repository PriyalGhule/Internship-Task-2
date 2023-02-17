import React from 'react'
import styled from 'styled-components'


export const Navbarlinks=styled.ul`
display:flex;
padding-left: 0px;

@media (max-width: 780px) {
    flex-direction: column;
         background-color: blueviolet;
         height: 100vh;
         display: none;
}
`;

export const Navbarli=styled.li`
list-style: none;
margin: 25px;

@media (max-width: 780px) {
    align-self: center;
         font-size: 25px;
}
`
export const Navbarlia=styled.a`

text-decoration: none;
    font-family: sans-serif;
    font-weight: Medium;
    font-size: 16px;
    color:white;

`
export const Socialmedia=styled.ul`
    height: 56px;
    width:106px;
    margin-right: 50px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px;
    border-radius: 60px;
    border: grey solid 1px;
    @media (max-width:780px) {
        display: none;
    }

`

export const Mediaicons= styled.img`
max-width:20px;
min-height: 15px;
`
export const Navbardiv=styled.div`

min-height: 110px;
max-width: 100vw;
    
    display:flex;
    align-items: center;
    justify-content:space-between;

    @media(max-width: 780px) {
       
        align-items: flex-start;
        width:600px;
        flex-direction: column;
    }
`

export const Earnmanagement=styled.img`
     min-height: 79px;
    max-width:81px;
    margin-left:60px;

    @media (max-width:780px) {
        height: 80px;
        width:80px;
        margin-left: 40px;
        margin-top: 40px;
    }
`



