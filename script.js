var click = new Audio('https://pixel5.info/sound/P5R-Select.mp3');
var flip = new Audio('https://pixel5.info/sound/00002_streaming.mp3');


function collapseui() {
    var x = document.getElementsByClassName("ui")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


const choiceMessages = {
    'Yes': 'This should close this piece of UI. It doesnt work for now though.',
    'No': 'This should inject a cookie. It wont work for now so dont worry.'
};

document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice');
    let selectedIndex = 0;
    let audioReady = false;
    
    function updateSelection() {
        choices.forEach((choice, index) => {
            const arrow = choice.querySelector('.arrow');
            if (index === selectedIndex) {
                choice.classList.add('selected');
                arrow.classList.remove('hidden');
            } else {
                choice.classList.remove('selected');
                arrow.classList.add('hidden');
            }
        });
    }
    
    function enableAudio() {
        if (!audioReady) {
            click.play().then(() => click.pause()).catch(() => {});
            flip.play().then(() => flip.pause()).catch(() => {});
            audioReady = true;
        }
    }
    
    document.addEventListener('keydown', (e) => {
        enableAudio();
        if (e.key === 'ArrowLeft') {
            flip.currentTime = 0;
            flip.play();
            selectedIndex = (selectedIndex - 1 + choices.length) % choices.length;
            updateSelection();
        } else if (e.key === 'ArrowRight') {
            flip.currentTime = 0;
            flip.play();
            selectedIndex = (selectedIndex + 1) % choices.length;
            updateSelection();
        } else if (e.key === 'Enter') {
            click.currentTime = 0;
            click.play();
            const selectedChoice = choices[selectedIndex].dataset.choice;
            const message = choiceMessages[selectedChoice] || 'You made a choice!';
            alert(message);
        }
    });
    
    document.addEventListener('click', enableAudio, { once: true });
    updateSelection();
});

var audioFiles = [
    "https://pixel5.info/sound/P5R-Select.mp3",
    "https://pixel5.info/sound/SYSTEM-457-tickle.mp3",
    "https://pixel5.info/sound/SYSTEM-468-morgana_land.mp3",
    "https://pixel5.info/sound/SYSTEM-475-morgana.mp3",
    "https://pixel5.info/sound/SYSTEM-63-hold_up.mp3",
    "https://pixel5.info/sound/SYSTEM-82-stab_knife.mp3",
    "https://pixel5.info/sound/00002_streaming.mp3"
];
    
function preloadAudio(url) {
    var audio = new Audio();
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}
    
var loaded = 0;
function loadedAudio() {
    loaded++;
    if (loaded == audioFiles.length){
        init();
    }
}
    
var player = document.getElementById('player');
function play(index) {
    player.src = audioFiles[index];
    player.play();
}
    
function init() {
    var i = 0;
    player.onended = function() {
        i++;
        if (i >= audioFiles.length) {
            return;
        }
        play(i);
    };
    play(i);
}
    
for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}
