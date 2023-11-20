export const destructurador= (objetoConArrays) =>{
  let listaDeArrays = Object.values(objetoConArrays);
  let respuesta = [];
  listaDeArrays.forEach((e) => {
    respuesta = respuesta.concat(e)
  })
  return respuesta
}