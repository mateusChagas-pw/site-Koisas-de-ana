'usar estrito'

// variaveis do modal
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// funcao modal 
const modalCloseFunc = function () { modal.classList.add('closed') }

// evento do modal 
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc)

// variaveis da notificação de brinde
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// evento da notificação

toastCloseBtn.addEventListener('click', function() {
    notificationToast.classList.add('closed');
});
