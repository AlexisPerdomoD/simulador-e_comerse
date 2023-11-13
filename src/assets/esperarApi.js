import { useEffect, useState } from "react";

export function esperarApi(url) {
const [data, setData] = useState([]);

useEffect(()=>{
  const fetchData = async() => {
      try{
        const respuesta = await fetch(url);
        const dataJson = await respuesta.json()
        setData(dataJson)
      } catch (error){
        console.error("error emcontrado al esperar datos desde"+url,error)
      }
  }
  fetchData()
},[])
return data // modulo para adaptar a cualquier api real que necesite , pudiendo incluir como props a algun otro modulo en esta parte que use data para renderizar algo 
}