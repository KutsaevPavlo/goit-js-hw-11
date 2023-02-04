
import axios from 'axios';
const MY_API_KEY = '33373070-0a3de92214998aff69d545527'
const ENDPOINT = "https://pixabay.com/api/?key="
const axios = require('axios');

// https://pixabay.com/api/?key=33373070-0a3de92214998aff69d545527&q=yellow+flowers&image_type=photo


function AxioSearch(name){
return axios.get(`${ENDPOINT}${MY_API_KEY}&q${name}&image_type=photo&orientation=horizontal&safesearch=true`)
.then((response) => {
    // if(!response.ok){
    //     throw new Error(response.statusText);
    // }
    return response.data
});
}

export default { AxioSearch };





// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.