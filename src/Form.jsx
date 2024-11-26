import { useState } from "react";
import "./Form.css";
function Form(){
    const [userData,setInputs]= useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData)
      }
      
    return(
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="lat">Enter Latitute</label>
                <input type="number" id="lat" name="lat" value={userData.latitude} placeholder="Latitude" onChange={handleChange} required></input>
                <br/>
                <label htmlFor="long">Enter Longitude</label>
                <input type="number" id="long" name="long" value={userData.longitude} placeholder="Longitude" onChange={handleChange} required></input>
                <br/>
                <label htmlFor="elv">Enter Elevation</label>
                <input type="number" id="elv" name="elv" value={userData.elevation} placeholder="Elevation" onChange={handleChange}></input>
                <br/>
                <label htmlFor="begin">Enter Start</label>
                <input type="date" id="begin" name="startingDate" value={userData.starting} placeholder="Start" onChange={handleChange} required></input>
                <br/>
                <label htmlFor="end">Enter End</label>
                <input type="date" id="end" name="endingDate" value={userData.ending} placeholder="End" onChange={handleChange} required></input>
                <br/>
                <label htmlFor="tz">Enter Timezone</label>
                <input type="text" id="tz" name="zone" value={userData.timeZone} placeholder="Timezone" onChange={handleChange}></input>
                <br/>
                <button id="dataBtn" type="submit">Search</button>   
            </form>
        </div>
    )
}
export default Form;