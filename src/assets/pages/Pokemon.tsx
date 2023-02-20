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
        <main className="pokemon">
          <div>
            <h1 className="title">{pokemon?.name}</h1>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} 
              alt="Pokemon imagem" 
              className="w-64"  
              />
          </div>
          <ul className="habilidades">
            <p className=" font-bold">Habilidades</p>
            {pokemon?.abilities.map(item => <li>{item.ability.name}</li>)}
            
            <p className="pt-3 font-bold">Type</p>
            {pokemon?.types.map(item =>
              <li className={item.type.name}>
                {item.type.name}
              </li>
            )}
             
          </ul>
          <ul className="status">
            <strong>Status</strong>
            {pokemon?.stats.map(item => 
                <li>
                  <strong>{item.stat.name}</strong>
                  <span>: {item.base_stat}</span>
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