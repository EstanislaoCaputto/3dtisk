import fetch from 'node-fetch'

const wooClientKey = 'ck_d2e718bad0188d4cd94ac745d99f546530b25dd3';
const wooClientSecret = 'cs_ee8d6db55711281fc2f73efe7f2836d9983c53d5';
const wooUrl = 'https://3dtisk.com.ar/wp-json';

function basicAuth(key, secret) {
    let hash = Buffer.from(key + ':' + secret, 'binary').toString('base64');
    return "Basic " + hash;
}

let auth = basicAuth(wooClientKey, wooClientSecret);

async function getProducts() {
    try {
        const response = await fetch(wooUrl + '/wc/v3/products', {
            headers: {"Authorization": basicAuth(wooClientKey, wooClientSecret)}
        })
        return await response.json()
        
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

async function getUsers(){
    try {
        const respuesta = await fetch(wooUrl + '/wp/v2/users/', {
            headers: {"Authorization": basicAuth(wooClientKey, wooClientSecret)}
        })
        return await respuesta.json()
    } catch (error) {
        console.log('errores' + error)
    }
}

let params = {
    username:'Tano',
    email:'mail@mail.com',
    password:'123',
    is_super_admin:false,
    roles:'Cliente'
}

async function postUsers(user){
    try {
        const peticion = await fetch(wooUrl+'/wp/v2/users/',{
            method:'POST',
            headers:{"Authorization": basicAuth(wooClientKey, wooClientSecret)},
            body: JSON.stringify(user)
        })
    } catch (error) {
        console.log('errores' + error)
    }
}

// let productos = getProducts().then(respu=>console.log(respu))
// getUsers().then(respu=>console.log(respu))
// postUsers(params).then(resp=>console.log(resp))

