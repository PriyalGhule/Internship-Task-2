import React from 'react'
import emicon from '../imagesc/EarnManagement.png';
import twitter from '../imagesc/Twitter.png';
import discord from '../imagesc/discord.png';
import {Navbardiv,Navbarlinks, Navbarli, Navbarlia, Mediaicons, Socialmedia, Earnmanagement} from '../styles/Navbar/index';

const NavlinksArray=['Roadmap', 'Contact','Blog']
const  Navbar=()=> 
   (
    <>
    <body>
     <Navbardiv>

     <Earnmanagement src={emicon} alt="earn management" />

     
     <Navbarlinks>
      {
      NavlinksArray.map((data)=>
        <Navbarli><Navbarlia href="/">{data}</Navbarlia></Navbarli>
      )
      }
       </Navbarlinks>

       <Socialmedia>
      
     <Mediaicons src={twitter} alt="twitter" />
     <Mediaicons  src={discord} alt="discord"/>
     </Socialmedia>

     

     </Navbardiv>
     </body>
     </>
  )

export default Navbar;



