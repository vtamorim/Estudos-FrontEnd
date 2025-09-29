Dark_mode = false


document.getElementById('toggle_theme').addEventListener("click", () => {

    document.querySelector("header").classList.toggle("dark");


    document.querySelector("form").classList.toggle("dark");

    document.querySelector("textarea").classList.toggle("dark");

    Dark_mode = !Dark_mode
    Array.from(document.getElementsByTagName("input")).forEach(element => {
        element.classList.toggle("dark");
    });;
})