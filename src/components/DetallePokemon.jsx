import "./detalle.css"
import PropTypes from 'prop-types';

function DetallePokemon ({mostrar, pokemon, cerrar}) {
    return (
        <div className="modal-container" onClick={cerrar} style={mostrar ? { display: 'grid' } : { display: 'none' }}>
            <section className="modal-body">
                <div className="imagen-container">
                <img src={`${pokemon.imagen}`} alt={`${pokemon.nombre}`} className="imagen-detalle" />
                <section>
                    {pokemon.types?.map(type => <span className="tag" key={type}>{type}</span>)}
                </section>
                </div>
                <div className="data">
                    <h2 className="titulo">{pokemon.nombre} ({pokemon.id})</h2>
                    <h3 className="titulo-seccion">Habilidades</h3>
                    {pokemon.abilities?.map(ability => <span className="tag" key={ability}>{ability}</span>)}

                    <h3 className="titulo-seccion">Estadísticas</h3>
                    <div className="stats">
                    {pokemon.stats?.map(stat => 
                    <section key={stat}>
                        <span className="puntos"> {stat.base} </span>
                        <span> {stat.name} </span>
                    </section>
                )}
                </div>
                </div>
            </section>
        </div>
    )
}
    DetallePokemon.propTypes = {
        mostrar: PropTypes.bool.isRequired,      // mostrar es un booleano y es requerido
        pokemon: PropTypes.shape({
            nombre: PropTypes.string.isRequired,  // pokemon tiene un objeto con una propiedad name de tipo string
            imagen: PropTypes.string.isRequired, 
            types: PropTypes.array.isRequired,     // pokemon tiene una propiedad image de tipo string
            id: PropTypes.number.isRequired,
            abilities: PropTypes.string.isRequired,
            stats: PropTypes.array.isRequired 
        }).isRequired,                         // pokemon es requerido
        cerrar: PropTypes.func.isRequired,
}

export default DetallePokemon