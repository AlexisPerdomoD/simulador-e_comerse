export const destructurador = (objetoConArrays) =>{
  let listaDeArrays = Object.values(objetoConArrays);
  let categorias = Object.keys(objetoConArrays);
  let respuesta = [];
  listaDeArrays.forEach((e, index) => {
    e.forEach(producto => {
      producto.categoria = categorias[index];
      producto.stock = 40;
    })
    respuesta = respuesta.concat(e)
  })
  return respuesta
}