import axios from "axios";
const url = "https://weather-app-ankit.herokuapp.com/weather?address=ahmedabad";

interface weather {
    forecast : string,
    location: string
}
axios.get(url).then((response)=>
    {
        const weatherData = response.data as weather;
        const location = weatherData.location
        const forecast = weatherData.forecast
        passData(location ,  forecast)
    }
);

const passData = (location:string , forecast:string) => {
    console.log(`
    ${forecast}
    ${location} 
`);
}