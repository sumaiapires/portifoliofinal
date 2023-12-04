form.addEventListener("submit", function (event) {
    event.preventDefault();
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const imc = peso / (altura * altura);

    document.getElementById("infos").classList.remove("hidden");


    alert(`${imc.toFixed(2)}`);

}
);
