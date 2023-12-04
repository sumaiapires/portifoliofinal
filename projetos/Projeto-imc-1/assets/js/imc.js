const form = document.getElementById("form");

form.addEventListener("submit", function(event){
   event.preventDefault(); 
   const peso = document.getElementById("weight").value;
   const altura = document.getElementById("height").value;
   const imc = peso/(altura*altura)

   document.getElementById("infos").classList.remove("hidden");

//    condições do imc

    const campoImc = document.getElementById("value"); 

    let descricao;

//   campoImc.classList.add("attention")
    // aonde aparece o imc
    campoImc.style.color = "red";

if(imc < 18.5 ) {
    descricao = "Cuidado! Você está abaixo do Peso!"

}
else if( (imc >= 18.5) && (imc <= 25) ){
    descricao = "Você está no Peso Ideal!"
    // campoImc.classList.remove("attention");
    // campoImc.classList.add("normal");
    campoImc.style.color ="green";
}
else if( (imc >= 25) && (imc <= 30) ){
    descricao = "Cuidado! Você está com sobre Peso!"
    
}

else if ((imc >30) && (imc<=35)){
    descricao = "Cuidado! Você está com obesidade moderada!"

}
else if ((imc >35)&& (imc <=40))
descricao = "Cuidado! Você está com obesidade severa!"

else{
    descricao = "Cuidado você está com obesidade morbida"
}





    campoImc.textContent = imc.toFixed(2);
   document.getElementById("description").textContent = descricao

   

}
);