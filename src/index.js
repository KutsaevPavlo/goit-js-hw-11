// // import './css/styles.css';
import ImgApi from "./Axio.js"
import Notiflix from 'notiflix';


// const DEBOUNCE_DELAY = 300;
// const _ = require('lodash');
// const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");
const galletyList = document.querySelector('.gallery');
const form = document.getElementById("search-form");
const loadMore = document.querySelector('.load-more');

// let inputValue = "";
const imgApi = new ImgApi();

form.addEventListener("submit", onInput);
loadMore.addEventListener("click", onLoadMore);

function onInput(e){
    e.preventDefault();
    
    imgApi.searchQuery = e.currentTarget.elements.searchQuery.value;
    console.log(imgApi.searchQuery);

    // cleanerMarkup(countryList);
    // cleanerMarkup(countryInfo);
    cleanerMarkup(galletyList);

    if(imgApi.searchQuery === ''){
        return 
    };   

    imgApi.AxioSearch(imgApi.searchQuery).then(({hits}) => {
        
        // const markupForMoreThenTwo= createMarkupForMoreThenTwo(data);
        // const markupForOne= createMarkup(data);
        
        // console.log(data);
        // console.log(createMarkup(hits[0]));
        
        return hits.reduce(
            (markup, hits) => createMarkup(hits) + markup, ""
        );
        // if (data.length > 10) {
        // Notiflix.Notify.info("Too many matches found. Please enter a more specific name")} 
            
        // else if(data.length >= 2 && data.length < 10) {
        // addMarkup(countryList, markupForMoreThenTwo);}
                
        // else 
        // addMarkup(countryInfo, markupForOne);
        // }).then((markup) => updateGalleryCards(markup))
        }).then(updateGalleryCards)
        
        .catch(error => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))
        .finally(() => form.reset());
            
        };
        
        function createMarkup({ webformatURL, tags, likes, views, comments, downloads}) {
            return `
            <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </div>
            `
        ;
    };


    

    function onLoadMore(){

      imgApi.AxioSearch(imgApi.searchQuery).then(({hits}) => {
                     
        return hits.reduce(
            (markup, hits) => createMarkup(hits) + markup, ""
        );
       
        }).then(updateGalleryCards)
        
        .catch(error => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));

    };
     
//  function createMarkupForMoreThenTwo(data){
//         return data
//         .map(({ name, flags}) => {
//             return `
//             <div class="countrie-card">
//             <img src="${flags.svg}" alt="" width="50" height="30"> <p>${name.official}</p>
//             </div>
//             `
//         })
//         .join("");
//     }
    
    
    // Update markup

    function updateGalleryCards(markup){
        galletyList.insertAdjacentHTML("beforeend", markup);
    }

// function addMarkup(element, constMarkup) {
//         element.insertAdjacentHTML("beforeend", constMarkup);
//     }
    
    
//     //   Cleaner
    
    
    function cleanerMarkup(element) {
           return  element.innerHTML = '';
             }


        
        //TEST
//  API.AxioSearch("cat red").then(console.log);
//  //TEST 2
//  API.fetchCountries("sw").then((data) => {
//      console.log(createMarkup(data));
//      console.log(createMarkupForMoreThenTwo(data));
     
     
//      const markupForMoreThenTwo= createMarkupForMoreThenTwo(data);
//      const markupForOne= createMarkup(data);
//      if (data.length > 10) {
//          Notiflix.Notify.info("Too many matches found. Please enter a more specific name")} 
//          else if(data.length >= 2 && data.length < 10) {
//          addMarkup(countryList, markupForMoreThenTwo);
//          }
//          else 
//          addMarkup(countryInfo, markupForOne);
//          console.log(data.length);
//      });
