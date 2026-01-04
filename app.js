const fechaBoda = new Date("January 17, 2026 15:00:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const diff = fechaBoda - ahora;
    if (diff < 0) return;

    document.getElementById("dias").innerText =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("horas").innerText =
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutos").innerText =
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("segundos").innerText =
        Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

window.addEventListener("click", () => {
    const audio = document.getElementById("cancion");
    audio.play();
    console.log("mUSICA");
}, { once: true });