let playBtn = document.getElementById('play');
console.log(playBtn);

let audio = new Audio("../music/Asake_-_Fuji_Vibe.mp3");

playBtn.addEventListener('click', ()=>{
    audio.play();
})
let pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', function(){
    audio.pause();
})
let playPauseBtn = document.getElementById('pausePlay');

playPauseBtn.addEventListener('click', ()=>{
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }   
})