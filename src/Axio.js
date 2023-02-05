
import axios from 'axios';
const MY_API_KEY = '33373070-0a3de92214998aff69d545527'
const ENDPOINT = "https://pixabay.com/api/?key="


// https://pixabay.com/api/?key=33373070-0a3de92214998aff69d545527&q=yellow+flowers&image_type=photo

export default class ImgApi{
    constructor(){
        this.queryPage = 1;
        this.searchQuery = "";
        const axios = require('axios');
    }
    
    AxioSearch(name){
    return axios.get(`${ENDPOINT}${MY_API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=4&page=${this.queryPage}`)
    .then((response) => {
        if(response.data.totalHits === 0){
            throw new Error(response.statusText);
        }
        return response.data
    }).then((data => {
        this.queryPage += 1;
        return data;
    }));
    }

}









// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.