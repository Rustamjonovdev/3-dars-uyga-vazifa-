const presentTense = document.querySelector('.time')
const todayDate = document.querySelector('.date')
const day = document.querySelector('.day')
const square = document.querySelector('.square')

setInterval(() => {
    const time = new Date().toLocaleTimeString()
    presentTense.textContent = time
    const date = new Date().toLocaleDateString()
    todayDate.textContent =  date

    if(presentTense.textContent >= "06:00:00" && presentTense.textContent <= "9:00:00"){
        day.classList.add("sun")
    }else if(presentTense.textContent >= "17:00:00" && presentTense.textContent <= "19:40:00"){
        document.body.classList.add('afternoon');
        square.style.backgroundImage = "url(https://t4.ftcdn.net/jpg/00/67/24/59/360_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg)" 
    }else if(presentTense.textContent >= "20:00:00" && presentTense.textContent <= "00:00:00"){
        document.body.classList.add('night')
        square.style.backgroundImage = "url(https://st2.depositphotos.com/2627021/6665/i/450/depositphotos_66650665-stock-photo-romantic-and-scenic-panorama-with.jpg)" 
    }else{
        square.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/02/08/32/42/360_F_208324295_D0F4bU9RoTWzwSiY0IHwBuJbvBNZyMh2.jpg)" 
    }
 }, 1000); 
