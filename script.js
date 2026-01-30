const button = document.querySelector('.fight-button');
const transition = document.querySelector('.transition');

button.addEventListener('click', e => {
  e.preventDefault();
  transition.classList.add('active');

  setTimeout(() => {
    window.location.href = button.href;
  }, 600);
});
