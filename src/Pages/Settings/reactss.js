import { Component } from "react";
import "../Settings/reactss.css";


class Setter extends Component
{
    render()
    {
        return(
            <div className="settings">
                
        

               <h1 style={{textAlign:"center",fontSize:"3.2em",background:"#008970",color:"#99eedf",fontSize:"5em"}}>Settings</h1><br/><br/><br/><br/>  
                <div className="nav-links">
                <ul style={{listStyle:"none",textAlign:"center"}}>
                    <li style={{fontSize:"2.4em"}}>Home</li><br/>         
                    <li style={{fontSize:"2.4em"}}>Profile</li><br/>
                  
                    <li style={{fontSize:"2.4em"}}>Languages</li><br/>
                    <li style={{fontSize:"2.4em"}}>Change Name</li><br/>
                    <li style={{fontSize:"2.4em"}}>G hari</li><br/>
                    <li style={{fontSize:"2.4em"}}>Log Out</li><br/>  
                </ul>
                </div>
            </div>
        )
    }
}
export default Setter;