'use strict';

const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBTN = document.querySelector('.close-modal');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', openModal);
}
overlay.addEventListener('click', closeModal);
closeModalBTN.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});