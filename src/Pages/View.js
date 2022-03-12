import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

// import of swiper 
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";


export default function View(){
    const [pokemon, setPokemon] = useState(null);
    const {name} = useParams();
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resdoServidor)=>resdoServidor.json())
        .then((resEmObjeto)=>
        setPokemon(resEmObjeto));
        },[name]);
        
        if(!pokemon){
            return null;
        };

    return(
        <div className="View">
            <nav>
                <Link to="/list"> Back to List </Link>
            </nav> 
                <h1 id="pokemonName" className={pokemon.types[0].type.name}>{pokemon.name}</h1>
                <section className="pokemonview">
                
                    <div className="pokeInfo">
                        <h1 className="poke_H1">Informations</h1>
                        <ul>
                            <p className="listP"><span className={pokemon.types[0].type.name}>Type:</span>
                                {pokemon.types.map((poketype, index)=>
                                <li key={index}>
                                    <span className={poketype.type.name}>
                                {poketype.type.name}
                                    </span>
                                </li>)}
                            </p>
                        </ul>

                        <p className="listP"><span className={pokemon.types[0].type.name}>Weight:</span> {pokemon.weight /10}kg</p>
                        <p className="listP"><span className={pokemon.types[0].type.name}>Height:</span> {pokemon.height / 10}m</p>

                        <ul className="abilityPoke">
                            <h1 className="poke_H1">Abilities</h1>
                                {pokemon.abilities.map((habvalue,index)=>
                                <li key={index}>
                                    <span className={pokemon.types[0].type.name}>{habvalue.ability.name}</span>
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
                                <span className={pokemon.types[0].type.name}>{pokeStats.stat.name}:</span> {pokeStats.base_stat}
                            </li>)}
                    </div>
                </section>
                
        </div>
    )
    
}