const pokemonNumber = document.querySelector("#pokemonNumber")
const pokemonName = document.querySelector("#pokemonName")
const pokemonImg = document.querySelector("#pokemonImg")

const form = document.querySelector("#form")
const inputSearch = document.querySelector("#inputSearch")

const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")

let pokemonIdSearch = 1 

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {
    pokemonNumber.innerHTML = ""
    pokemonName.innerHTML = "Loading..."

    const data = await fetchPokemon(pokemon)

    if (data, data.id < 650) {
        pokemonNumber.innerHTML = data.id
        pokemonName.innerHTML = data.name
        pokemonImg.style.display = ""
        pokemonImg.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
        inputSearch.value = ""
        pokemonIdSearch = data.id
    } else {
        pokemonNumber.innerHTML = ""
        pokemonName.innerHTML = "Not found :c"
        pokemonImg.style.display = "none"
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    renderPokemon(inputSearch.value.toLowerCase())
})

prevButton.addEventListener("click", () => {
    if (pokemonIdSearch > 1) {
        pokemonIdSearch -= 1
        renderPokemon(pokemonIdSearch)
    }
})

nextButton.addEventListener("click", () => {
    if (pokemonIdSearch < 649) {
        pokemonIdSearch += 1
        renderPokemon(pokemonIdSearch)
    }
})

renderPokemon(pokemonIdSearch)