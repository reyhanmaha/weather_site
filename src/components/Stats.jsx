/*
import react from "react";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import axios from 'axios';


async function Stats(){
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	var info;
	

	useEffect(()=>{
		const options = {
  		method: 'GET',
  		url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
  		headers: {
    		'x-rapidapi-key': '1942c9e20cmshed1754f2cb0a7d9p16ebe7jsn386a2f493715',
    		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  		}
	};

	try {
		const response =  axios.request(options);
		setData(response.data);
		setLoading(false);
		//info=response.data;
	} catch (error) {
		setError(error.message);
		setLoading(false);
		//console.error(error);
	}
	});
	
	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error: {error}</p>;
	
	return(
		{data.map(item => (
			<li key={item.id}>{item.name}</li>
		  ))}
		
	);
}
*/

//export default Stats;