const modal = document.querySelector('.modal');
const buttonSpider = document.querySelector('#button-spider');
const closeButton = document.querySelector('.modal-content-close');

buttonSpider.addEventListener('click', () => {

    modal.classList.remove('hidden');
    modal.classList.add('visible');

});

closeButton.addEventListener('click', () => {
   
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});