const modal = document.querySelector('.modal');
const buttonSpider = document.querySelector('#button-spider');
const buttonRobin = document.querySelector('#button-robin');
const buttonBatman = document.querySelector('#button-batman');
const closeButton = document.querySelector('.modal-content-close');/*img*/


buttonSpider.addEventListener('click', () => {

    modal.classList.remove('hidden');
    modal.classList.add('visible');

});
buttonRobin.addEventListener('click', () => {

    modal.classList.remove('hidden');
    modal.classList.add('visible');

});
buttonBatman.addEventListener('click', () => {

    modal.classList.remove('hidden');
    modal.classList.add('visible');

});

closeButton.addEventListener('click', () => {
   
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});