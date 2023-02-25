import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {PokemonStats} from '../types/typePokemon'

function Pokemon(){
  const [pokemon, setPokemon] = useState<PokemonStats | null>(null) ;
  const {name} = useParams<any>();

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res)=>res.json())
      .then((resObj)=>setPokemon(resObj))
    },[name]);
{console.log(pokemon)}
    return(
      <section className="pokemon_Section">
        <main className="pokemon">
          <div className="face">
            <h1 id="title" className={pokemon?.types[0].type.name}>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} 
              alt="Pokemon imagem" 
              className="w-64 m-auto "  
              />
          </div>
          <ul className="habilidades">
            <p className=" font-bold">Habilities</p>
            {pokemon?.abilities.map(item => <li>{item.ability.name}</li>)}
            
            <p className="pt-3 font-bold">Type</p>
            {pokemon?.types.map(item =>
              <li>
                <span id="type" className={item.type.name}>{item.type.name}</span>
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
          <div className="div_bottons">
            <Link to="/" className="all_btn back_to_menu">Back Menu</Link>
            <Link to={`/pokemon/${(Number(name)) === 1 ? 1 : Number(name) - 1}`} 
            className={`all_btn previous_pokemon ${(Number(name) === 1 ? 'opacity-5 cursor-no-drop' : 'opacity-100')}`}>Before Pokemon</Link>
            <Link to={`/pokemon/${(Number(name)) === 1008 ? 1008 : Number(name) + 1}`}  
            className={`all_btn next_pokemon ${(Number(name) === 1008 ? 'opacity-5 cursor-no-drop' : 'opacity-100')}`}>Next Pokemon</Link>
          </div>
        </main>
      </section>
    )
}
export default Pokemon;