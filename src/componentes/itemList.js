import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Item from './Item';



export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        
            const getProductos = async () => {
                fetch('http://localhost:8080/api/productos',{
                    method:'GET'
                }).then(resultado=>{
                    return resultado.json()
                }).then(json=>{
                    console.log(json);
                    setProductos(json.payload)
                }).catch(err=>{
                    console.log('Hubo un error', err);
                })
                // let data = await fs.promises.readFile('./data.txt', 'utf-8')
                // let prod = JSON.parse(data)
                // setProductos(prod)
                setCargar(false)

            }
            getProductos();
        
            
            // const getProductos = async () => {
            //     const prodCollection = collection(getData(), 'productos');
            //     const prodSnapshot = await getDocs(prodCollection);
    
            //     const prodList = prodSnapshot.docs.map( doc => ({
            //         id: doc.id,
            //         ...doc.data()
            //     }));
            //     setProductos(prodList)
            //     setCargar(false)
            // }
            // getProductos()
            
       
    },[])


    if (cargar === true) {
        
        return (
            <>
                <div>
                    <Spinner animation="border" variant="info" />
                    <h1>Cargando, porfavor espere... </h1>
                </div>
            </>
        )
    }

    return(
        
        <>
            
            {productos.map((elProd)=>(
                <Item key={elProd.id} {...elProd}/>
            ))}
            
        </>
    )
};