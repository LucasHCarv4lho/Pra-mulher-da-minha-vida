console.log("VERSAO 2026 TESTE");
// ======================
// CARROSSEL DE FOTOS
// ======================

// ======================
// CARROSSEL DE FOTOS
// ======================

const images = [
    "Imagem1.jpg",
    "Imagem2.jpg",
    "Imagem3.jpg",
    "Imagem4.jpg",
    "Imagem5.jpg",
    "Imagem6.jpg"
];

let currentImage = 0;

const albumImage =
document.getElementById("albumImage");

setInterval(() => {

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    albumImage.style.opacity = 0;

    setTimeout(() => {

        albumImage.src = images[currentImage];
        albumImage.style.opacity = 1;

    }, 1000);

}, 4000);


// ======================
// MENSAGEM ESPECIAL
// ======================

const messageButton =
document.getElementById("messageButton");

const messageContent =
document.getElementById("messageContent");

messageButton.addEventListener("click", () => {

    messageContent.classList.toggle("open");

    if(messageContent.classList.contains("open")){
        messageButton.textContent = "Esconder Mensagem";
    }
    else{
        messageButton.textContent = "Mostrar Mensagem";
    }

});


// ======================
// CONTADOR DO CASAL
// ======================

const relationshipDate =
new Date("2024-12-22T20:00:00");

function updateCounter(){

    const now = new Date();

    let years =
    now.getFullYear() -
    relationshipDate.getFullYear();

    let months =
    now.getMonth() -
    relationshipDate.getMonth();

    let days =
    now.getDate() -
    relationshipDate.getDate();

    if(days < 0){

        months--;

        const previousMonth =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    const diff =
    now - relationshipDate;

    const hours =
    Math.floor(
        diff / (1000 * 60 * 60)
    ) % 24;

    document.getElementById("years")
    .textContent = years;

    document.getElementById("months")
    .textContent = months;

    document.getElementById("days")
    .textContent = days;

    document.getElementById("hours")
    .textContent = hours;
}

updateCounter();

setInterval(updateCounter,1000);


// ======================
// PLAYER YOUTUBE
// ======================

const audio =
document.getElementById("audioPlayer");

let isPlaying = false;

const playButton =
document.getElementById("playButton");

playButton.addEventListener(
    "click",
    toggleMusic
);

function toggleMusic(){

    if(isPlaying){

        audio.pause();

        playButton.innerHTML = `
            <i data-lucide="play"></i>
        `;

        isPlaying = false;

    }else{

        audio.play();

        playButton.innerHTML = `
            <i data-lucide="pause"></i>
        `;

        isPlaying = true;

    }

    lucide.createIcons();
}


// ======================
// BARRA DE PROGRESSO
// ======================

audio.addEventListener(
    "timeupdate",
    updateProgress
);

function updateProgress(){

    const current =
    audio.currentTime;

    const duration =
    audio.duration;

    if(!duration) return;

    const percent =
    (current / duration) * 100;

    document
    .getElementById("progressFill")
    .style.width =
    percent + "%";

    document
    .getElementById("currentTime")
    .textContent =
    formatTime(current);

}

    function formatTime(time){

    const minutes =
    Math.floor(time / 60);

    const seconds =
    Math.floor(time % 60);

    return `${minutes}:${seconds
        .toString()
        .padStart(2,"0")}`;

}
audio.addEventListener(
    "loadedmetadata",
    () => {

        document
        .getElementById("durationTime")
        .textContent =
        formatTime(audio.duration);

    }
);
