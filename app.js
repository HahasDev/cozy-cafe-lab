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

//part 3

const mainPhotoEl = document.querySelector('#main-photo')
const currentScr = mainPhotoEl.getAttribute('src')


console.log(currentScr);

mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')

mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')


//part4

const bgColorBtnEl = document.querySelector('#bg-color-btn')

const bodyEl = document.querySelector('body')

const handleBackgroundChange = () => {
    if (bodyEl.style.backgroundColor === 'bisque') {
        
        bodyEl.style.backgroundColor = 'yellow'
    }else{

        bodyEl.style.backgroundColor = 'bisque'
    }
}

bgColorBtnEl.addEventListener('click', () => {
    handleBackgroundChange();
    
})


// part 5

// const roseLatteEl =document.querySelector('#roseLatte') 
// const croissantEl =document.querySelector('#croissant')
// const cheeseCake = document.querySelector('#cheesecake')

// const roseBtnEl

// const btnSoldOutEl = document.querySelector('.sold-out-btn')
// const statusEl = document.querySelectorAll('.specialty-status')

// const handleMarkSoldOut = btnSoldOutEl.forEach(element => {
//     if(element === btnSoldOutEl.id)
//     {
//         statusEl.id.element = "sold out"

    
//     }
// });


// btnSoldOutEl.addEventListener('click', handleMarkSoldOut)
// // btnSoldOutEl.id(0).addEventListener('click', () => {
// //     btnSoldOutEl.id(0).textContent = "sold"
// //     console.log("hi");

// // })

// part 5


const btnSoldOutEls = document.querySelectorAll('.sold-out-btn');
const statusEls = document.querySelectorAll('.specialty-status');
// const statues = ['Available', 'Sold Out', 'Available']

statusEls[0].textContent = "Available"
statusEls[1].textContent = "Sold Out"
statusEls[2].textContent = "Available"

btnSoldOutEls.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        
        if (statusEls[index]) {
            statusEls[index].textContent = "Sold Out";
        }
        else{
            statusEls[index].textContent = "Available"
        }
    });
});