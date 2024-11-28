import "./Content.css"
import axios from "axios";
import React from "react";
import * as d3 from "d3";
//import GetData from "./GetData";
import {useEffect,useState} from "react";
//const AsyncComponent = React.lazy(() => import('./GetData'));
function Content(props){
    const [data, setData] = useState(null);
    const options = {
      method: 'GET',
      url: 'https://meteostat.p.rapidapi.com/point/monthly',
      params: {
        lat: props.info.lat,
        lon: props.info.long,
        alt: props.info.elv,
        start: props.info.startingDate,
        end: props.info.endingDate
      },
      headers: {
        'x-rapidapi-key': '1942c9e20cmshed1754f2cb0a7d9p16ebe7jsn386a2f493715',
        'x-rapidapi-host': 'meteostat.p.rapidapi.com'
      }
    };
    
      useEffect(() => {
        axios.request(options)
          .then((response) => setData(response.data))
          .catch((error) => console.error('Error:', error));
      }, []);

      
      return(
        <div className="container">
          
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
            
        </div>
    )
}

export default Content;