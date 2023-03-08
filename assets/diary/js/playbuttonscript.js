var pause = document.querySelector('.pause');
var play = document.querySelector('.play');
var btn = document.querySelector('#app');
var video = document.getElementById('myCafe');
video.setAttribute('loop', '');

btn.addEventListener('click', () => {
    if( play.classList.contains("active") )
    {
        play.classList.remove("active");
        pause.classList.add("active");
        if(video.paused)
        video.play();
    }
    else
    {
        pause.classList.remove("active");
        play.classList.add("active");
        if(video.play)
        video.pause();
    }
})

