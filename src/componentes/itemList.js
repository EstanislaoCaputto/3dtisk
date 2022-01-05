import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Item from './Item';



export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        
            const getProductos = async () => {
                let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products',{
                    method:'GET'
                })
                if(!response.ok) {
                    // oups! something went wrong
                    return;
                }
                const posts = await response.json();
                setProductos(posts)
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