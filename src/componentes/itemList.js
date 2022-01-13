import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Item from './Item';



export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        
            const getProductos = async () => {//'https://servidor-3dtisk.herokuapp.com/api/productos', 'http://localhost:8080/api/productos', 'https://3dtisk.com.ar/wp-json/wc/store/products'
                let response = await fetch('https://servidor-3dtisk.herokuapp.com/api/productos',{
                    method:'GET'
                    //Clave del cliente:ck_38d8af740671276a13ff138fa7792c78a1704584
                    //Clave secreta cliente: cs_028ca33bcc5d5bf4b1cabc70b9159ddaf4a7d5d8
                })
                if(!response.ok) {
                    // oups! something went wrong
                    return;
                }
                const posts = await response.json();
                setProductos(posts.payload)
                console.log(posts);
                
                setCargar(false)

            }
            getProductos();
        
            //------------Firebase------------------------------//
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
            <div className='lista'>

                {productos.map((elProd) => (
                    <Item key={elProd.id} {...elProd} />
                ))}

            </div>
        </>
    )
};