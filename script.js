const slides = document.querySelectorAll('.slide');
const sliderbtn = document.querySelectorAll('.slide_btn');
let currentSlide = 1;

const manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('act');

        sliderbtn.forEach((slide_btn) => {
            slide_btn.classList.remove('act');
        });
    });

    slides[manual].classList.add('act');
    sliderbtn[manual].classList.add('act');
}

sliderbtn.forEach((slide_btn, i) => {
   slide_btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
   });
});

const repeat = function(actClass){
    let active = document.getElementsByClassName('act');
    let i = 1;
    
    const repeater = () => {
        setTimeout(function(){
            [...active].forEach((actSlide) => {
                actSlide.classList.remove('act');
            });

            slides[i].classList.add('act');
            sliderbtn[i].classList.add('act');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;  
            }
            repeater();
        }, 4000);
    }
    repeater();

}
repeat();

const bars = document.getElementById('bars-icon')
const Close = document.getElementById('close');
const navbar = document.getElementById('navbar');

bars.addEventListener('click',()=>{
    navbar.classList.add('actives');
});

Close.addEventListener('click',() => {
    navbar.classList.remove('actives');
})

// SbProduct Img changers

const MainImg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small_img");

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = () => {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = () => {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = () => {
    MainImg.src = smallimg[3].src;
}


