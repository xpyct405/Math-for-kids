let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let audio = document.querySelector('#myAudio');


function equation () {
    let randomNumber1 = Math.floor(Math.random() * 10),
    randomNumber2 = Math.floor(Math.random() * 10),
    wrongAnswer1 = Math.floor(Math.random() * 20),
    wrongAnswer2 = Math.floor(Math.random() * 20),
    allAnswers = [],
    switchAnswers = [];

    document.querySelector('.num1').textContent = randomNumber1
    document.querySelector('.num2').textContent = randomNumber2

    answer = eval (randomNumber1 + randomNumber2)

    allAnswers = [answer, wrongAnswer1, wrongAnswer2];

    // Цикл снизу делает вот, что
    // 1. Берём существующий массив allAnswers и удаляем в рандомном (от 0 до 2) элементе массива, 1 элемент. Метод splice()
    // 2. Элемент который мы удалили, мы с помощью метода push закидываем в новый массив switchAnswers. Метод push()
    // 3. Проходимся пока элементы в массиве  allAnswers не закончатся
    // 4. Получаем новый массив switchAnswers

    for (i = allAnswers.length; i--;) {
        console.log(`До метода splice       allAnswers = [${allAnswers}]`);
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        console.log(`После метода splice    allAnswers = [${allAnswers}]`);
        console.log(`После метода push      switchAnswers = [${switchAnswers}]`);
        console.log(`_________________________________________`);
    };

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2]; 
}


option1.addEventListener('click', () => {
    if (option1.innerHTML == answer) {
        equation ()
    } else {
        audio.play()
    }
});

option2.addEventListener('click', () => {
    if (option2.innerHTML == answer) {
        equation ()
    } else {
        audio.play()
    }
});

option3.addEventListener('click', () => {
    if (option3.innerHTML == answer) {
        equation ()
    } else {
        audio.play()
    }
});

equation ()


