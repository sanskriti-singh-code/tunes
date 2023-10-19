console.log("check");
//initialize the varialble
let audioelement=new Audio("songs/1.mp3");
let songIndex=0;
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songitem=Array.from(document.getElementsByClassName("songitem"));
let masterplaysong=document.getElementById("masterplaysong");

let songs=[
{songname: "Let me Love You", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
{songname: "Shape of you", filepath: 'songs/2.mp3',coverpath:"covers/2.jpg"},
{songname: "Bezuban", filepath: 'songs/3.mp3',coverpath:"covers/3.jpg"},
{songname: "Zara Zara", filepath: 'songs/4.mp3',coverpath:"covers/4.jpg"},
{songname: "Mohini-deeva", filepath: 'songs/5.mp3',coverpath:"covers/5.jpg"},
{songname: "jana na :salame ishq ", filepath: 'songs/6.mp3',coverpath:"covers/6.jpg"}
];

songitem.forEach((Element,i)=>{
  console.log(Element,i);
  Element.getElementsByTagName("img")[0].src=songs[i].coverpath;
  Element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})


//audioElement.play();

// //Handle play/pause Click
// masterplay.addEventListener('click',()=>{
//     if(audioelement.paused|| audioelement.currentTime<=0){
//         audioelement.play();
//     }
// })


function playSong(index) {
    audioelement.src = songs[index].filepath;
    audioelement.play();
    masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
    masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
    gif.style.opacity=1;
  }
  
  // Handle play/pause click
  masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
      playSong(songIndex);
    } else {
      audioelement.pause();
      masterplay.classList.remove("fa-regular", "fa-circle-pause", "fa-6xs");
    masterplay.classList.add("fa-regular", "fa-circle-play", "fa-6xs");
    gif.style.opacity=0;

    }
  });
//Listen to Events
audioelement.addEventListener('timeupdate',()=>{console.log("timeupdate")
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
});



//chatgbt better code

Array.from(document.getElementsByClassName('songitemplay')).forEach((element, i) => {
  element.addEventListener('click', (e) => {
    

    index=parseInt(e.target.id);
    // Remove 'fa-circle-pause' and add 'fa-circle-play' for all elements
    Array.from(document.getElementsByClassName('songitemplay')).forEach((el) => {
      el.classList.remove('fa-circle-pause', 'fa-4xs');
      el.classList.add('fa-circle-play', 'fa-4xs');

    });

    // Add 'fa-circle-pause' and remove 'fa-circle-play' for the clicked element
    e.target.classList.remove('fa-circle-play', 'fa-4xs');
    e.target.classList.add('fa-circle-pause', 'fa-4xs');

    if(index==songIndex) {
      if(audioelement.paused || audioelement.currentTime<=0) {
        audioelement.play();
        masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
        masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
        gif.style.opacity = 1;
        masterplaysong.innerText=songs[index-1].songname ;

    }
    
    else {
      audioelement.pause(); 
      masterplay.classList.remove("fa-regular", "fa-circle-pause", "fa-6xs");
      masterplay.classList.add("fa-regular", "fa-circle-play", "fa-6xs");
      gif.style.opacity = 0;

    }}
else{
  e.target.classList.remove('fa-circle-play', 'fa-4xs');
  e.target.classList.add('fa-circle-pause', 'fa-4xs');
  masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
  masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
    playSong(index);
    songIndex = index;
    masterplaysong.innerText=songs[index-1].songname ;

  }});
});
// document.getElementById("next").addEventListener("click",()=>{
// if(songIndex >=0)
// {songIndex=1;}  
//   else
//   {songIndex+=1;}
//   audioelement.src="songs/${songindex+1}.mp3";
//   audioelement.currentTime =0;
// audioelement.play();
//   masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
//   masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
// });


// document.getElementById("previous").addEventListener("click",()=>{
//   if(songIndex <=0)
//   {songIndex=1;}  
//     else
//     {songIndex-=1;}
//     audioelement.src="songs/${songindex+1}.mp3";
//     audioelement.currentTime =0;
//   audioelement.play();
//     masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
//     masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
//   });



document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
});

document.getElementById("previous").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
});

function playSong(index) {
  audioelement.src = songs[index].filepath;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-regular", "fa-circle-play", "fa-6xs");
  masterplay.classList.add("fa-regular", "fa-circle-pause", "fa-6xs");
  gif.style.opacity = 1;
   masterplaysong.innerText=songs[index].songname ;
}
