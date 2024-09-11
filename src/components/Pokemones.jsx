import './pokemones.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import usePokemones from '../hooks/usePokemones';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cargando from './Cargando';
import DetallePokemon from './DetallePokemon';
import Buscador from './Buscador'

function Pokemon({ id, nombre, imagen, verPokemon }) {
  return (
    <div className='pokemon-card' onClick={verPokemon}>
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
  verPokemon: PropTypes.func.isRequired
};

function Pokemones() {

  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones();
  const [mostrar, setMostrar] = useState({ mostrar:false, pokemon: {}})
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) => setMostrar({ mostrar:true, pokemon})
  const noVerPokemon = () => {
    setMostrar({ mostrar:false, pokemon: {}})
    setBusqueda('')
    
  }

  const buscarPokemon = async (e) => {
    e.preventDefault()
    
    if(!busqueda) return

    const pokemon = await searchPokemon(busqueda)

    setMostrar({ mostrar:true, pokemon})
    
  }

  return (
    <>
    <DetallePokemon {...mostrar} cerrar={noVerPokemon}/>
    <Buscador busqueda = {busqueda} setBusqueda = {setBusqueda}  buscarPokemon = {buscarPokemon}/>

    <InfiniteScroll 
    dataLength={pokemones.length}
    next={masPokemones}
    hasMore={verMas}
    loader={<Cargando />}
    endMessage={<h4 className='titulo' style={{ gridColumn: '1/6'}}>No hay mas pokemones</h4>}
    className='pokemon-container'>
      {pokemones.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} verPokemon={() => verPokemon(pokemon)} />)}
    </InfiniteScroll>
    </>
  );
}

export default Pokemones;