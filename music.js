const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker 1</div>`,
        poster: "img/album/1.jpg"
    },
    {
        id: 2,
        songName: `some some<br>
        <div class="subtitle">Alan Walker 2</div>`,
        poster: "img/album/2.jpg"
    },
    {
        id: 3,
        songName: `Ohh myyy<br>
        <div class="subtitle">Alan Walker 3</div>`,
        poster: "img/album/3.jpg"
    },
    {
        id: 4,
        songName: `love you<br>
        <div class="subtitle">Alan Walker 4</div>`,
        poster: "img/album/4.jpg"
    },
    {
        id: 5,
        songName: `like you<br>
        <div class="subtitle">Alan Walker 5</div>`,
        poster: "img/album/5.jpg"
    },
    {
        id: 6,
        songName: `soo sweet<br>
        <div class="subtitle">Alan Walker 6</div>`,
        poster: "img/album/6.jpg"
    },
    {
        id: 7,
        songName: `im good<br>
        <div class="subtitle">Alan Walker 7</div>`,
        poster: "img/album/7.jpg"
    },
    {
        id: 8,
        songName: `lovely couple<br>
        <div class="subtitle">Alan Walker 8</div>`,
        poster: "img/album/8.jpg"
    },
    {
        id: 9,
        songName: `Ola olala<br>
        <div class="subtitle">Alan Walker 9</div>`,
        poster: "img/album/9.jpg"
    },
    {
        id: 10,
        songName: `Ohhh my freind<br>
        <div class="subtitle">Alan Walker 10</div>`,
        poster: "img/album/10.jpg"
    },
    {
        id: 11,
        songName: `orange<br>
        <div class="subtitle">Alan Walker 11</div>`,
        poster: "img/album/11.jpg"
    },
    {
        id: 12,
        songName: `hello hello<br>
        <div class="subtitle">Alan Walker 12</div>`,
        poster: "img/album/12.jpg"
    },
    {
        id: 13,
        songName: `hey hey<br>
        <div class="subtitle">Alan Walker 13</div>`,
        poster: "img/album/13.jpg"
    },
    {
        id: 14,
        songName: `im a bad boy<br>
        <div class="subtitle">Alan Walker 14</div>`,
        poster: "img/album/14.jpg"
    },
    {
        id: 15,
        songName: `ooo baby<br>
        <div class="subtitle">Alan Walker 15</div>`,
        poster: "img/album/15.jpg"
    },
    {
        id: 16,
        songName: `darlng<br>
        <div class="subtitle">Alan Walker 16</div>`,
        poster: "img/album/16.jpg"
    },
    {
        id: 17,
        songName: `mirchi<br>
        <div class="subtitle">Alan Walker 17</div>`,
        poster: "img/album/17.jpg"
    },
    {
        id: 18,
        songName: `let me know<br>
        <div class="subtitle">Alan Walker 18</div>`,
        poster: "img/album/18.jpg"
    },
    {
        id: 19,
        songName: `love you mummy<br>
        <div class="subtitle">Alan Walker 19</div>`,
        poster: "img/album/19.jpg"
    },
];
let pop = document.getElementsByClassName("pop_song")[0];
let menu_song = document.getElementsByClassName('menu_song')[0];
for (let i = 0; i < songs.length; i++) {
    if (i >= 10) {
        pop.innerHTML +=
            `<li class="song_item"> 
        <div class="img_play">
            <img src="${songs[i].poster}" alt="">
            <i class="bi  playListPlay  bi-play-circle-fill" id="${i + 1}"></i>
        </div>
          <h5>${songs[i].songName}
        </h5>
     </li>`
    }
    else {
        menu_song.innerHTML +=

            `<li class="song_item">
            <span>${i + 1}}</span>
            <img src="${songs[i].poster}" alt="">
            <h5>${songs[i].songName}
           </h5>
           <i class="bi playListPlay bi-play-circle-fill" id="${i + 1}"></i>
          </li>`
    }
}

/*Array.from(document.getElementsByClassName('song_item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
});*/


let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");


masterPlay.addEventListener("click", function () {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
});
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");

    })
}



const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener("click", (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/album/${index}.jpg`
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

        let songTitles = songs.filter((e) => {
            return e.id == index;
        });

        songTitles.forEach((e) => {
            let { songName } = e;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';


        makeAllplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        wave.classList.add("active1");
    })
})

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    currentStart.innerText = `${min2}:${sec2}`;
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;




    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}% `;

});


seek.addEventListener("change", () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");


vol.addEventListener("change", () => {
    if (vol.value === 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-off-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");

    }
    if (vol.value > 50) {
        vol_icon.classList.add("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;

});
let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
    index = index - 1;
    //console.log(index);
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song_item')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/album/${index}.jpg`
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((e) => {
        return e.id == index;
    });

    songTitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';


    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");

});

next.addEventListener("click", () => {
    index ++;
    if (index> Array.from(document.getElementsByClassName('song_item')).length) {
        index = 1;
          }
   
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/album/${index}.jpg`
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((e) => {
        return e.id == index;
    });

    songTitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';


    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
    

});


let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];




pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 330;
})

let popular_art_left = document.getElementById("popular_art_left");
let popular_art_right = document.getElementById("popular_art_right");
let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

popular_art_right.addEventListener("click", () => {
    Artists_bx.scrollLeft += 330;
});
popular_art_left.addEventListener("click", () => {
    Artists_bx.scrollLeft -= 330;
});
