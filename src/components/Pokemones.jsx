import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './pokemones.css';

function Pokemon({ id, nombre, imagen }) {
  return (
    <div className='pokemon-card'>
      <img src={imagen} alt={nombre} className='pokemon-imagen'/>
      <p className='pokemon-titulo'>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
    </div>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const listaPokemones = await response.json();
        const { results } = listaPokemones;

        const newPokemones = results.map(async (pokemon) => {
          try {
            const response = await fetch(pokemon.url);
            const poke = await response.json();

            return {
              id: poke.id,
              nombre: poke.name,
              imagen: poke.sprites.other.dream_world.front_default,
            };
          } catch (error) {
            console.error(error);
            return null;
          }
        });

        const pokemonesWithDetails = await Promise.all(newPokemones);
        setPokemones(pokemonesWithDetails.filter(Boolean));
      } catch (error) {
        console.error(error);
      }
    };

    getPokemones();
  }, []);

  return (
    <section className='pokemon-container'>
      {pokemones.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} />)}
    </section>
  );
}

export default Pokemones;