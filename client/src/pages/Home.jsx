import React from 'react'
import "./home.css";
import Banner from '../Components/Banner'
import TimeCounter from '../Components/TimeCounter'
import Intro from '../Components/Intro'
import Navigation from '../Components/Navigation';

const Home = () => {
  return (
    <div className='main-section'>
    <Navigation />
    <Banner />
    
    <table>
      <tr>
        <td> 

        <TimeCounter 
          value={"0"}
          text={"Projects"}
        />
        
         </td>

        <td>
          
           <TimeCounter
              value={"0"}
              text={"Projects"}
        
           />
         </td>

        <td>
          
           <TimeCounter
              value={"0"}
              text={"Projects"}
        
           />
         </td>

       
      </tr>
    </table>

   <br /><br /><br /> 
   <Intro />

    </div>
  )
}

export default Home
