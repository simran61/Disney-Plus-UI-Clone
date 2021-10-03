const carousel = document.querySelector('.carousel');
let sliders = []

let slideIndex= 0;
const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex=0;
    }  

    //creating DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let small = document.createElement('small');
    let p = document.createElement('p');
    let h2 = document.createElement('h2');


    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));    
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    small.appendChild(document.createTextNode(movies[slideIndex].moreInfo));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    h2.appendChild(document.createTextNode(movies[slideIndex].watch));
    content.appendChild(h1);
    content.appendChild(small);
    content.appendChild(p);
    content.appendChild(h2);

    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up img
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classname
    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie-title';
    small.className= 'more-info'
    p.className= 'movie-des';
    h2.className= 'watch-movie';

    sliders.push(slide)

    //adding sliding effects
    
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000)

//video cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach( item => {
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('moudseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})

// card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})