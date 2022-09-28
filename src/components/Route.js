import React from 'react';
import Setter from '../Pages/Settings/reactss';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '../Home';
import Dp from '../Pages/Detailed Pages/Dp1';

function Routee() {
  return (
    <div>
        <Router>
        <Routes>
           <Route exact path="/Setter" element={<Setter/>}/>
           <Route exact path="/home" element={<Home/>}/>
           <Route exact path="/Dp1" element={<Dp/>}/>
           <Route exact path="/" element={<Home/>}/>
           
           </Routes>
           
       

        </Router>
        
    </div>

  )
}
export default Routee;
