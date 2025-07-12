const form_cadastro = document.getElementById("form_cadastro");
const form_login = document.getElementById("form_login");
const resultado = document.getElementById("resultado");

function mostrarResultado(mensagem, sucesso = false) {
    resultado.textContent = mensagem;
    resultado.style.color = sucesso ? "#ffffffff" : "#d32f2f";
    resultado.style.background = sucesso ? "rgba(40,167,69,0.12)" : "rgba(211,47,47,0.12)";
    resultado.style.border = sucesso ? "1.5px solid #63966fff" : "1.5px solid #d32f2f";
    resultado.style.transition = "all 0.3s";
}

form_cadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const cad_username = document.getElementById("cad_username").value.trim();
    const cad_password = document.getElementById("cad_password").value;

    if (!cad_username || !cad_password) {
        mostrarResultado("Preencha todos os campos!", false);
        return;
    }

    if (localStorage.getItem(cad_username)) {
        mostrarResultado("Usuário já cadastrado!", false);
    } else {
        localStorage.setItem(cad_username, JSON.stringify({ username: cad_username, password: cad_password }));
        mostrarResultado("Cadastro realizado com sucesso!", true);
        form_cadastro.reset();
    }
});

form_login.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem(username));

    if (usuarioSalvo && usuarioSalvo.password === password) {
        mostrarResultado("Login realizado com sucesso!", true);
        form_login.reset();
    } else {
        mostrarResultado("Usuário ou senha incorretos!", false);
    }
});
