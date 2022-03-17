import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Item from "./Item";

export default function Resina(){
    const [impresoras, setImpresoras] = useState([])

    useEffect(() => {
      const getImpresora = async () => {
        let response = await fetch(
          "https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100&page=1&search=Resina"
        );
        if (!response.ok) {
          // oups! something went wrong
          return;
        }
        const posts = await response.json();
        setImpresoras(posts);
      };
      getImpresora();
    },[]);
    
    let resina = [];
    useEffect(()=>{
        impresoras.forEach((elem) => {
          if(elem.name.includes('Resina')) resina.push(elem)
          });
          setImpresoras(resina);
          
    },[])
    console.log(impresoras);


    
    if (impresoras.length === 0){
        return (
            <>
                <div className='Cargador'>
                    <Spinner animation="border" variant="info" size='lg'/>
                    <h1>Cargando, porfavor espere... </h1>
                </div>
            </>
        )
    }
    return(
        <div className="lista">
            {impresoras.map((impresora)=>(
                <Item key={impresora.id} {...impresora} />
            ))}
        </div>
    )
}