import {useEffect, useState} from "react"
import { pokemonName } from "../types/typePokemon"
import {Link} from 'react-router-dom'

function App() {
const [pokemonList, setPokemonList] = useState([] as pokemonName[])

useEffect(()=>{
  fetch('https://pokeapi.co/api/v2/pokedex/2')
  .then(res => res.json())
  .then(res => setPokemonList(res.pokemon_entries))
},[])

{console.log(pokemonList)}
  return (
    <section className="w-10/12 m-auto">
      <div className="flex items-center justify-center ">
        <h1 className="text-5xl text-white f">
          P
          <img className="w-10 inline" 
            src="https://cdn-icons-png.flaticon.com/512/287/287221.png" 
            alt="icone pokebola" />
          kedex
          </h1> 
        <img src="https://64.media.tumblr.com/04bbb6a44e6ac6c9f5d6cddf308d1b5a/tumblr_mr323otPd81rfjowdo1_500.gif" 
        alt="imagem pokedex"
        className="w-32 m-2 animate-pulse	" />
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {pokemonList.map(item=> 
          <Link className="capitalize text-white border p-1 text-center rounded	" 
          to={`/pokemon/${item.entry_number}`}>
            {item.pokemon_species.name}
          </Link>
        )}
      </ul>
    </section>

  )
}

export default App
