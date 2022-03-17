import React, {useEffect} from "react";
import axios from "axios";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = ({})

    useEffect(() => {
        const pegaPokemon = pokeName => {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
              setPokemon(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        };
        pegaPokemon()
      },
      [props.pokeName]
    )


    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }

    export default PokeCard;