// Variable block - Start.
let body = document.querySelector('body');
let btn = document.querySelector('.btn');
let randomColor = ['red','green','blue','orange']
// Variable block - End.

// addEventListener block - Start.
btn.addEventListener('click', function(){ // change backgroundColor.
    let randomColorIndex = parseInt(Math.random() * randomColor.length);
    body.style.backgroundColor = randomColor[randomColorIndex];
})
// addEventListener block - End.

// Function block - Start
// Function clock - Start.
function time(){  
    let clock = new Date();
    let hour = clock.getHours(); // Hour.    
    let minute = clock.getMinutes(); // Minute.    
    let second = clock.getSeconds(); // Second.
    if(hour < 10){
        hour = `0${hour}`; 
    }
    if(minute < 10){
        minute = `0${minute}`; 
    }
    if(second < 10){
        second = `0${second}`; 
    }
    var getclockTable = `${hour}:${minute}:${second} Pm`; // hour:Minute:Second pm.
    document.getElementById('clockTable').innerHTML = getclockTable;
    setInterval(time,1000);
}
time();
// Function clock - End.
// Function block - End.