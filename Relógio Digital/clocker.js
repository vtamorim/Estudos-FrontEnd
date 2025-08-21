const button = document.getElementById("button");
const horas = document.getElementById("hour");
const minutos = document.getElementById("minutes");
const segundosEl = document.getElementById("seconds");

let intervalo;

button.addEventListener("click", () => {
    clearInterval(intervalo);

    let hInput = parseInt(document.getElementById("input_horas").value) || 0;
    let mInput = parseInt(document.getElementById("input_minutos").value) || 0;
    let sInput = parseInt(document.getElementById("input_segundos").value) || 0;

    let totalSec = (hInput * 3600) + (mInput * 60) + sInput;

    if (totalSec <= 0) {
        alert("Digite um tempo válido!");
        return;
    }

    function atualizarRelogio(segundosRestantes) {
        const h = Math.floor(segundosRestantes / 3600);
        const m = Math.floor((segundosRestantes % 3600) / 60);
        const s = segundosRestantes % 60;

        horas.textContent = h.toString().padStart(2, "0");
        minutos.textContent = m.toString().padStart(2, "0");
        segundosEl.textContent = s.toString().padStart(2, "0");
    }

    atualizarRelogio(totalSec);

    intervalo = setInterval(() => {
        totalSec--;
        atualizarRelogio(totalSec);

        if (totalSec <= 0) {
            atualizarRelogio(0);
            clearInterval(intervalo);
            alert("Tempo esgotado!");
        }
    }, 1000);

    document.getElementById("input_horas").value = "";
    document.getElementById("input_minutos").value = "";
    document.getElementById("input_segundos").value = "";
});
