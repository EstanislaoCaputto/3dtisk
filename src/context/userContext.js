import { createContext, useState } from "react";
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [mail, setMail] = useState("");
    const [contraseña, setContraseña] = useState("")

    const AgregarUsuario = (user, mail, contraseña) =>{
        setUser(user);
        setContraseña(contraseña)
        setMail(mail);
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