import React from 'react';

import discordblue from '../imagesc/discord-blue.png';
import discord from '../imagesc/discord.png';
import mobile from '../imagesc/mobile.png';
import twitter from '../imagesc/Twitter.png';
import discordblack from '../imagesc/discordblack.png'; 
import { Bottombardiv, Leftpart, Leftpartul, Leftpartli, Leftpartlia
,Rightpartli, Rightpart, Rightpartlia, Twitter1,Discordblue, Discord1
, Mobile, Joindiscord, Joindiscordtext, Discordblack, Copyright} from '../styles/Bottombar';



const leftPartArray1=[ 'Home', 'Blog', 'Roadmap', 'Contact'];
const leftPartArray2=['Discord', 'Twitter', 'Lorem', 'Lorem'];
const LeftPartArray3=['Lorem','Lorem','Lorem','Lorem'];

export default function Bottombar() {
  return (
    
       <>
      <Bottombardiv>
          <Leftpart>

              
              <Leftpartul >
              <Leftpartli><Leftpartlia href="/">Fingertips</Leftpartlia></Leftpartli><br/>
                {
                  leftPartArray1.map((data)=>
                  <Leftpartli><Leftpartlia>{data}</Leftpartlia></Leftpartli>
                  )
                }
              
                    
              </Leftpartul>
              <Leftpartul>
              <Leftpartli><Leftpartlia href="/">Resources</Leftpartlia></Leftpartli><br/>
              {
                leftPartArray2.map((data)=>
                <Leftpartli><Leftpartlia>{data}</Leftpartlia></Leftpartli>
                )
              }
                    
              </Leftpartul>

              <Leftpartul>
              <Leftpartli><Leftpartlia href="/">About</Leftpartlia></Leftpartli><br/>

              {
                LeftPartArray3.map((data)=>
                <Leftpartli><Leftpartlia>{data}</Leftpartlia></Leftpartli>
                )
              }
                   
              
          </Leftpartul>
          </Leftpart>

          <Rightpart>
              
              
                  <Rightpartli ><Discordblue src={discordblue} alt="discordblue" /> <Rightpartlia  href="/">Join us on Discord</Rightpartlia></Rightpartli>
                  <Rightpartli><Mobile src={mobile} alt="mobile" /><Rightpartlia href='/'>  (239) 555-0193</Rightpartlia></Rightpartli>
                  <Rightpartli>
                  <Rightpartlia href='/'> <Twitter1 src={twitter} alt="twitter" /></Rightpartlia>
                  <Rightpartlia href='/'>  <Discord1 src={discord} alt="discord" /></Rightpartlia>
                  </Rightpartli>
              
          </Rightpart>
          
          <Joindiscord type="button" />
          <Discordblack src={discordblack} alt="discordblack" />
          <Joindiscordtext >Join Discord</Joindiscordtext>
          </Bottombardiv>
      <Copyright>@copyright. play 2022</Copyright>
     
   
    </>
  )
}
