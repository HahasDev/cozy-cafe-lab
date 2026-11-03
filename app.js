console.log('Cozy Cafe JavaScript is connected!');
const mainTitleEl = document.getElementById('main-title')
mainTitleEl.textContent = "Welcome to the Cozy Cafe."
//Part 2

const highlightTitleEls = document.querySelectorAll('.highlight-title')


highlightTitleEls.forEach(element => {
   console.log(element.textContent)
   element.style.fontStyle = 'italic'
});

const quoteOfDayEl = document.querySelector('#quote-of-the-day');

quoteOfDayEl.textContent = 'A little coffee, a little conversation.';

quoteOfDayEl.classList.add('featured');

const mainPhotoEl = document.querySelector('#main-photo')
const currentScr = mainPhotoEl.getAttribute('src')


console.log(currentScr);

mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')

mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')


//part4

const bgColorBtnEl = document.querySelector('#bg-color-btn')

const bodyEl = document.querySelector('body')

const handleBackgroundChange = () => {
    bodyEl.style.backgroundColor = 'bisque'
}

bgColorBtnEl.onclick = handleBackgroundChange