
import axios from 'axios';

const MY_API_KEY = '33373070-0a3de92214998aff69d545527'
const ENDPOINT = "https://pixabay.com/api/?key="


export default class ImgApi{
    constructor(){
        this.queryPage = 1;
        this.searchQuery = "";
        const axios = require('axios');
        // this.countImg = 0;
    }
    
    async AxioSearch(){
    return await axios.get(`${ENDPOINT}${MY_API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.queryPage}`)
    .then((response) => {
        if(response.data.totalHits === 0){
            throw new Error(response.statusText);
        }
        
        console.log(response.data.totalHits);
        return response.data
    }).then((data => {
        this.incrementPage();
      
        
        return data;
    }));
    }

    resetPage(){
        this.queryPage = 1;
    }

    incrementPage(){
        this.queryPage += 1;
    }
    

    // resetCountImg() {
    //     this.countImg = 0;
    //   }    
    
}








