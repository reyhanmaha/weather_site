import "./Content.css"
import axios from "axios";
//import React,{Suspense} from "react";
//import GetData from "./GetData";
import React,{useEffect,useState} from "react";
//const AsyncComponent = React.lazy(() => import('./GetData'));
function Content(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function GetData(){
            //let data;
            
            const options = {
            method: 'GET',
            url: 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028',
            headers: {
                'x-rapidapi-key': '1942c9e20cmshed1754f2cb0a7d9p16ebe7jsn386a2f493715',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
            };
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data);
                //return data=response.data;
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        }
        GetData();
    },[]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!data) {
        return <div>No data available</div>;
      }
      
      return(
        <div className="container">
            <p>{data}</p>

        </div>
    )
}

export default Content;