import { Component } from "react";

class Select extends Component
{
    
    state=(
        
        {
            showPost:true,
            title:[
                "Tamil Nadu",
                "Delhi",
                "Maharashtra",
                "Andhra Pradesh",
                "Telengana",
                "Karnataka",
                "Madhya Pradesh",
                "Punjab",
                "Uttar Pradesh",
                "Rajasthan",
                "Gujarat",
                "Oddisa",
                
                
            ],
          
          district:
        [
            //TamilNadu
           "Chennai",//0
           "Coimbatore",//1

           
           //Delhi
           "Sangam Vihar",//2
           "Kathputli Colony",//3
           "Kusumpur Pahari.",//4
           "Seemapuri ",//5

           //maharastra
           "Nagpur",
        
        
        
        ]
        }
      )
     titlehandler=()=>
     {
        this.setState({
            showPost:!this.state.showPost
        })
        if(this.state.showPost)
        {
            
        }
     }
        
    render()
    {
        var Value =null;
        if(Value===0)
        {
            <div>
                
            </div>
        }
        
        return(
           <div><br/><br/>    
            <h2 style={{marginRight:"90vw"}}>
                <i>Filter :</i>
            </h2><br/>
             <select className="state">
                <option>---Select State---</option>
                
            <option >{this.state.title[0]}</option>
            <option>{this.state.title[1]}</option>
            <option >{this.state.title[2]}</option>
            <option>{this.state.title[3]}</option>
            <option >{this.state.title[4]}</option>
            <option>{this.state.title[5]}</option>
            <option >{this.state.title[6]}</option>
            <option>{this.state.title[7]}</option>
            <option >{this.state.title[8]}</option>
            <option>{this.state.title[9]}</option>
            <option >{this.state.title[10]}</option>
            <option >{this.state.title[11]}</option>
            

             </select >
             <div>
                <select className="district">
                    <option>---Select District---</option>
                    <option>{this.state.district[0]}</option>
                    <option>{this.state.district[1]}</option>
                </select>
            </div>

        <br/><br/><br/>
        
        </div>
        )
    }
}
export default Select;