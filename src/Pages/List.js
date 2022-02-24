import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function List(){

    const [pokemons, setPokemons] = useState(null);
  
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokedex/2")
        .then((resDoServidor)=> resDoServidor.json())
        .then((resEmObj)=>{
            setPokemons(resEmObj.pokemon_entries)
        })
    },[])


    if(!pokemons){
        return null
    }

    return(
        <div className="List">
            <h1>Your pokemon list</h1>
            <h3>A list of first generation Pokemons!</h3>
            <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>
            <ul>
            {pokemons.map((pokemon, index)=>(
                <Link key={index} to={`/view/${pokemon.pokemon_species.name}`}>
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}                      
                    </li>
                </Link>
            ))} 
            </ul>  
            
        </div>
    )
}