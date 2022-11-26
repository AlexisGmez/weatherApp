import React, { useEffect, useState } from 'react'
import { convert } from '../helpers/TransformTemp';
import { useAxios } from '../hooks/useAxios';

import './css/Header.css';
const Header = () => {
  
  const [temp,setTemp] = useState();
  const [isCelsius,setIsCelsuis]= useState(true);  
  
  const data = useAxios();
  
  useEffect(()=>{
    data && setTemp(convert(data.main.temp));
  },[data])

  const handleButton =()=>setIsCelsuis(!isCelsius);

  data && console.log(data)


  return (
    
    !data
    ? <h1 className='header'>Loading</h1>
    :
    <>
        <header className='header'>
            <input type="text" placeholder='type a city' />  
            <div className="img__container">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="" />
            </div>
            <div className="city">
                <h1>{`${data.name}, ${data.sys.country}`}</h1>
            </div>
            <div className="temperature">
                <p className="temperature__p">
                    {
                        isCelsius?
                        `${temp?.celsius}°`
                        :`${temp?.fahrenheigt}° F`
                    }
                </p>
                <button className='button__change' onClick={ handleButton }>grades/Celsius</button>
            </div>   
        </header>
        <section className="weather__conditions">
            <p>{ data.weather[0].description }</p>
            <p>Speed wind: { data.wind.speed } m/s</p>
            <p>Cloud: { data.clouds.all }%</p>
            <p>Pressure: { data.main.pressure }</p>
        </section>
    
    </>
    

  )
}

export default Header
