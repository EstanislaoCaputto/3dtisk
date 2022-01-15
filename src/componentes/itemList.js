import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Item from './Item';
import api from '../db/woocomerce.js'




export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        //-----------------woocommers------------------//
        // api.get('products',{per_page:60}).then((response)=>{
        //     setProductos(response.data)
        //     setCargar(false)
        //     console.log(response.data);
        // }).catch((error)=>{
        //     console.log(error.response.data);
        // })
        
            const getProductos = async () => {//'https://servidor-3dtisk.herokuapp.com/api/productos', 'http://localhost:8080/api/productos', 'https://3dtisk.com.ar/wp-json/wc/store/products'
                let response = await fetch('https://3dtisk.com.ar/wp-json/wc/store/products?per_page=100',{
                    per_page:60
                   
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
                <div className='Cargador'>
                    <Spinner animation="border" variant="info" size='lg'/>
                    <h1>Cargando, porfavor espere... </h1>
                </div>
            </>
        )
    }

    return(
        
        <div className='Cuerpo'>
            {/* <div className='animacion'>
                <Animado/>
                <Animado2/>
                <Animado3/>
            </div> */}
            <div className='lista'>

                {productos.map((elProd) => (
                    <Item key={elProd.id} {...elProd} />
                ))}

            </div>
        </div>
    )
};