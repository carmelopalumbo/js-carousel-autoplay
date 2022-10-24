// js

//creo un array con le immagini
const images = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

// inserisco le immagini nell html
const slider = document.querySelector('.slides');

let imgTags = '';

 for(i = 0; i < images.length; i++){
    imgTags += `<img src="img/${images[i]}" alt="${images[i]}" class="item hide">`;
 }

slider.innerHTML = imgTags;

//console.log(slider);

//salvo in una collection tutti gli elementi html che hanno la classe 'item'

const items = document.getElementsByClassName('item');


//inserisco thumbnails

const thumbnails = document.querySelector('.thumbnails-box');

let thumbTags = '';

 for(i = 0; i < images.length; i++){
    thumbTags += `<img src="img/${images[i]}" alt="${images[i]}" class="mini">`;
 }

thumbnails.innerHTML = thumbTags;

//console.log(slider);

//salvo in una collection tutti gli elementi html che hanno la classe 'item'

const miniItems = document.getElementsByClassName('mini');


//rimuovo d-none al primo elemento dell array

let counterImages = 0;
items[counterImages].classList.remove('hide');
miniItems[counterImages].classList.add('thumb-active');

//al click cambio l'immagine attiva dello slider e della miniatura

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

previous.addEventListener('click', prevFunction);

next.addEventListener('click', nextFunction);




// funzioni

//click button indietro
function prevFunction(){
    if(counterImages === 0){
        miniItems[counterImages].classList.remove('thumb-active');

        items[counterImages].classList.add('hide');
        counterImages = items.length - 1;
        items[counterImages].classList.remove('hide');

        miniItems[counterImages].classList.add('thumb-active');
    }else{
        miniItems[counterImages].classList.remove('thumb-active');

        items[counterImages].classList.add('hide');
        items[--counterImages].classList.remove('hide');

        miniItems[counterImages].classList.add('thumb-active');
    }
}


//click button avanti
function nextFunction(){
    if(counterImages === items.length - 1){
        miniItems[counterImages].classList.remove('thumb-active');

        items[counterImages].classList.add('hide');
        counterImages = 0;
        items[counterImages].classList.remove('hide');

        miniItems[counterImages].classList.add('thumb-active');
    }else{
        miniItems[counterImages].classList.remove('thumb-active');

        items[counterImages].classList.add('hide');
        items[++counterImages].classList.remove('hide');

        miniItems[counterImages].classList.add('thumb-active');
        }
}


//scorrimento automatico carousel
let autoCarousel = setInterval(nextFunction, 2000);

slider.addEventListener('mouseover', function(){
    clearInterval(autoCarousel);
});

slider.addEventListener('mouseout', refresh);

function refresh(){
    autoCarousel = setInterval(nextFunction, 2000);
}