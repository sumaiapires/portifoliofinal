//conectando a Poke Api
// variaveis global

const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let searchPokemon = 0;


const fetchPokemon = async (Pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`)



    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;

    }

    // console.log(data);


};
// renderizar dados pokemon.
const renderpokemon = async (pokemon) => {
pokemonName.innerHTML = "Carregando..."
pokemonNumber.innerHTML = ""


    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = "";
        searchPokemon = data.id
    } else {
        pokemonImage.src = "https://pbs.twimg.com/media/EY-pEq8X0AIIk8U.jpg"
        pokemonName.innerHTML = "Não encontrado."
        input.value = ""


    }
    console.log(data)


};


//Achar Pokemon pelo input

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert(input.value)
    renderpokemon(input.value.toLowerCase())


})

// Eventos dos botões Prev e Next
btnPrev.addEventListener("click",()=>{
    
    if (searchPokemon >1){
        searchPokemon -=1
        renderpokemon(searchPokemon)
    }

       {
        
    }
    
   

});
btnNext.addEventListener("click",()=>{
  searchPokemon += 1;
  renderpokemon(searchPokemon)
    
});


renderpokemon(8)