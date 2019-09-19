var popup = document.querySelector('.modal-write');
var openPopupButton = document.querySelector('.button-write-us');
var closePopupButton = popup.querySelector('.modal-close');

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        popup.classList.remove('modal-show');
    }
});
