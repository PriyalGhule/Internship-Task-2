import React from 'react';
import gorilla from '../imagesc/gorilla.png';
import singlecoin from '../imagesc/singlecoin.png';
import coinstack1 from '../imagesc/coinstack1.png';
import coinstack2 from '../imagesc/coinstack2.png';
import earrow from '../imagesc/e-arrow.png';
import arrow from '../imagesc/arrow.png';
import gradient from '../imagesc/Gradient.png';
import gbox1 from '../imagesc/gbox1.png';
import gbox2 from '../imagesc/gbox2.png';
import gbox3 from '../imagesc/gbox3.png';
import gbox4 from '../imagesc/gbox4.png';
import { Leftside, Maintext, Paratext, Emailbox, Gorilladiv ,Gorillaimg, Coinstack1, Coinstack2, Singlecoin
,Rightside, Gorillagradient, Gbox, Gboxtext, Emailtext1, Arrow, Earrow, Ecircle, Owner
, Sline} from '../styles/Gorilla';


const Gorilla=()=> (
  
    
    
    <Gorilladiv>

        <Leftside>
        {/* /* enter leftside content here */ }
        <Maintext>Guild Hub of the Metaverse</Maintext>
        <Paratext>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         <br/>Aenean sagittis mattis hendrerit.Praesent vel risus in risus vestibulum aliquet. </Paratext>
        <Emailbox >
        <Emailtext1>Enter your Email Address <Sline>|</Sline>  <Owner>Owner</Owner><Earrow src={earrow} alt="e-arrow" /> 
         <Ecircle></Ecircle>
        <Arrow src={arrow} alt="arrow" /> </Emailtext1>
        
        </Emailbox>
        <hr/>

        </Leftside>
        
        <Rightside>
        
        <Gorillagradient src={gradient} alt="gradient" />
        <Gorillaimg src={gorilla} alt="gorilla" />
        <Singlecoin src={singlecoin} alt="singlecoin" />
        <Coinstack2 src={coinstack2} alt="coinstack2" />
        <Coinstack1 src={coinstack1} alt="coinstack1" />
        
       <Gbox top="190px" right="100px" src={gbox1} alt="gbox1" />
        <Gboxtext top="203px" right="92px">You mean, i can track my scholars’ performance</Gboxtext>
        
        <Gbox top="390px" right="130px" src={gbox2} alt="gbox2" />
        <Gboxtext top="403px" right="128px">Search and Breed Axies and NFTs</Gboxtext>
       
        <Gbox top="260px" right="435px" src={gbox3} alt="gbox3" />
        <Gboxtext top="272px" right="435px">Automate payments for quick transparent cashout?</Gboxtext>

        <Gbox top="400px" right="430px" src={gbox4} alt="gbox4"/>
        <Gboxtext top="414px" right="425px">All on one platform that doesn’t lag? You’re Kidding</Gboxtext>
        </Rightside>

    </Gorilladiv>
    
  
)

export default Gorilla;
