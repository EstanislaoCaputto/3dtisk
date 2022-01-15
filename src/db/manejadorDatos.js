import fetch from 'node-fetch'

let buscarObjetos = async()=>{
  let obj = await fetch('https://servidor-3dtisk.herokuapp.com/api/productos',{
    method:'GET'
  })
  let respuesta = await obj.json()
  return {status:'Joya', obj:respuesta}
}
export default buscarObjetos;
