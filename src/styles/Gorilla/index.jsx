import styled from "styled-components";
import React from "react";
export const Leftside= styled.div`
height: 450px;
    width:50%;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 70px;
`

export const Maintext=styled.div`
font-weight: 500;
    font-size:60px;
    color: white;
`

export const Paratext = styled.div`
margin-top: 15px;
    font-size: 20px;
    color: white;
`

export const Ecircle =styled.div`
width: 50px;
    height: 50px;
    border-radius:50px;
    background-color:rgb(44, 135, 225);
   
    position: absolute;
   left: 329px;
   top:-16px;
   
`

export const Emailbox= styled.div`
width:400px;
    height: 50px;
    margin-top: 30px;
    margin-left: 0px;
    border-radius: 50px;
    display: flex;
    justify-content:center;
    align-items: center;
    border: rgba(255, 255, 255, 0.708) solid 1px;
    // background-color:${(props)=>props.bg} ;
    font-size: 13px;
`

export const Gorilladiv= styled.div`
height: 520px;
    display: flex;
`

export const Rightside = styled.div`
height: 450px;
width:50%;
`

export const Gorillaimg=styled.img`
height: 450px;
width:360px;
margin-left: 40px;
margin-top: 20px;
align-self: center;
z-index: 99;
opacity:0.9;
`

export const Singlecoin= styled.img`
position: absolute;
    top:370px;
    right:300px;
    height: 100px;
    width: 100px;
`
export const Coinstack1= styled.img`
position: absolute;
    top:460px;
    right:285px;
    height: 110px;
    width: 110px;
`
export const Coinstack2= styled.img`
position: absolute;
    top:480px;
    right:250px;
    height: 80px;
    width: 80px;
`

export const Gorillagradient= styled.img`
position: absolute;
    top:10px;
    right:10px;
    height: 650px;
    width:750px;
    
`

export const Gbox = styled.img`
width:160px;
    
    height:57px;
    position: absolute;
    top: ${(props)=>props.top} ;
    right: ${(props)=>props.right} ;
   
    border-radius:30px;
    border:white solid 1 px;
`
export const Gboxtext= styled.div`
color: white;
font-size: 11px;
position: absolute;
top: ${(props)=>props.top} ;
right: ${(props)=>props.right} ;

width:150px;

`

export const Emailtext1=styled.div`
    position: absolute;
    left: 120px;
    color: rgba(255, 255, 255, 0.598);
`

export const Arrow=styled.img`
    width: 18px;
    height: 18px;
    z-index: 99;
    position: absolute;
    left: 350px;
`

export const Earrow=styled.img`
     width: 10px;
    height: 7px;
    position: absolute;
    left: 300px;
    top:7px;
`



export const Owner=styled.div`
     position: absolute;
    left: 250px;
    top:0px;
    color: white;
    
`

export const Sline=styled.div`
    font-size: 35px;
   font-weight: 50;
    position: absolute;
    left: 229px;
    top:-19px;
    align-self: center;
    color: rgba(255, 255, 255, 0.598);
`