document.querySelector('.gif').style.opacity = 0;
// let audioElement = new Audio('sounds/kesariya.mp3');
let playBtn = document.querySelector('.play-btn');
let myProgressBar = document.querySelector('#myProgressBar');
let myProgressBarValue ;
let songItems = Array.from(document.querySelectorAll('.songItem'));
let audioElement = new Audio();
let isPlaying = false;
let barStyling = false;


var  songList = [{songName: 'Rait Zara Si' , filePath:'sounds/1.mp3' , coverPath:'images/1.jpg' , singer:''}
,{songName:'Kesariya' , filePath:'sounds/2.mp3' , coverPath:'images/2.jpg' , singer:''}
,{songName:'Tera yaar hu mai' , filePath:'sounds/3.mp3' , coverPath:'images/3.jpg' , singer:''}
,{songName:'Humdard' , filePath:'sounds/4.mp3' , coverPath:'images/4.jpg' , singer:''}
,{songName:'Thodi der' , filePath:'sounds/5.mp3' , coverPath:'images/5.jpg' , singer:''}
,{songName:'Jaan nisaar' , filePath:'sounds/6.mp3' , coverPath:'images/6.jpg' , singer:''}
,{songName:'Qaafiraana' , filePath:'sounds/7.mp3' , coverPath:'images/7.jpg' , singer:''}
,{songName:'Tum se hi' , filePath:'sounds/8.mp3' , coverPath:'images/8.jpg' , singer:''}
,{songName:'Humari adhoori kahani' , filePath:'sounds/9.mp3' , coverPath:'images/9.jpg' , singer:''}
,{songName:'Muskuraane' , filePath:'sounds/10.mp3' , coverPath:'images/10.jpg' , singer:''}];





audioElement.addEventListener('timeupdate' , function(){
    myProgressBarValue  = myProgressBar.value;   
    var progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , function(){
    
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;

})

songItems.forEach((element , i) =>{
     element.getElementsByTagName("img")[0].src = songList[i].coverPath; 
     element.getElementsByClassName("songName")[0].innerText = songList[i].songName;     
    })


for(let i=0; i<document.querySelectorAll('.songItem').length;i++){
    
    document.querySelectorAll('.songItem')[i].addEventListener('click' , function(){
      var musicName =  document.querySelectorAll('.songName')[i].innerText;

       let a = updateName(musicName);
      isPlaying? audioPause(a) : audioPlay(a); 
      $('.nameDisplay').text(musicName);
      audioElement.src = 'sounds/'+musicName+'.mp3';
      audioElement.name = musicName;
//       document.querySelectorAll('.songItem')[i].classList.add(a);
      
      
      
      audioElement.addEventListener('timeupdate' , function(){
        {
        var timeInMinute = Math.floor((audioElement.currentTime)/60);
        var timeInSeconds = Math.floor(((audioElement.currentTime)%60));
        var durationMinutes = Math.floor((audioElement.duration)/60);
        var durationSeconds = Math.floor((audioElement.duration)%10);
        $('.time').text(timeInMinute+':'+timeInSeconds+'/'+durationMinutes+':'+durationSeconds);
    }})
      
            
      
      
    })
}



document.querySelector('.play-btn').addEventListener('click' , function(){
    if(isPlaying == true){
        audioElement.pause();
        isPlaying = false;
        playBtn.classList.add('fa-play-circle');
        playBtn.classList.remove('fa-pause-circle');    
        document.querySelector('.gif').style.opacity = 0;
        
    }
    else{
        audioElement.play();
        isPlaying = true;
        playBtn.classList.add('fa-pause-circle');
        playBtn.classList.remove('fa-play-circle');
        document.querySelector('.gif').style.opacity = 1;
    }
    
                 
})



let scrwidth = screen.width;
let scrHt = screen.height;

if(scrwidth < 1200){
    $('.bottom').css('min-heigth',''+scrHt);
    $('.container').css('background-image','none');
    $('.songItem').css('width','80%');
    $('.songItem').css('height', '50px');
    $('.songItem').css('margin','10px auto');
    $('.songItemContainer').css('margin', 'auto 10px');
    $('body').css('min-height','100vh');
    $('.bottom').css('position', 'absolute');
    $('.bottom').css('width','100vw');
    $('.bottom').css('height','20%');
    $('.icons i').removeClass('fa-2x');
    $('.icons i').addClass('fa-5x');
    $('.icons i').css('padding','30px 10px');
    $('h1').css('margin','100px 120px');
    $('.navbar').css('height' , '100%');
}
if(scrwidth<750){

}




function audioPlay(name){
    audioElement.play();
    playBtn.classList.add('fa-pause-circle');
    playBtn.classList.remove('fa-play-circle');
    document.querySelector('.gif').style.opacity = 1;
    $('.time').css('opacity','1');
    // document.querySelectorAll('.'+name)[number].style.opacity = 1;
    // document.querySelectorAll('.'+name)[number].classList.add('opacityToOne');

    isPlaying = true;
    console.log(name);

}    

function audioPause(name){
    audioElement.pause();
    
    isPlaying = false;
    playBtn.classList.add('fa-play-circle');
    playBtn.classList.remove('fa-pause-circle');
    // document.querySelectorAll('.'+name)[number].style.opacity = 0.7;
    document.querySelector('.gif').style.opacity = 0;
    $('.time').css('opacity','0');
    

}
    
function updateName(name){
   return name.replaceAll(' ','-');
    
}

music = ['rait zara si','kesariya','tera yaar hu mai','humdard','thodi der','jaan nisaar','qaafiraana','tum se hi','humari adhoori kahaani','muskuraane'];



    $('.fa-backward-step').on('click' , function(){
        var s = audioElement.name;

        s=s.toLowerCase();
        var i = music.indexOf(s);
        --i;
        audioElement.name = music[i];
        if(i<0){
            
        }
        else{
            
            audioElement.src = 'sounds/'+music[i]+'.mp3';
            
            audioPlay(music[i]);
            $('.nameDisplay').text(music[i]);
            audioElement.addEventListener('timeupdate' , function(){
                {
                var timeInMinute = Math.floor((audioElement.currentTime)/60);
                var timeInSeconds = Math.floor(((audioElement.currentTime)%60));
                var durationMinutes = Math.floor((audioElement.duration)/60);
                var durationSeconds = Math.floor((audioElement.duration)%10);
                $('.time').text(timeInMinute+':'+timeInSeconds+'/'+durationMinutes+':'+durationSeconds);
                
                
            }})
              
                   
            
        }
    }
     )
    

     $('.fa-forward-step').on('click' , function(){
        var s = audioElement.name;

        s=s.toLowerCase();
        var i = music.indexOf(s);
        ++i;
        audioElement.name = music[i];
        if(i<10){
            
            
            audioElement.src = 'sounds/'+music[i]+'.mp3';
            
            audioPlay(music[i]);
            $('.nameDisplay').text(music[i]);
            audioElement.addEventListener('timeupdate' , function(){
                {
                var timeInMinute = Math.floor((audioElement.currentTime)/60);
                var timeInSeconds = Math.floor(((audioElement.currentTime)%60));
                var durationMinutes = Math.floor((audioElement.duration)/60);
                var durationSeconds = Math.floor((audioElement.duration)%10);
                $('.time').text(timeInMinute+':'+timeInSeconds+'/'+durationMinutes+':'+durationSeconds);
                
                
            }})
        }
            
    }
     )
    
