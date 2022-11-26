import axios from "axios";
import { useEffect, useState } from "react"

export const useAxios=()=>{

    const [location, setLocation] =useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsloading] = useState(true);

    const getPosition =(pos)=>{ 
        setLocation({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude
        });      
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(getPosition);
    },[]);

    
    useEffect(()=>{
        getWeather();
    },[location]);
    

    
    const getWeather = async() =>{

        const API__KEY = '381978573d8a3f4b42ecd58b2ba90de7';   

        if (location) {
            try {

                setIsloading(true);
                const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API__KEY}`;
                const petition = await axios.get(URL);
                setWeather(petition);
                
            } catch (error) {
                console.error(error);
            }
            
        }

       
    }

    return weather?.data;
             
}