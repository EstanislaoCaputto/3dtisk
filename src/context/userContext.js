import { createContext, useState } from "react";
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    
    const IniciarSesion = (usuario) => {
        setUser(usuario)
    }
    const AgregarUsuario = async(datosUsuario) => {
        setUser(datosUsuario)
        await fetch('http://localhost:8080/api/usuario',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json; charset=utf-8'
            }
        })
        .then(console.log('Agregado'))
        .catch(err=>console.log(err))
    }
    const CerrarSesion = () =>{
        setUser({})
    }

    return(
        <UserContex.Provider value={{AgregarUsuario, user, CerrarSesion, IniciarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex