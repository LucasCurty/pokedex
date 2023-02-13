import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {PokemonStats} from '../types/typePokemon'

function Pokemon(){
  const [pokemon, setPokemon] = useState<PokemonStats| null>(null) ;
  const {name} = useParams();

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res)=>res.json())
    .then((resObj)=>setPokemon(resObj))
    },[name]);
{console.log(pokemon)}
    return(
      <section className="w-screen ">
        <main className="flex h-96 capitalize w-4/5	 justify-center m-auto items-center">

          <ul className="shrink">
            <strong>Habilidades</strong>
            {pokemon?.abilities.map(item => <li>{item.ability.name}</li>)}
            <div>
              <strong>Type</strong>
              <ul>
                {pokemon?.types.map(item => 
                  <li>{item.type.name}</li>
                  )}
              </ul>
            </div>
          </ul>
          <div className="shrink-0">
            <h1 className="text-xl text-white text-center ">{pokemon?.name}</h1>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} 
              alt="Pokemon imagem" 
              className="w-64"  
              />
          </div>
          <ul className="shrink">
            <strong className="">Status</strong>
            {
              pokemon?.stats.map(item => 
                <li>
                  <strong>{item.stat.name}</strong>
                  <span className="" >{item.base_stat}</span>
                </li>)
            }
          </ul>
        </main>
        <Link to="/"
        className="bg-red-700 p-2"
        >Back</Link>
      </section>
    )
}
export default Pokemon;