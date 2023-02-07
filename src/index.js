
import ImgApi from "./axio.js"
import LoadMoreBtn from "./components/LoadMoreBtn.js"
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galletyList = document.querySelector('.gallery');
const form = document.getElementById("search-form");

const loadMore = new LoadMoreBtn({
  selector: '.load-more',
  isHiden: true,
});

const imgApi = new ImgApi();

form.addEventListener("submit", onInput);
loadMore.button.addEventListener("click", onLoadMore);

function onInput(e){
    e.preventDefault();
    
    imgApi.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
    console.log(imgApi.searchQuery);

    
    cleanerMarkup(galletyList);

    if(!imgApi.searchQuery){
        return 
    };   
    imgApi.resetPage();
    loadMore.show();

      

    onLoadMore().finally(() => form.reset());
            
        };
        
function createMarkup({ largeImageURL, webformatURL, tags, likes, views, comments, downloads}) {
            return `
            <div class="photo-card">
            <a class='photo-link' href="${largeImageURL }">
            <img class ="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
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


    
   

// function onLoadMore(){

//       loadMore.disable();

//       return imgApi.AxioSearch()
//       .then((data => {
            
//         chekingTotalHits(imgApi.countImg,data.totalHits)
//         return data;

//     }))
            
//       .then(({hits}) => {
          
//         imgApi.countImg += hits.length;
        
//         return hits.reduce(
//             (markup, hits) => createMarkup(hits) + markup, ""
//         );
       
//         }).then((markup) =>
//         {
//         updateGalleryCards(markup);
        
//         loadMore.enable();      

//         })
        
//         .catch(error => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again!"));

//     };
     

    
    // Update markup

function updateGalleryCards(markup){
        galletyList.insertAdjacentHTML("beforeend", markup);
        gallery.refresh();
    }


    
//     //   Cleaner
    
    
function cleanerMarkup(element) {
           return  element.innerHTML = '';
             }


        
// Controle

function chekingTotalHits(countImg, totalHits){
  
        if(countImg === totalHits){
          loadMore.hide();
          loadMore.resetCountImg();
          Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
        }
}

let gallery = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 250,
});




// async function onLoadMore(){
    
//     loadMore.disable();
//     try {
       
//         const response = await imgApi.AxioSearch();
//         console.log(response);
//         const chekingTotalHitsData = await chekingTotalHits(imgApi.countImg,data.totalHits);
//         console.log(chekingTotalHitsData);
//         // return response;
        

//     //     .then((data => {
//     //         chekingTotalHits(imgApi.countImg,data.totalHits)  
            
//     //       return data;        
//     //   }))
              
//         const nextResponse = await (() => {
            
//           imgApi.countImg += hits.length;
          
//           return hits.reduce((markup, hits) => createMarkup(hits) + markup, "");         
//           })

//           return updateGalleryCards(nextResponse);
//           loadMore.enable(); 
          


// } catch (error) {
//    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again!");

// }}







async function onLoadMore(){
    
    loadMore.disable();
    try {
       
        loadMore.disable();

      return imgApi.AxioSearch()
      .then((data => {
            
        chekingTotalHits(imgApi.countImg,data.totalHits)
        return data;

    }))
            
      .then(({hits}) => {
          
        imgApi.countImg += hits.length;
        
        return hits.reduce(
            (markup, hits) => createMarkup(hits) + markup, ""
        );
       
        }).then((markup) =>
        {
        updateGalleryCards(markup);
        
        loadMore.enable();      

        })
          


} catch (error) {
   Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again!");

}}