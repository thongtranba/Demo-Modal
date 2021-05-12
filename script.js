'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  //NOTE only use the 'DOT' for class in querySelector
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//NOTE function closeModal because this function is duplicate code when we apply for btnCloseModal and overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//NOTE how to select btn
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//NOTE handling esc keypress even
document.addEventListener('keydown', function (e) {
  //   console.log('A key was pressed');
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    // if (!modal.classList.contains('hidden')) {
    //if the modal doesnt contain the hidden class, close the modal
    closeModal();
    // }
  }
});
