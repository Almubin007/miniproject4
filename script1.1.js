let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art1');
let track_name = document.querySelector('.track-name1');
let track_artist = document.querySelector('.track-artist1');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


const music_list = [

   
    {
        music : 'ly4.mp3',
        name : 'Thumbi Thullal Song',
        artist : 'ஒரு கணம் கூட விலகாமல் உயிராவேன்  இறுதி வரை கைகள் நழுவாமல் ஏந்துவேன்'
    },
    {
        music : 'ly5.mp3',
        name : 'Saathikadi Pothikadi Song',
        artist : 'புலிக்கு நான் பொட்டு வைப்பேன்  மல்லிக்கி நான் பூவு வைப்பேன  கண்ணசந்தா வானத்தையே பூட்டி வைப்பேன்டி'
       
    },
    {
        music : 'ly6.mp3',
        name : 'Dailamo Dailamo Song',
        artist : ' உன் மேலே பித்து பித்து பித்து பித்து நோய் தீர முட்டு முட்டு முட்டு முட்டு'
        
    },
    {
        music : 'ly7.mp3',
        name : 'Vizhiyil Un Vizhiyil Song',
        artist : 'அந்த நொடியில் என் எதிர்காலம்  நீ தான் என்று உயிர் சொன்னதே'
        
    },
    {
        music : 'ly8.mp3',
        name : 'Yellae Lama Song',
        artist : 'என்னை பார்த்தவளும் நீதானே குப்பைகூடை போல்  நெஞ்ச கலைச்சவ நீதானே'
    },
    {
        music : 'ly9.mp3',
        name : 'Mazhai Kuruvi Song',
        artist : 'எண்ணி எண்ணி அழுதது  கான் அழுதது அழுதது கான் காற்றில் அந்நேரம் கதையே வேறு கதை'
        
    }
    /*,
    {
        music : '../Musique - shift 2/music-2/lyric/lyric10.mp3',
        name : 'Ottiyanam Senju Tharen Song',
        artist : 'ஒட்டியாணம் ஒட்டியாணம் ஒட்டியாணம் அத செஞ்சு தாரேன் செஞ்சு'
        
    }  
    {
        music : '..//music/lyric/lyric11.mp3',
        name : 'Oh Senyoreeta Song',
        artist : 'அடடா பிரம்மன் புத்திசாலி அவனை விட நான் அதிர்ஷ்டசாலி ஓஹோ'
    },
    {
        music : '..//music/lyric/lyric12.mp3',
        name : 'Karupaana Kaiyale Song',
        artist : 'என்னை இழுக்குதம்மா அருகம் புல்லு ஆட்டை இப்போ மேயுதம்மா'
    },
    {
        music : '..//music/lyric/lyric13.mp3',
        name : 'Ennai Vittu Song',
        artist : 'அழகே மலரே பகலே பனியே பிறையே  நுதலே  என்னை விட்டு போகாதே'
    },
    {
        music : '..//music/lyric/lyric14.mp3',
        name : 'Hosanna Song',
        artist : 'அவள் போன பின்பு எந்தன் நெஞ்சை தேடி போகிறேன்'
    },
    {
        music : '..//music/lyric/lyric15.mp3',
        name : 'Kadhal Suthudhe Song',
        artist : 'புன்னகை முகத்தை ரசிகின்றேன் காதலில் எல்லைக்குள் பறக்கின்றேன்'
    },
    {
        music : '..//music/lyric/lyric16.mp3',
        name : 'Vaa Vaa Vaa Vennila Song',
        artist : 'உனக்கெனவே நான் காத்திருக்க என்னை நீயும் தொட்டால் போதும் விழுந்திடுவேன்'
    },
    {
        music : '..//music/lyric/lyric17.mp3',
        name : 'Vaadiyamma Jakkamma Song',
        artist : 'தேனை அள்ளி ஊட்டம்மா கோயம்பேடு சரக்கு வண்டி  போல வந்தே நீதாண்டி'
    },
    {
        music : '..//music/lyric/lyric18.mp3',
        name : 'Thottu Thottu Ennai Song',
        artist : 'உன்னை போல யாரும் என்னை தாண்டி  போனால் உன்னை நினைப்பேன்  உந்தன் ஆசை முகம் பார்த்து கிடக்கத்தான் '
    },
    {
        music : '..//music/lyric/lyric19.mp3',
        name : 'Chillax Chillax Song',
        artist : 'வேட்டிய தான் சேர்த்து உன் மாராப்புல கோர்த்து என்னென்னவோ பண்ணுறியே நெஞ்சுக்குள்ள கெட்ட கனவு'
    },
    {
        music : '..//music/lyric/lyric20.mp3',
        name : 'Oyaayiye Yaayiye Song',
        artist : 'இதழ் பூவென்றால் அதில் தேன் எங்கே இங்கு பூவேதான் தேன் தேன் தேன் தேன் தேன்'
    },
    {
        music : '..//music/lyric/lyric21.mp3',
        name : 'Adi Yendi Pulla',
        artist : 'ஒன்றாய் கோர்க்கிறேன் சந்தோசமும் கண்ணீர் தரும் உன்னாலே இன்று பார்க்கிறேன்'
    },
    {
        music : '..//music/lyric/lyric22.mp3',
        name : 'Kaal Mulaitha Poovae',
        artist : 'ஹே பெண்ணே....உன் வளைவுகளில் தொலைவதுபோலே உணருகிறேன்'
    },
    {
        music : '..//music/lyric/lyric23.mp3',
        name : 'Usilampatti Penkutti Song',
        artist : 'உசுல உசுல உசிலம்பட்டி உசுல உசுல உசிலம்பட்டி'
    },
    {
        music : '..//music/lyric/lyric24.mp3',
        name : 'Oh Sona Song',
        artist : 'மழை நின்றும் பெண் எழவே இல்லை என்ன செய்தோம் அது நினைவே இல்லை'
    },
    {
        music : '..//music/lyric/lyric25.mp3',
        name : 'Thaiyya Thaiyya Song',
        artist : 'காதல் ஜோதியே வாழ்வின் மீதியே தேவதை நீ மெய்யா பொய்யா'
    },
    {
        music : '..//music/lyric/lyric26.mp3',
        name : 'Thaamirabaraniyil song',
        artist : 'அடிப் போடி ஒன்ன பாத்தா ஒரு கிறுக்கு புடிக்குதே தல மேல ஒரு மேகம்'
    },
    {
        music : '..//music/lyric/lyric27.mp3',
        name : ' Paalpoalae Padhinaaril song',
        artist : 'இணைய தளத்தில் கணினி களத்தில் மின் அஞ்சல் அரட்டைகள் அடிக்கணுமே'
    },
    {
        music : '..//music/lyric/lyric28.mp3',
        name : 'Ovvondraai Thirudugirai Song',
        artist : 'கண்டறியும் நேரம் இது காதலியே ஒவ்வொன்றாய் திருடுகிறாய் திருடுகிறாய்'
    },
    {
        music : '..//music/lyric/lyric29.mp3',
        name : 'Suppose Unnai Kadhalichu Song',
        artist : 'சாரினா சாரி இல்ல சேரி பாப்பா விளையாட்டா போலீஸ் போவேன்'
    },
    {
        music : '..//music/lyric/lyric30.mp3',
        name : 'Kaattu Sirukki Song',
        artist : 'மழை கொடுப்பாளோ இடி இடிப்பாளோ மாயமாய் போவாளோ'
    },
    {
        music : '..//music/lyric/lyric31.mp3',
        name : 'Azhagiya Asura Song',
        artist : 'அழகிய அசுரா அழகிய அசுரா அத்துமீற ஆசையில்லையா கனவில் வந்து எந்தன் விரல்கள்'
    },
    {
        music : '..//music/lyric/lyric32.mp3',
        name : 'Valayapatti Thavile Song',
        artist : 'என் ஹாா்மோன் செய்யுது சேட்டையம்மா நான் வாலிபம் திருடும் வீணையடா'

    },
    {
        music : '..//music/lyric/lyric33.mp3',
        name : 'Meesa Beauty Song',
        artist : 'குண்டே இல்லா கன்னாவேனா ப்ரீ டைமுல்ல காடோடநான் ட்டுவச்சேன் டீல் ஓன்னும்மா'
    },
    {
        music : '..//music/lyric/lyric34.mp3',
        name : 'Dole Dole Than Song',
        artist : 'இரண்டொரு நொடியில் உனக்குள்ளே விழுந்து முழுவதும் தொலைந்தேனே நீ எனக்குள் நுழைய'
    },
    {
        music : '..//music/lyric/lyric35.mp3',
        name : 'Sirichi Sirichi Vandhan Song',
        artist : 'மங்கியில இருந்து ஒரு மனுச பையன் வந்தாலும் இன்னும் போகலையே வாலு'
    },
    {
        music : '..//music/lyric/lyric36.mp3',
        name : 'Kadhal Yaanai Song',
        artist : 'ஆய்வாளன் நானோ ஆராயலாமோ ஆ ஆ ஆர்.ஈ.எம்.ஓ ரெமோ ரெமோ '
    },
    {
        music : '..//music/lyric/lyric37.mp3',
        name : 'Aal Thotta Boopathy Song',
        artist : 'பாதி கண்ணாலே நீயும் பாா்த்தா பட்டினத்தாரும் கோவலன் தான்'
    },
    {
        music : '..//music/lyric/lyric38.mp3',
        name : 'Kozhi Veda Kozhi Song',
        artist : 'எனதிரு உதடுகள் பசியா இருக்குது உடல் உறுப்பெல்லாம் குஷியா இருக்குது உன்ன  தரியா சும்மா'
    },
    {
        music : '..//music/lyric/lyric39.mp3',
        name : 'Bimbiliki Pilaapi Song',
        artist : 'டிஸ்கவுண்டுல வப்பேனே ட்ரீட்டு என் மாமன் மச்சான் எல்லாம் இருவர் : இனி சென்னை பக்கம் தானா'
    },
    {
        music : '..//music/lyric/lyric40.mp3',
        name : 'Thirumba Thirumba Parthu Song',
        artist : 'மேஜை விளக்கு போல நீ தலை குனிந்து போகிறாய் கோடை கால மேகமாய் கொஞ்சம் கொஞ்சம் பேசுறாய்'
    },
    {
        music : '..//music/lyric/lyric41.mp3',
        name : 'Vaa Chellam Song',
        artist :'நீ எனக்கு பொஞ்சாதி ஆன பின்னே என் பாதி ராணி  மஹா ராணி நீ தானே'  
    } */
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);
    //remove next track
    curr_track.addEventListener('ended', curr_track);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ','  + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
   isRandom ? pauseRandom() : playRandom();
}
 function playRandom(){
   isRandom = true;
   randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    // track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    // track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}



// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("displaythe").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function starts() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pauses() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function resets() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

// let playButton = document.getElementById("playButton");
// let pauseButton = document.getElementById("pauseButton");
// let resetButto = document.getElementById("resetButton");

// playButton.addEventListener("click", starts);
// pauseButton.addEventListener("click", pauses);
// resetButton.addEventListener("click", resets);

