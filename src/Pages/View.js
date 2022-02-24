import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function View(){
    const [pokemon, setPokemon] = useState(null);
    const {name} = useParams();
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resdoServidor)=>resdoServidor.json())
        .then((resEmObjeto)=>
        setPokemon(resEmObjeto,console.log(resEmObjeto)));
        },[name]);
        
        if(!pokemon){
            return null;
        };
   
    return(
        <div className="View">
            <nav>
                <Link to="/list"> Back to List </Link>
            </nav>
                <h1 id="pokemonName">{pokemon.name}</h1>
            <section className="pokemonview">
                
                <div className="pokeInfo">
                    <h1 className="poke_H1">Informations</h1>
                    <ul>
                        <p className="listP"><span>Type:</span>
                            {pokemon.types.map((poketype, index)=>
                            <li key={index}>
                            {poketype.type.name}
                            </li>)}
                        </p>
                    </ul>

                    <p className="listP"><span>Weight:</span> {pokemon.weight /10}kg</p>
                    <p className="listP"><span>Height:</span> {pokemon.height / 10}m</p>

                    <ul className="abilityPoke">
                        <h1 className="poke_H1">Abilities</h1>
                            {pokemon.abilities.map((habvalue,index)=>
                            <li key={index}>
                             {habvalue.ability.name}
                            </li>)}
                    </ul>
                </div>
               
                <img
                    src={pokemon.sprites.front_default}
                    alt={name}
                /> 

                <div className="poke_stats">
                    <h1 className="poke_H1"> Stats</h1>
                    
                    {pokemon.stats.map((pokeStats, index)=>
                        <li key={index} className="listP">
                            <span>{pokeStats.stat.name}:</span> {pokeStats.base_stat}
                        </li>)}
                </div>
            </section>
        </div>
    )
    
  
}