const button = document.getElementById("button");
const horas = document.getElementById("hour");
const minutos = document.getElementById("minutes");
const segundosEl = document.getElementById("seconds");

button.addEventListener("click", () => {
    let input_sec = parseInt(document.getElementById("input_segundos").value);

    if (isNaN(input_sec) || input_sec < 0) {
        alert("Digite um número válido!");
        return;
    }

    let totalSec = input_sec;

    function atualizarRelogio(segundosRestantes) {
        const h = Math.floor(segundosRestantes / 3600);
        const m = Math.floor((segundosRestantes % 3600) / 60);
        const s = segundosRestantes % 60;

        horas.textContent = h.toString().padStart(2, "0");
        minutos.textContent = m.toString().padStart(2, "0");
        segundosEl.textContent = s.toString().padStart(2, "0");
    }

    atualizarRelogio(totalSec);

    const intervalo = setInterval(() => {
        totalSec--;
        atualizarRelogio(totalSec);

        if (totalSec <= 0) {
            clearInterval(intervalo);
        }
    }, 1000);
});
