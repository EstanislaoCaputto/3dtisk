import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import Item from './Item';
// import api from '../db/woocomerce.js'




export default function ItemList() {
    const {Pagina} = useParams()
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);
    console.log(productos.length)

    // useEffect(()=>{
    //     //-----------------woocommers------------------//
    //     api.get('products',{per_page:60}).then((response)=>{
    //         // setProductos(response.data)
    //         // setCargar(false)
    //         console.log(response.data);
    //     }).catch((error)=>{
    //         console.log(error.response.data);
    //     })
    // })

    useEffect(() => {
        const getProductos = async () => {//'https://servidor-3dtisk.herokuapp.com/api/productos', 'http://localhost:8080/api/productos', 'https://3dtisk.com.ar/wp-json/wc/store/products'
            let response = await fetch(`https://3dtisk.com.ar/wp-json/wc/store/products?page=${Pagina}&per_page=100`, {
                per_page: 100

            })
            if (!response.ok) {
                // oups! something went wrong
                return;
            }
            const posts = await response.json();
            setProductos(posts)

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


    }, [Pagina])


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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    
                    <li className="page-item"><a className="page-link" href="/tienda/1">1</a></li>
                    <li className="page-item"><a className="page-link" href="/tienda/2">2</a></li>
                    
                </ul>
            </nav>
        </div>
    )
};