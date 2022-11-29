import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { convert } from '../helpers/TransformTemp';
import { useAxios } from '../hooks/useAxios';
import Swal from 'sweetalert2';
import Card from './Card';

import './css/Header.css';
const Header = () => {
  
  const [temp,setTemp] = useState();
  const [isCelsius,setIsCelsuis]= useState(true);  
  const [data, setData] =useState();
  const getData = useAxios();
  

  useEffect(()=>{
      setData(getData);
  },[getData])

  useEffect(()=>{
    data && setTemp(convert(data.main.temp));
  },[data])

  const handleButton =()=>setIsCelsuis(!isCelsius);

  const getApi =async(country)=>{

    const API__KEY = '381978573d8a3f4b42ecd58b2ba90de7';   
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API__KEY}`;
    try {
        const petition = await axios.get(URL);
        setData(petition.data)
        
    } catch (error) {
      Swal.fire(`No se encontro la ciudad ${country}`);
        
    }
  }



  return (
    <Card 
      data={data} 
      isCelsius={isCelsius} 
      temp={ temp } 
      handleButton={handleButton} 
      getApi={getApi}
    />
    
  )
}

export default Header
