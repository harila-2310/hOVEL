import React from 'react';
import Bar from "./components/bar/bar";
import { Link } from "react-router-dom";
import "../src/Home.css";
import picc from "../src/images/settings.jpeg";

import pic from "../src/images/download.jpeg";
import pic1 from "../src/images/1.jpeg";
import pic2 from "../src/images/2.jpeg";
import Select from "./components/Select";

function Home() {
  return (
    <div>
        <div className="Head">
        <h1  style={{fontSize:"5em",color:"#99eedf",fontWeight:"1000px"}}>Home </h1>
        <Link to="/Setter" ><img className="image-settings" src={picc} alt=""/></Link>
        
        </div><br/><br/>
        
         <Select/>
        
        <div className="description">
        <Bar Linkname="/Dp1" cName="img1" name="Royapuram" img={pic}/>
        <Bar cName="img2" name="Madhavaram" img={pic1}/>
        <Bar cName="img3" name="Tiruvottiyur" img={pic2}/>
        <Bar cName="img4" name="Royapuram" img={pic}/>
        <Bar cName="img5" name="Madhavaram" img={pic1}/>
        <Bar cName="img6" name="Tiruvottiyur" img={pic2}/>
        <Bar cName="img7" name="Royapuram" img={pic}/>
        <Bar cName="img8" name="Madhavaram" img={pic1}/>
        <Bar cName="img9" name="Tiruvottiyur" img={pic2}/>
        </div>
        
    </div>
  )
}

export default Home