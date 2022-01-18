import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url:'https://3dtisk.com.ar',
    consumerKey:'ck_38d8af740671276a13ff138fa7792c78a1704584',
    consumerSecret:'cs_028ca33bcc5d5bf4b1cabc70b9159ddaf4a7d5d8',
    version:'wc/v3'
})

 //Clave del cliente:ck_38d8af740671276a13ff138fa7792c78a1704584
 //Clave secreta cliente: cs_028ca33bcc5d5bf4b1cabc70b9159ddaf4a7d5d8
export default api;