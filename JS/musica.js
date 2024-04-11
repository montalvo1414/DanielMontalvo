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
];

let isDragging = false;
let isDraggingVolume = false;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audioPlayer.src = track.src;
    currentTrackInfo.textContent = track.name;
}
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    Array.from(trackItems).forEach(function(track) {
        const trackName = track.textContent.toLowerCase();
        if (trackName.includes(searchTerm)) {
            track.style.display = 'block';
        } else {
            track.style.display = 'none';
        }
    });
});




function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '►';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playPause();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playPause();
}

function playTrackFromList(event) {
    const clickedElement = event.target;
    const trackIndex = Array.from(trackList.children).indexOf(clickedElement);
    if (trackIndex !== -1) {
        currentTrackIndex = trackIndex;
        loadTrack(currentTrackIndex);
        playPause();
    }
}

function updateProgressBar(event) {
    if (isDragging) {
        const progressBarWidth = progressBarContainer.clientWidth;
        const clickPositionX = event.clientX - progressBarContainer.getBoundingClientRect().left;
        const progressPercentage = (clickPositionX / progressBarWidth) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        const newTime = (progressPercentage / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    }
}

function startDragging(event) {
    isDragging = true;
    updateProgressBar(event);
}

function stopDragging() {
    isDragging = false;
}
volumeBar.style.width = '100%';
audioPlayer.volume = 1.0;

function updateVolume(event) {
    const volumeBarWidth = volumeBarContainer.clientWidth;
    const clickPositionX = event.clientX - volumeBarContainer.getBoundingClientRect().left;
    let volumePercentage = (clickPositionX / volumeBarWidth) * 100;
    volumePercentage = Math.max(0, volumePercentage);
    volumeBar.style.width = `${volumePercentage}%`;
    const newVolume = volumePercentage / 100;
    audioPlayer.volume = newVolume;
}

function startDraggingVolume(event) {
    isDraggingVolume = true;
    updateVolume(event);
}

function stopDraggingVolume() {
    isDraggingVolume = false;
}

function handleEndOfTrack() {
    nextTrack();
}

audioPlayer.addEventListener('timeupdate', () => {
    const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;
});

audioPlayer.addEventListener('ended', handleEndOfTrack);

function onMouseDownVolume(event) {
    isDraggingVolume = true;
    updateVolume(event);
    document.addEventListener('mousemove', onMouseMoveVolume);
    document.addEventListener('touchmove', onMouseMoveVolume);
}

function onMouseMoveVolume(event) {
    if (isDraggingVolume) {
        updateVolume(event);
    }
}

function onMouseUpVolume() {
    isDraggingVolume = false;
    document.removeEventListener('mousemove', onMouseMoveVolume);
    document.removeEventListener('touchmove', onMouseMoveVolume);
}

// Agrega el manejo de eventos para la barra de volumen
volumeBarContainer.addEventListener('mousedown', onMouseDownVolume);
volumeBarContainer.addEventListener('touchstart', onMouseDownVolume);

document.addEventListener('mouseup', onMouseUpVolume);
document.addEventListener('touchend', onMouseUpVolume);

// Funciones para el manejo de la barra de progreso
function onMouseDownProgress(event) {
    isDragging = true;
    updateProgressBar(event);
    document.addEventListener('mousemove', onMouseMoveProgress);
    document.addEventListener('touchmove', onMouseMoveProgress);
}

function onMouseMoveProgress(event) {
    if (isDragging) {
        updateProgressBar(event);
    }
}

function onMouseUpProgress() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMoveProgress);
    document.removeEventListener('touchmove', onMouseMoveProgress);
}

// Agrega el manejo de eventos para la barra de progreso
progressBarContainer.addEventListener('mousedown', onMouseDownProgress);
progressBarContainer.addEventListener('touchstart', onMouseDownProgress);

document.addEventListener('mouseup', onMouseUpProgress);
document.addEventListener('touchend', onMouseUpProgress);

function showPlayer() {
    if (window.innerWidth >= 700) {
        document.getElementById('player').style.display = 'flex';
    } else {
        document.getElementById('player').style.display = 'block';
    }
}


audioPlayer.addEventListener('play', showPlayer);

trackList.addEventListener('click', playTrackFromList);
playPauseBtn.addEventListener('click', playPause);
prevTrackBtn.addEventListener('click', prevTrack);
nextTrackBtn.addEventListener('click', nextTrack);