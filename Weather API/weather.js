const Send_button = document.getElementById("send_place");
const Place = document.getElementById("place");
const dados = document.getElementById("dados");
const apikey = "67f2150649fc4ef8873145241252308";

Send_button.addEventListener("click", async () => {

    const response = await fetch(`httpS://api.weatherapi.com/v1/current.json?key=${apikey}&q=${Place.value}`);
    const users = await response.json();


    dados.innerHTML = "";


    const cidade = document.createElement("p");
    cidade.textContent = `Cidade: ${users.location.name}`;

    const temperatura = document.createElement("p");
    temperatura.textContent = `Temperatura: ${users.current.temp_c} °C`;

    const condicao = document.createElement("p");
    condicao.textContent = `Condição: ${users.current.condition.text}`;


    dados.append(cidade, temperatura, condicao);
});
