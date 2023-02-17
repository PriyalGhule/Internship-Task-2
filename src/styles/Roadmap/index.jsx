import React from 'react'
import styled from 'styled-components'

export const Roadmapcontainer1 = styled.div`
height: 390px;
    width: 100%;
    display: flex;
`

export const Roadmapbox1= styled.div`
width:180px;
height: 450px;
border-top:rgba(255, 255, 255, 0.12) solid 2px;
border-top-right-radius:25px ;
`

export const Roadmapbox2 = styled.div`
height: 370px;
    width:870px;
    margin-top: 20px;
    
    border-left:rgba(255, 255, 255, 0.12) solid 2px;
    border-bottom:rgba(255, 255, 255, 0.12) solid 2px;
    border-bottom-left-radius:25px ;`


    export const Roadmaptext1=styled.div`

        font-weight: 500;
    font-size:60px;
    color: white;
    margin-top: 20px;
    margin-left: 30px;
    
`
    export const Smallroadmaptext=styled.div`
        margin-left: 30px;
        font-size: 14px;
        color: white;
    
`

export const Outercircle=styled.img`
height: 300px;
width: 300px;
position: relative;
bottom:430px;
left:50px;
`
export const Innercircle=styled.img`
height: 175px;
    width: 175px;
    position:absolute;
    
  top:753px;
  right:290px;
  
`

export const Circlegradient= styled.img`
height: 500px;
    width: 500px;
    position: relative;
   bottom:330px;
   left:450px;
   opacity: 0.7;
   
`

export const Innericon= styled.img`
height: 110px;
    width: 110px;
    position: absolute;
  top:782px;
  right:322px;
`

export const Rect = styled.div`
height: 100px;
    width:130px;
    background-color: white;
    position: relative;
    top:80px;
    right:65px;
    
    border-radius: 20px;
`

export const Circle = styled.div`
height: 50px;
    width:50px;
    background-color: blue;
    position: relative;
    top:6px;
    right: 28px;
    border-radius: 50px;
`

export const Textbox= styled.div`
height: 150px;
    width:300px;
    
    position: absolute;
   
    top: ${(props)=>props.top};
    left:${(props)=>props.left};


.year{
    font-size: 40px;
    color: white;
 }
 
 .quarter{
     font-size: 20px;
     font-weight: 700;
     color:#15C4C6;
 }
 .small-para{
     font-size:13px;
     color:rgba(255, 255, 255, 0.39);
 
 }
`

export const Rect3 = styled.div`
height: 120px;
    width:180px;
    background-color: rgb(29, 51, 64);
    position: absolute;
    
    top: ${(props)=>props.top};
    right:${(props)=>props.right};
    border-radius: 30px;
`
export const  Circle3= styled.div`
height: 80px;
    width:80px;
    background-color: #2F3842;
    position: absolute;
    
    top: ${(props)=>props.top};
    right:${(props)=>props.right};
    border-radius: 80px;
    border: rgba(255, 255, 255, 0.468) 2px solid;
`

export const Roadmapbox3= styled.div`
height: 200px;
    width:870px;
    margin-left: 200px;
    border-top:rgba(255, 255, 255, 0.12) solid 2px;
    border-top-right-radius: 25px;
    border-right:rgba(255, 255, 255, 0.12) solid 2px;
    border-bottom-right-radius: 25px;

`
export const Textbox3= styled.div`
height: 120px;
width:300px;
position: absolute;

top:${(props)=>props.top};
right:${(props)=>props.right};
text-align: right;


.year{
    font-size: 40px;
    color: white;
 }
 
 .quarter{
     font-size: 20px;
     font-weight: 700;
     color:#15C4C6;
 }
 .small-para{
     font-size:13px;
     color:rgba(255, 255, 255, 0.39);
 
 }

`

export const Roadmapbox4 = styled.div`
height: 200px;
width:870px;

margin-left: 180px;
border-top:rgba(255, 255, 255, 0.12) solid 2px;
border-top-left-radius: 25px;
border-left:rgba(255, 255, 255, 0.12) solid 2px;
border-bottom:rgba(255, 255, 255, 0.12) solid 2px;
border-bottom-left-radius: 25px;
`
export const Rect4= styled.div`
height: 120px;
width:180px;
background-color: white;
position: absolute;

top: ${(props)=>props.top};
    left:${(props)=>props.left};
border-radius: 30px;
background-color: rgb(29, 51, 64);
`

export const Circle4= styled.div`
height: 80px;
    width:80px;
    background-color: #2F3842;
    position:absolute;
    
    top: ${(props)=>props.top};
    left:${(props)=>props.left};
    border-radius: 80px;
    border: rgba(255, 255, 255, 0.468) 2px solid;
`
export const Contactus= styled.div`
color: white;
height: 650px;
    width:870px;
    
    margin-left: 180px;
    border-top:rgba(255, 255, 255, 0.12) solid 2px;
    border-top-left-radius: 25px;
    border-left:rgba(255, 255, 255, 0.12) solid 2px;
`

export const Contactnums=styled.div`
height: 250px;
    width: 300px;
   
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    justify-content:space-evenly;
    font-size: 17px;
    margin-top: 20px;
    float: left;    

`

export const Inputdiv=styled.div`
height: 250px;
    width: 300px;
  
  margin-left: 450px;
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;    

`

export const Input=styled.input`
outline-style: none;
   width:450px;
   background-color: transparent;
   border: none;
   border-bottom: rgba(255, 255, 255, 0.21) solid 1px;
   color:white;
   font-size: 12px;    

`

export const Submitcircle=styled.button`
height: 130px;
    width: 130px;
    border-radius: 130px;
    background-color: rgb(88, 140, 246);
    position:absolute;
    right:100px;
    color: rgb(251, 252, 252);
    font-weight:600;
    font-size: 40x;    

`
export const Year=styled.div`
font-size: 40px;
    color: white;
`
export const Smallpara=styled.div`
font-size:13px;
     color:rgba(255, 255, 255, 0.39);
`
export const Quarter=styled.div`
font-size: 20px;
     font-weight: 700;
     color:#15C4C6;
     margin-bottom: 10px;
`

export const Submittext= styled.div`
font-weight:600;
    font-size: 13px;
    color: #ffffff;
`

