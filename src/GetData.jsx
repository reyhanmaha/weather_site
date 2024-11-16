import axios from "axios";
async function GetData(){
    let data;
    
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
        data=response.data;
    } catch (error) {
        console.error(error);
    }
    return(
        <p>{data[0].visibility}</p>
    )
}
export default GetData;