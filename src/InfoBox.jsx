/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    // let INIT_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1496347315686-5f274d046ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2F0aGVyfGVufDB8fDB8fHwws";
    const COLD_URL = "https://images.unsplash.com/photo-1522255735762-120ef02c394d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3YXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RIAN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


  return (
    <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
            sx={{ height: 150}}
            image={
                info.humidity > 75 
                ? RIAN_URL 
                : info.temp > 20 
                ? HOT_URL 
                : COLD_URL}

            title="green iguana"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity > 75 
                        ? <ThunderstormIcon/>
                        : info.temp > 30 
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
                    <div>
                        <p>Temperature = {info.temp}&deg; C</p>
                        <p>Humidity = {info.humidity} %</p>
                        <p>Min Temp = {info.tempMin}</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The weather cen be described as <i>{info.weather}</i> and feel like = {info.feelsLike}&deg;C</p>
                    </div>
                </Typography>
            </CardContent>
            
        </Card>
        </div>
    </div>
  );
}
