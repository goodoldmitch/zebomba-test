const person = document.querySelector('#person'),
      toUniverButton = document.querySelector('.to-univer'),
      coordinates = {
        0 : [[414,488],[388,464],[353, 475]],
        1 : [[279,514]],
        2: [[238, 535], [192, 535]],
        3: [[157, 533], [109, 509]],
        4: [[86, 488], [93, 467], [123, 442]]
      },
      modalBlock = document.querySelector('.modal'),
      modalContainer = document.querySelector('.modal-container'),
      openRatingButton = document.querySelector('.rating'),
      ratingContentBlock = document.querySelector('.modal-content'),
      closeModalButton = document.querySelector('.modal-close');

 
// Движение по точкам
let currentPosition = 0;;

toUniverButton.addEventListener('click', () => {
    let stepFromPoint = currentPosition;
    
    toUniverButton.disabled = true; //блокируем кнопку от повторного нажатия во время перехода между точками

    if(Object.keys(coordinates).length > stepFromPoint){

        coordinates[stepFromPoint].forEach((step, index) => {
            setTimeout(() => {
                person.style.cssText = `left: ${step[0]}px; top: ${step[1]}px`;
                
                if (index === coordinates[stepFromPoint].length - 1) {
                    toUniverButton.disabled = false; // разблокируем кнопку
                }
            }, index * 500); 
        });
    }else{
        alert('Больше точек не добавлял');
    }

    currentPosition += 1;
});

// Окно рейтинг
// открытие

openRatingButton.addEventListener('click', () => {
    openModal();
    uploadRating();
});

function openModal(){
    modalBlock.classList.add('show');
    console.log('open');
}

// загрузка игроков
function uploadRating() {
    const friendsIds = data.friends.map(friend => friend.id);
    const ratingTop = data.rating.sort((a, b) => Number(b.points) - Number(a.points));

    ratingContentBlock.innerHTML = '';

    ratingTop.forEach((item, index) => {
        const isFriend = friendsIds.includes(item.id);
        ratingContentBlock.innerHTML += `
            <div class="rating-item ${isFriend ? 'friend-highlight' : ''}">
                <div class="rating-item-rank">${index + 1}</div>
                <div class="rating-item-name">${item.name} ${item.lastName}</div>
                <div class="rating-item-exp">${item.points}</div>
            </div>
        `;
    });
}

// закрытие окна
function closeModal(){
    modalBlock.classList.remove('show');
}

// по клику вне модалки
modalBlock.addEventListener("click", (event) => {
    if (modalBlock.classList.contains("show") && !modalContainer.contains(event.target)) {
        closeModal();
    }
});

// по клику на кнопку
closeModalButton.addEventListener('click', ()=> {
    closeModal();
});

// Слайдер

const sliderBlock = document.querySelector('.friends-slider'),
      prevButton = sliderBlock.querySelector('.friends-slider-prev'),
      nextButton = sliderBlock.querySelector('.friends-slider-next'),
      sliderWrapper = sliderBlock.querySelector('.slider-wrap'),
      slides = sliderWrapper.querySelectorAll('.slide');

let currentSlideNumber = 1,
    offset = 0,
    allSlidesWidth = 50 * slides.length + 10 * (slides.length - 1); // т.к. у нас фиксированный макет, можем так высчитать длину всех слайдов
  
  sliderWrapper.style.width = allSlidesWidth + 'px';
  sliderWrapper.style.transition = '0.3s all';
      
nextButton.addEventListener('click', () =>{
    if(offset < allSlidesWidth - 170){ // прекращаем листать, если во вьюпорте осталось 3 слайда
        offset += 60;
        sliderWrapper.style.transform = `translate(-${offset}px)`;
        console.log(offset , allSlidesWidth);
    }else(
        alert('Решил оставлять 3 последних слайда')
    )
})

prevButton.addEventListener('click', () =>{
    if(offset > 0){
        offset -= 60;
        sliderWrapper.style.transform = `translate(-${offset}px)`;
    }
})