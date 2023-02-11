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
      <section className="min-h-screen ">
        <main className="flex bg-blue-700 h-96">

        <div className="shrink">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fuga dolores, iusto dolorem accusantium a eligendi magni eum praesentium nihil ut cumque autem explicabo minima rem velit? Accusamus, aperiam ipsum?</p>
        </div>
        <div className="shrink-0">
          <h1 className="text-xl text-white">{pokemon?.name}</h1>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} 
            alt="Pokemon imagem" 
            className="w-64"  
            />
        </div>
        <div className="shrink">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fuga dolores, iusto dolorem accusantium a eligendi magni eum praesentium nihil ut cumque autem explicabo minima rem velit? Accusamus, aperiam ipsum?</p>
        </div>
        </main>
        <Link to="/"
        className="bg-red-700 p-2"
        >Back</Link>
      </section>
    )
}
export default Pokemon;