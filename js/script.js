var writeForm = document.querySelector(".modal-write-us");
var cartForm = document.querySelector(".modal-cart");
var buttonCart = document.querySelector(".button-cart");
var writeButton = document.querySelector(".button-write-us");
var close_writeForm = writeForm.querySelector(".button-write-close");
var buttonBuy = document.querySelectorAll(".button-buy");
var close_cartForm = cartForm.querySelector(".button-close");
var continueShopping = cartForm.querySelector(".button-continueShopping");
var buttonToBookmarks = document.querySelectorAll(".button-to-bookmarks");
var buttonBookmark = document.querySelector(".button-bookmark");
var buttonModalCheckout = cartForm.querySelector(".button-modal-checkout");
var popupMap = document.querySelector(".popup-map");
var buttonPopupMap = document.querySelector(".button-map");
var close_map = popupMap.querySelector(".button-map-close");
var slides = document.querySelectorAll(".promo-slide");
var indicators = document.querySelectorAll(".indicator");
var currentIndicator = 0;
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
var slidesService = document.querySelectorAll(".services-content");
var buttonsService = document.querySelectorAll(".services-button .button");
var currentSlideService = 0;
var currentButtonService = 0;

console.log(buttonBuy.length);

writeButton.addEventListener("click", function(){
    writeForm.classList.remove("hide");
});

close_writeForm.addEventListener("click", function(){
    writeForm.classList.add("hide");
});

for(var i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function(evt) {
        event.preventDefault();
        cartForm.classList.remove("hide");
        buttonCart.classList.remove("empty");
    });
};

close_cartForm.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

continueShopping.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

buttonModalCheckout.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

for(var i = 0; i < buttonToBookmarks.length; i++) {
    buttonToBookmarks[i].addEventListener("click", function() {
       buttonBookmark.classList.remove("empty");
    });

};

buttonPopupMap.addEventListener("click", function(evt) {
    event.preventDefault();
    popupMap.classList.remove("hide");
});

close_map.addEventListener("click", function(){
    popupMap.classList.add("hide");
});

function nextSlide() {
    slides[currentSlide].classList.add("hide");
    indicators[currentIndicator].classList.remove("indicator-current");
    slidesService[currentSlideService].classList.add("hide");
    buttonsService[currentButtonService].classList.remove("button-services-current");
    currentSlide = (currentSlide+1) % slides.length;
    currentIndicator = (currentIndicator+1) % indicators.length;
    currentSlideService = (currentSlideService + 1) % slidesService.length;
    currentButtonService = (currentButtonService + 1) % buttonsService.length;
    slides[currentSlide].classList.remove("hide");
    indicators[currentIndicator].classList.add("indicator-current");
    slidesService[currentSlideService].classList.remove("hide");
    buttonsService[currentButtonService].classList.add("button-services-current");
};