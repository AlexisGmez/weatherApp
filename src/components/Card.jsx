import React, { useState } from 'react'

const Card = ({data,isCelsius, temp,handleButton,getApi}) => {


    const [country, setCountry] = useState('');  
    const handleChange =(e)=>setCountry(e.target.value);

    const handlesubmit =(e)=>{
        e.preventDefault();
        getApi(country);
        setCountry('');
    }

  return (
    !data
    ? <h1 className='header'>Loading</h1>
    :
    <>
        <header className='header'>

            <form onSubmit={handlesubmit}>
                <input 
                    type="text" 
                    placeholder='type a city' 
                    value={country}
                    onChange={handleChange}
                /> 
            </form> 

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

export default Card
