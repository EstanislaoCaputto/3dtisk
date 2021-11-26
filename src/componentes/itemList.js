import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import fs from 'fs'
//import producto from '../../public/DATABASE.txt'
import { collection, getDocs } from 'firebase/firestore';
import {getData} from '../firebase';
import Item from './Item';



export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        
            // const getProductos = async () => {

            //     let data = await fs.promises.readFile('./data.txt', 'utf-8')
            //     let prod = JSON.parse(data)
            //     setProductos(prod)
            //     setCargar(false)

            // }
            // getProductos();
        
            
            const getProductos = async () => {
                const prodCollection = collection(getData(), 'productos');
                const prodSnapshot = await getDocs(prodCollection);
    
                const prodList = prodSnapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(prodList)
                setCargar(false)
            }
            getProductos()
            
       
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