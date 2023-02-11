export type pokemonName = {
  entry_number: number;
  pokemon_species:{
    name:string
  };
}

export type PokemonStats = {
  name: string;
  abilities: [{
    name: string;
  }]
  sprites:{
    other:{
      'official-artwork':{
        front_default: string;
      }
    }
  }
  stats: [{
    base_stat: number
    stat:{
      name: string;
    }
  }]
  types:[{
    type:{
      name: string;
    }
  }]
  weight: number
}