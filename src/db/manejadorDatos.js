import fetch from 'node-fetch'

let buscarObjetos = async()=>{
  let obj = await fetch('http://localhost:8080/api/productos',{
    method:'GET',
  })
  let respuesta = await obj.json()
  return {status:'Joya', obj:respuesta}
}
export default buscarObjetos;
