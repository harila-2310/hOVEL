import { Component } from "react";
import { Link } from "react-router-dom";
import "../bar/bar.css"

n
class Bar extends Component
{
   
        render(props)
    {
        return(
              <div className={this.props.cName}>
                <h2>{this.props.name}</h2>
                <img src={this.props.img} alt=""/><br/><br/>
                <b>{this.props.name} has School Childrens,<br/>Who need help financially!</b>
                <br/><br/>
                <button style={{width:"15vh",height:"4vh",borderRadius:"8px",background:"lightyellow",fontSize:"1.4em"}}>Donate</button>
                <Link to={this.props.Linkname}><h3 className="read-more">Read More</h3></Link>
              </div>

        )
    }
}
export default Bar;