var slides = document.querySelectorAll('.slide');
var butt = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) =>{
        slide.classList.remove('active');

        butt.forEach((btn) => {
            btn.classList.remove('active');
        })
    })

    slides[manual].classList.add('active');
    butt[manual].classList.add('active');
}

butt.forEach((btn,i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    
});