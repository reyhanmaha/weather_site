//import { useRef,useState } from "react";
import "./Navbar.css";
function Navbar(){
    
    return(
        <div className="sidebar">
            <form>
                <input type="number" placeholder="Latitude"></input>
                <input type="number" placeholder="Longitude"></input>
                <button type="submit">Submit</button>   
            </form>
        </div>
    )
}
export default Navbar;