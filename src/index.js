// // import './css/styles.css';
import ImgApi from "./Axio.js"
import LoadMoreBtn from "./components/LoadMoreBtn.js"
import Notiflix from 'notiflix';


// const DEBOUNCE_DELAY = 300;
// const _ = require('lodash');
// const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");
const galletyList = document.querySelector('.gallery');
const form = document.getElementById("search-form");
// const loadMore = document.querySelector('.load-more');
const loadMore = new LoadMoreBtn('.load-more');

// let inputValue = "";
const imgApi = new ImgApi();

form.addEventListener("submit", onInput);
loadMore.button.addEventListener("click", onLoadMore);

function onInput(e){
    e.preventDefault();
    
    imgApi.searchQuery = e.currentTarget.elements.searchQuery.value;
    console.log(imgApi.searchQuery);

    
    cleanerMarkup(galletyList);

    if(imgApi.searchQuery === ''){
        return 
    };   
    imgApi.resetPage();
    loadMore.show();

    onLoadMore().finally(() => form.reset());
            
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

      loadMore.disable();

      return imgApi.AxioSearch().then(({hits}) => {
                     
        return hits.reduce(
            (markup, hits) => createMarkup(hits) + markup, ""
        );
       
        }).then((markup) =>
        {updateGalleryCards(markup);
        loadMore.enable()})
        
        .catch(error => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));

    };
     

    
    // Update markup

    function updateGalleryCards(markup){
        galletyList.insertAdjacentHTML("beforeend", markup);
    }


    
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
