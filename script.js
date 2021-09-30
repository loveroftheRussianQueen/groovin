window.onload=function(){
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".city");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

slideIcons.forEach((slideIcon) => {

slideIcon.addEventListener("click", () =>{
    slides.forEach((slide) =>{
        slide.classList.remove("active");
});
slideIcons.forEach((slideIcon) =>{
    slideIcon.classList.remove("active");
});


slideNumber++;

if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
}

slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");
})});




nextBtn.addEventListener("click", () =>{
    slides.forEach((slide) =>{
            slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
});


    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () =>{
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });


  }

  window.onscroll={
      myFunction();
  }
  
  function myFunction(){
      var div = document.getElementsByClassName(".counters container2").offsetTop;
      var pageHeight = window.innerHeight;
      if(document.body.scrollTop > div - pageHeight || document.documentElement.scrollTop > div - pageHeight){
        const counters = document.querySelectorAll('.counter');
    const speed = 50; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + 3;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
  }
  }

window.onload=function(){
    var items = document.querySelectorAll('.filter-sections div');
animate(items);

// filter on click
each('.filter-links li a', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
  });
});
// filter links functions
function filterLinks(element) {
  // get text 
  var el = element.textContent,
    // convert to lowercase
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'All') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
  // show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};
}
  


 

