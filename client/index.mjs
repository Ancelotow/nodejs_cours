import axios from 'axios'


(async () => {

    const urlApi = 'https://esgi-api-nodejs.herokuapp.com/';

    const getProduct = () => {
        axios.get(urlApi + "products").then((res) => {
            console.log(res.data)
        });
    };

})();