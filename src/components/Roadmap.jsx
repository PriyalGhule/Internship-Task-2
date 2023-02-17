import React from 'react';

import circlegradient from '../imagesc/circlegradient.png';
import outercircle from '../imagesc/outer-circle.png';
import innercircle from '../imagesc/inner-circle.png';
import innericon from '../imagesc/inner-icon.png';
import { Roadmapcontainer1, Roadmapbox1, Roadmapbox2, Circlegradient, Innercircle, Innericon
, Outercircle, Circle, Rect, Textbox, Rect3, Circle3, Roadmapbox3, Textbox3,Roadmapbox4
, Rect4, Circle4, Roadmaptext1, Smallroadmaptext, Contactus, Contactnums
, Inputdiv, Input, Submitcircle, Year, Quarter, Smallpara, Submittext} from '../styles/Roadmap';



const Roadmap=()=> 
  (
    <>
     
      <Roadmapcontainer1>
      <Roadmapbox1></Roadmapbox1>
      <Roadmapbox2>
          <Roadmaptext1>
              Road Map
          </Roadmaptext1>
          <Smallroadmaptext>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </Smallroadmaptext>
          <Rect></Rect>
          <Circle></Circle>
          <Circlegradient src={circlegradient} alt="gradientcircle" />
          <Outercircle src={outercircle} alt="outercircle"/>
          <Innercircle src={innercircle} alt="innercircle" />
          <Innericon src={innericon} alt="innericon" />
          <Textbox  top="850px" left="270px" >
          <Year>2022</Year>
          <Quarter>Q1</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus<br/> augue. Lorem ipsum dolor </Smallpara></Textbox>

      </Roadmapbox2>
      </Roadmapcontainer1>
      <Roadmapbox3>
        <Rect3 top="1065px" right="100px"></Rect3>
        <Circle3 top="1083px" right="150px"></Circle3>
      <Textbox3 top="1050px" right="305px">
          <Year>2022</Year>
          <Quarter>Q2</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus augue. Lorem ipsum dolor </Smallpara></Textbox3>

      </Roadmapbox3>
      <Roadmapbox4>
      <Rect4 top="1268px"  left="95px"></Rect4>
          <Circle4 top="1285px" left="140px"></Circle4>
          <Textbox top="1257px" left="300px">
          <Year>2022</Year>
          <Quarter>Q3</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus augue. Lorem ipsum dolor </Smallpara></Textbox>
      </Roadmapbox4>
      <Roadmapbox3>
      <Rect3 top="1469px" right="100px"></Rect3>
          <Circle3 top="1487px" right= "150px"></Circle3>
          <Textbox3 top="1465px" right="305px">
          <Year>2022</Year>
          <Quarter>Q4</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus augue. Lorem ipsum dolor </Smallpara></Textbox3>
      </Roadmapbox3>
      <Roadmapbox4>
      <Rect4 top="1673px" left="95px"></Rect4>
          <Circle4 top="1690px" left="140px"></Circle4>
          <Textbox top="1667px" left="300px">
          <Year>2023</Year>
          <Quarter>Q1</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus augue. Lorem ipsum dolor </Smallpara></Textbox>
      </Roadmapbox4>
      <Roadmapbox3>
      <Rect3 top="1876px" right="100px"></Rect3>
          <Circle3 top="1894px" right="150px"></Circle3>
          <Textbox3 top="1873px" right="305px">
          <Year>2023</Year>
          <Quarter>Q1</Quarter>
          <Smallpara>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. 
          Suspendisse id purus augue. Lorem ipsum dolor </Smallpara></Textbox3>
      </Roadmapbox3>
      <Contactus>
        <Roadmaptext1>
           Contact us
        </Roadmaptext1>
        <Smallroadmaptext>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Smallroadmaptext>
        <Contactnums>
        <span>Earnmanagement.com</span>
        <span>US  +1 (872) 288 9283</span>
        <span>  UA  +1 (872) 288 9283</span>
        </Contactnums>
        
        <Inputdiv>
          <li><Input type="textbox" value="Your Name"></Input></li>
          <li><Input type="textbox" value="Your Email Address"></Input></li>
          <li><Input type="textbox" value="Describe your needs"></Input></li>
        </Inputdiv>

        <Submitcircle type="button">
        <Submittext> Submit Request</Submittext></Submitcircle>
        
        </Contactus>
    </>
  );

  export default Roadmap;
