// // import './css/styles.css';
import API from "./Axio.js"
import Notiflix from 'notiflix';


// const DEBOUNCE_DELAY = 300;
// const _ = require('lodash');
// const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");
const galletyList = document.querySelector('.gallery');
const form = document.getElementById("search-form");

form.addEventListener("submit", onInput);

function onInput(e){
    e.preventDefault();
    
    const inputValue = e.currentTarget.elements.searchQuery.value;
    console.log(inputValue);

    // cleanerMarkup(countryList);
    // cleanerMarkup(countryInfo);
    cleanerMarkup(galletyList);

    if(inputValue === ''){
        return 
    };   

    API.AxioSearch(inputValue).then(({hits}) => {
        
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
        .finally(() => form.reset())
        
        .catch(error => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));
            
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


    
    // return data
    // .map(({ webformatURL, tags, likes, views, comments, downloads}

    // webformatURL - посилання на маленьке зображення для списку карток.
    // largeImageURL - посилання на велике зображення.
    // tags - рядок з описом зображення. Підійде для атрибуту alt.
    // likes - кількість лайків.
    // views - кількість переглядів.
    // comments - кількість коментарів.
    // downloads - кількість завантажень.




// `<div class="countrie">
// <h2 class="countrie-card-titel"> <img src="${flags.svg}" alt="" width="70" height="50"> ${name.official}</h2>
// <p>Capital: ${capital}</p>
// <p>Population: ${population}</p>
// <p>Languages: ${Object.values(languages)}</p>
// </div>
// `

    
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
        galletyList.innerHTML = markup;
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
