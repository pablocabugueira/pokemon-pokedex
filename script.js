const pokemonNumber = document.querySelector("#pokemonNumber")
const pokemonName = document.querySelector("#pokemonName")
const pokemonImg = document.querySelector("#pokemonImg")

const form = document.querySelector("#form")
const inputSearch = document.querySelector("#inputSearch")

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIResponse.json()
    return data
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    pokemonImg.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    renderPokemon(inputSearch.value)
})