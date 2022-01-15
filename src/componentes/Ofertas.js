import { useEffect, useState } from "react"


export default function Ofertas() {
    const [desc, setDesc] = useState([])
    useEffect(()=>{
        let getOfertas = async ()=>{
            let respuesta = await fetch('https://servidor-3dtisk.herokuapp.com/api/productos',{
                method:'GET'
            })
            let prod = await respuesta.json()
            setDesc(prod.payload)
            
        }
        getOfertas()
    })
    
    return(
        <div>
            {desc.map(p=>{
                return(p.Nombre, p.PrecioNormal)
            })}
        </div>
    )
}