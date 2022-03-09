import { createContext, useState } from "react";
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [mail, setMail] = useState("");
    const [contraseña, setContraseña] = useState("")

    let params = {
      username: user,
      email: mail,
      password: contraseña,
      is_super_admin: false,
      roles: "cliente"
    };
    let opcions = {
        method:"POST",
        body:JSON.stringify(params),
        cors:'no-cors'
    }

    const AgregarUsuario = async(user, mail, contraseña) =>{
        setUser(user);
        setContraseña(contraseña)
        setMail(mail);
        await fetch('https://3dtisk.com.ar/wp/v2/users', opcions)
            .then(console.log('exito'))
            .catch(err=>console.log('error',err))
    }
    const CerrarSesion = () => {
        setUser();
        setContraseña();
        setMail();
    }
    return(
        <UserContex.Provider value={{AgregarUsuario, user, mail, CerrarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex