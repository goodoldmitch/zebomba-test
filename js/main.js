const person = document.querySelector('#person'),
      toUniverButton = document.querySelector('.to-univer'),
      coordinates = {
        0 : [[414,488],[388,464],[353, 475]],
        1 : [[279,514]],
        2: [[238, 535], [192, 535]],
        3: [[157, 533], [109, 509]],
        4: [[86, 488], [93, 467], [123, 442]]
      };

 
// Движение по точкам
let currentPosition = 0;;

toUniverButton.addEventListener('click', () => {
    let stepFromPoint = currentPosition;
    
    if(Object.keys(coordinates).length > stepFromPoint){

        coordinates[stepFromPoint].forEach((step, index) => {
            setTimeout(() => {
                person.style.cssText = `left: ${step[0]}px; top: ${step[1]}px`;
            }, index * 500); 
        });
    }else{
        alert('Больше точек не добавлял');
    }

    currentPosition += 1;
});

// 
