const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevTrackBtn = document.getElementById('prev-track-btn');
const nextTrackBtn = document.getElementById('next-track-btn');
const volumeBar = document.getElementById('volume');
const currentTrackInfo = document.getElementById('current-track-info');
const trackList = document.getElementById('track-list');
const progressBar = document.getElementById('progress');
const progressBarContainer = document.getElementById('progress-bar');
const volumeBarContainer = document.getElementById('volume-bar');
const counter = document.getElementById('counter');
const searchInput = document.getElementById('search-input');
const trackItems = document.getElementById('track-list').getElementsByTagName('li');


let currentTrackIndex = 0;
let tracks = [
    { name: 'Good 4 u', src: 'audio/good 4 u.mp3'},
    { name: 'Flor amarilla', src: 'audio/audio.mp3' },
    { name: 'Last Friday Night', src: 'audio/Last Friday Night.mp3' },
    { name: 'Atlantis', src: 'audio/Atlantis.mp3' },
    { name: 'Daylight', src: 'audio/Daylight.mp3' },
    { name: 'Vuelve a Mi Lado (Star Vs the Forces of Evil)', src: 'audio/Vuelve a Mi Lado (Star Vs the Forces of Evil).mp3' },
    { name: 'Treat You Better', src: 'audio/Treat You Better.mp3' },
    { name: 'Lost On You', src: 'audio/Lost On You.mp3' },
    { name: 'Poker Face', src: 'audio/Poker Face.mp3' },
    { name: 'NO', src: 'audio/NO.mp3' },
    { name: 'Kissed A Girl', src: 'audio/Kissed A Girl.mp3' },
    { name: 'Those Eyes', src: 'audio/Those Eyes.mp3' },
    { name: 'Dandelions', src: 'audio/Dandelions.mp3' },
    { name: 'Tú eras quien', src: 'audio/Tú eras quien.mp3' },
    { name: 'Cold', src: 'audio/Cold.mp3' },
    { name: 'Toxic', src: 'audio/Toxic.mp3' },
    { name: '7 Years', src: 'audio/7 Years.mp3' },
    { name: 'Lean On', src: 'audio/Lean On.mp3' },
    { name: 'In the Name of Love', src: 'audio/In the Name of Love.mp3' },
    { name: 'Let Me Down Slowly', src: 'audio/Let Me Down Slowly.mp3' },
    { name: 'Another Love', src: 'audio/Another Love.mp3' },
    { name: 'Rolling in the Deep', src: 'audio/Rolling in the Deep.mp3' },
];

// Funciones básicas
function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audioPlayer.src = track.src;
    currentTrackInfo.textContent = track.name;
    playPause();
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.children[0].src = 'img/pause.png'; 
        playPauseBtn.children[0].alt = 'Pause'; 
    } else {
        audioPlayer.pause();
        playPauseBtn.children[0].src = 'img/play.png'; 
        playPauseBtn.children[0].alt = 'Play'; 
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}
function showPlayer() {
    if (window.innerWidth >= 700) {
        document.getElementById('player').style.display = 'flex';
    } else {
        document.getElementById('player').style.display = 'block';
    }
}

audioPlayer.addEventListener('play', showPlayer);
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    Array.from(trackItems).forEach(function(track) {
        const trackName = track.textContent.toLowerCase();
        track.style.display = trackName.includes(searchTerm) ? 'block' : 'none';
    });
});

trackList.addEventListener('click', event => {
    const trackIndex = Array.from(trackList.children).indexOf(event.target);
    if (trackIndex !== -1) {
        currentTrackIndex = trackIndex;
        loadTrack(currentTrackIndex);
    }
});

playPauseBtn.addEventListener('click', playPause);
prevTrackBtn.addEventListener('click', prevTrack);
nextTrackBtn.addEventListener('click', nextTrack);

audioPlayer.addEventListener('timeupdate', () => {
    const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;
});
volumeBar.style.width = '100%';
audioPlayer.volume = 1.0;
audioPlayer.addEventListener('ended', nextTrack);

function setupInteraction(container, updateFunction) {
    container.addEventListener('mousedown', onStart);
    container.addEventListener('touchstart', event => onStart(event.touches[0]), { passive: false });

    function onStart(startEvent) {
        isDragging = true;
        document.addEventListener('mousemove', onMove);
        document.addEventListener('touchmove', event => onMove(event.touches[0]), { passive: false });
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchend', onEnd);
        updateFunction(startEvent);
    }

    function onMove(moveEvent) {
        if (isDragging) {
            updateFunction(moveEvent);
        }
    }

    function onEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', event => onMove(event.touches[0]));
        document.removeEventListener('mouseup', onEnd);
        document.removeEventListener('touchend', onEnd);
    }
}

function updateVolume(event) {
    const bounds = volumeBarContainer.getBoundingClientRect();
    const volume = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    audioPlayer.volume = volume;
    volumeBar.style.width = `${volume * 100}%`;
}

function updateProgressBar(event) {
    const bounds = progressBarContainer.getBoundingClientRect();
    const newTime = ((event.clientX - bounds.left) / bounds.width) * audioPlayer.duration;
    audioPlayer.currentTime = Math.max(0, Math.min(audioPlayer.duration, newTime));
    progressBar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
}

setupInteraction(volumeBarContainer, updateVolume);
setupInteraction(progressBarContainer, updateProgressBar);