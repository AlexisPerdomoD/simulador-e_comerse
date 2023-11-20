import { useEffect, useState } from "react";

export function useFetch(url) {
const [fetchData, setfetchData] = useState({
  data:null,
  isLoading:true
});
const fetchDataRespuesta = async() => {
  try{
    const respuesta = await fetch(url);
    const dataJson = await respuesta.json()
    setfetchData({
      data:dataJson,
      isLoading:false
    }
    )
  } catch (error){
    console.error("error emcontrado al esperar datos desde"+url,error)
  }
}

useEffect(()=>{
  fetchDataRespuesta()
  
},[url])
return {
  data:fetchData.data,
  isLoading:fetchData.isLoading
} // modulo para adaptar a cualquier api real que necesite , pudiendo incluir como props a algun otro modulo en esta parte que use data para renderizar algo 
}