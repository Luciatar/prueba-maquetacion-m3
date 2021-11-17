//Event Listeners
document.querySelector(".slider__buttons-prev").addEventListener('click',function() {
    prevSlide()
},false);
document.querySelector(".slider__buttons-next").addEventListener('click',function() {
    nextSlide()
},false);

// Slider
let currentPos = 0;
let sliderContainer = document.querySelector(".slider__slides-container");

function prevSlide(){
    if (currentPos>0){
        currentPos--;
    }else{
        currentPos=2
    }
    moveSlide()
}

function nextSlide(){
    if (currentPos<2){
        currentPos++;
    }else{
        currentPos=0
    }
    moveSlide()
}

function moveSlide(){
    let slideWidth= sliderContainer.offsetWidth/3
    sliderContainer.style.cssText="transform:translateX(-"+slideWidth*currentPos +"px)"
}