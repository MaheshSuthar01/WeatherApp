/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "6461e8100bf40f7197493982450ca958";

    let getWeatherInfo = async () => {
        try{
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            
            let result = {
                city : city,
                temp : jsonResponce.main.temp,
                tempMin : jsonResponce.main.temp_min,
                tempMax : jsonResponce.main.temp_max,
                humidity : jsonResponce.main.humidity,
                feelsLike : jsonResponce.main.feels_like,
                weather : jsonResponce.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    };

    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        // eslint-disable-next-line no-unused-vars
        }catch(err){
            setError(true)
        }
       
    };

    return (
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>

            {error && <p style={{color: "red"}}>No such place exits</p>}

            </form>
        </div>
    )
}