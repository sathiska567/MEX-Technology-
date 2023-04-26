import React from "react";
import "./intro.css";
import Design from "./Design";
import Figma from "../assets/figma-logo.webp"
import Html from "../assets/html-css-log.png"
import Other from "../assets/other-logo.png"
import MERN from "../assets/MERN-logo.png"
import school from "../assets/school.mp4"
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Intro = () => {
  return (
    <div className="Intro-div">
      <div className="head">
      <br />  <h1 className="Intro-div-head">Various Products In Web Development</h1>
       
        <p className="Intro-div-para">
          Web development is the process of creating dynamic websites and
          applications that run on the internet. It involves a variety of
          programming languages, frameworks, and tools to design, develop, and
          maintain web-based software.
        </p>

      </div>


<br /><br /><br /><br />
        <table className="project-section-table">

           <tr>
            <td className="project-section-table-td" width={"50%"}>

            <Design 
              
              
              imgURL= {Figma}
              Title={"Figma Project"}
              Description={"Figma is a popular web-based design and prototyping tool used by designers and product teams to create user interfaces and other visual design elements. It's known for its collaborative features, ease of use, and versatility in streamlining the design workflow."} 
              
            
            
            />               
               
            </td>
            
            <td width={"50%"}>

            <Design 
            
               imgURL= {Html} 
              Title={"Html / Css Project"} 
              Description={"Last month we created several web pages for a school. Only html and css were used to create it and it is fully responsive. We also created several web pages using only css and html. Click the button below to view them."} 
              
            
            
            />               
               
            </td>

           </tr>
<br /><br />

           <tr>
            <td>

            

          <Design 
          
          imgURL= {Other}
          Title={"Html / Css / Javascript Project"}
          Description={"video1"} 
          
          /> 
                          
            </td>
            <td>

            <Design 
            
            imgURL= {MERN}
            Title={"MERN Stack Project"}
            Description={"video 3"} 
              
            
            
            />               
               
            </td>

           </tr>

        </table><br /><br /><br />

     <ContactUs /><br /><br /><br />
     <Footer />
          
      </div>

  );
};

export default Intro;
