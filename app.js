const preBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const cover = document.querySelector('#cover');
const prev = document.querySelector('#prev');
const title = document.querySelector('#title');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');
const playIcon = document.querySelector('.fa-play');


const musicContainter = document.querySelector('.music-container');
let songs = ['kiss me more', 'star boy', 'typa girl'];
let songIndex = 2;
let song = songs[songIndex];
loadSong(song);
function loadSong(song){
    audio.src=`music/${song}.mp3`;
    cover.src=`images/${song}.png`;
}
function playSong(){
   musicContainter.classList.add('play');
   playIcon.classList.remove('fa-play');
   playIcon.classList.add('fa-pause');
    title.textContent=song;
   audio.play();
}
function pauseSong(){
   musicContainter.classList.remove('play');
   playIcon.classList.add('fa-play');
   playIcon.classList.remove('fa-pause');
    audio.pause();

}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length-1)
    {
        songIndex=0;
       
    }
    song = songs[songIndex];
    loadSong(song);
    playSong();
}
function preSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    song = songs[songIndex];
    loadSong(song);
    playSong();
}
function setProgress(e){
  const width=this.clientWidth;
  const offsetX=e.offsetX;
  const duration=audio.duration;
    audio.currentTime = (offsetX / width) * duration;
}
function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`; 
    
}
playBtn.addEventListener('click',()=>{
   const isPlaying= musicContainter.classList.contains('play')
   if(isPlaying){
    pauseSong();
   }
   else{
    playSong();
   }
  

});
nextBtn.addEventListener('click',nextSong);
preBtn.addEventListener('click',preSong);
progressContainer.addEventListener('click',setProgress);
audio.addEventListener('timeupdate',updateProgress)

