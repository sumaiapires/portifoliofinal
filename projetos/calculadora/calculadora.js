const visor = document.getElementById("resultado");

function insert(num){
    visor.innerHTML+= num;

}

function clean(){
    visor.innerHTML=""

}

function back(){
    let resultado = visor.innerHTML;
    visor.innerHTML = resultado.substring (0, resultado.length -1)
}


function calcular (){
    let resultado = visor.textContent;

if (resultado.length > 2) {
    visor.innerHTML = eval(resultado);

}

else {
    visor.innerHTML = "Erro";
    
    const time = setTimeout(clean, 2000)
}
}

