import { createContext, useState } from "react";
import faker from 'faker'
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [imagUser, setImagUser] = useState({})

    const avatarImg = async() =>{
        let img = await faker.image.animals(200,200,true)
        console.log(img);
        setImagUser(img)
        
    }
    
    const IniciarSesion = async(usuario) => {
        await fetch('http://localhost:8080/api/usuario/logear',{
            method:'POST',
            body:JSON.stringify(usuario),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(respuesta=>{
            return respuesta.json()
        })
        .then(resp=>{
            setUser(resp[1])
            avatarImg()
        })
        .catch(err=>console.log(err))
        
        // setUser(usuario)
    }
    const AgregarUsuario = async(datosUsuario) => {
        setUser(datosUsuario)
        await fetch('http://localhost:8080/api/usuario',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(console.log('Agregado'))
        .catch(err=>console.log(err))
    }
    const CerrarSesion = () =>{
        setUser({})
    }

    return(
        <UserContex.Provider value={{AgregarUsuario, user, imagUser, CerrarSesion, IniciarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex