import PropTypes from 'prop-types';
import './pokemones.css';
import usePokemones from '../hooks/usePokemones';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cargando from './Cargando';

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

  const { pokemones, masPokemones, verMas } = usePokemones();

  return (
    <InfiniteScroll 
    dataLength={pokemones.length}
    next={masPokemones}
    hasMore={verMas}
    loader={<Cargando />}
    endMessage={<h4 className='titulo' style={{ gridColumn: '1/6'}}>No hay mas pokemones</h4>}
    className='pokemon-container'>
      {pokemones.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} />)}
    </InfiniteScroll>
  );
}

export default Pokemones;