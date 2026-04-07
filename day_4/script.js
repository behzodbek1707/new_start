const body = document.body
const playlist = [
    "./music/music1.mp3", 
    "./music/music2.mp3", 
    "./music/music3.mp3"
]
let current = 0

const audio = document.createElement("audio")
audio.controls = true
body.appendChild(audio)

audio.src = playlist[current]
audio.play().catch(()=>{})

audio.addEventListener("ended", ()=>{
    current++
    if(current>=playlist.length) current = 0
    audio.src = playlist[current]
    audio.play()
})

audio.addEventListener("visibilitychange", () =>{
    if(document.hidden){
        audio.pause()
    }else{
        audio.play().catch(()=>{})
    }
})
