import "./buscador.css"
import { Buscar } from "./icons";
import PropTypes from 'prop-types';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
    return (
        <>
            <h3 className="titulo">Más de 800 pokemones, elige tu favorito</h3>
            <form className="container-buscar" onSubmit={buscarPokemon}>
                <input type="text" placeholder="Encuentra tu Pokemon" className="input-buscar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}/>
                <button className="btn-buscar" type="submit">
                    <Buscar />
                    Buscar
                </button>
            </form>
        </>
    )
}

Buscador.propTypes = {
    busqueda: PropTypes.string.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    buscarPokemon: PropTypes.func.isRequired
}

export default Buscador;