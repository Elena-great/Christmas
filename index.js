//пишем функцию обратного отсчета до Рождества
function christmasCountdown() {
  const christmasDate = new Date("December 25, 2022 00:00"); //вводим константу - дату рождества
  const now = new Date(); // вводим константу сегодняшнего дня
  const diff = christmasDate - now; // вводим константу разницы - дата рождества минус сегодняшний день

  //переводим из милисекунд
  const msInSecond = 1000; //сколько милисекунд в секунде
  const msInMinute = 60 * 1000; //в минутах
  const msInHour = 60 * 60 * 1000; //в часах
  const msInDay = 24 * 60 * 60 * 1000; //в днях

  //высчитываем кол-во оставшихся дней
  const displayDay = Math.floor(diff/msInDay); //делим разницу на кол-во милисекунд в дне. Для округления результата используем метод Math.floor

  //этот результат мы должны отразить в приложении: в html у нас есть уже h4, получаем доступ к нему
  document.querySelector(".days").textContent = displayDay;

  //далее создаем по тому же принципу часы, минуты, секунды

  const displayHour = Math.floor((diff%msInDay)/msInHour); //делим разницу(у нас остался остаток с дней) на дни и делим на милисекунды в часах
  document.querySelector(".hours").textContent = displayHour;

  const displayMinute = Math.floor((diff%msInHour)/msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
  document.querySelector(".seconds").textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID); //чтобы наш счет останавливался, а не продолжался
    merryChristmas();
  }

  
  
}

let timerID = setInterval(christmasCountdown, 1000); //добавляем переменную let timerID, чтобы время больше не шло и помещаем её в метод clearInterval

function merryChristmas() { //добавляем функцию, чтобы у нас менялся заголовок при наступлении рождества
  const heading = document.querySelector("h1"); //выделяем заголовок
  heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!"; // меняем текст заголовка
  heading.classList.add("red"); //создаем класс, чтобы задать ему стиль в CSS
}

const button = document.querySelector("#myButton"); //выделяем кнопку
const audio = document.querySelector("#myAudio"); //выделяем песню

button.addEventListener("click", function(){ //навешиваем событие на кнопку - при нажатии - играет музыка
  if(audio.paused){
    audio.play();
    button.classList.toggle("pause");
  }
  else {
    audio.pause();
    button.classList.toggle("pause"); 
  }
})