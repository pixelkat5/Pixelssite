var click = new Audio('https://pixel5.info/sound/P5R-Select.mp3');

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice');
    let selectedIndex = 0;

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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        selectedIndex = (selectedIndex - 1 + choices.length) % choices.length;
        updateSelection();
      } else if (e.key === 'ArrowRight') {
        selectedIndex = (selectedIndex + 1) % choices.length;
        updateSelection();
      } else if (e.key === 'Enter') {
        click.play();
        const selectedChoice = choices[selectedIndex].dataset.choice;
        alert(`You chose: ${selectedChoice}`);
      }
    });

    updateSelection(); // Initial display
});


//Javascript Preloading draft
//Javascript Preloading draft
//Javascript Preloading draft


/*

var audioFiles = [
    "https://pixel5.info/sound/P5R-Select.mp3",
    "https://pixel5.info/sound/SYSTEM-457-tickle.mp3",
    "https://pixel5.info/sound/SYSTEM-468-morgana_land.mp3",
    "https://pixel5.info/sound/SYSTEM-475-morgana.mp3",
    "https://pixel5.info/sound/SYSTEM-63-hold_up.mp3",
    "https://pixel5.info/sound/SYSTEM-82-stab_knife.mp3",
    "https://pixel5.info/"
];
    
function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}
    
var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFiles.length){
    	// all have loaded
    	init();
    }
}
    
var player = document.getElementById('player');
function play(index) {
    player.src = audioFiles[index];
    player.play();
}
    
function init() {
    // do your stuff here, audio has been loaded
    // for example, play all files one after the other
    var i = 0;
    // once the player ends, play the next one
    player.onended = function() {
    	i++;
        if (i >= audioFiles.length) {
            // end 
            return;
        }
    	play(i);
    };
    // play the first file
    play(i);
}
    
// we start preloading all the audio files
for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}

*/
