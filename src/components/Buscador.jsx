import "./buscador.css"
import { Buscar } from "./icons";

function Buscador() {
    return (
        <>
            <h3 className="titulo">Más de 800 pokemones, elige tu favorito</h3>
            <section className="container-buscar">
                <input type="text" placeholder="Encuentra tu Pokemon" className="input-buscar"/>
                <button className="btn-buscar">
                    <Buscar />
                    Buscar
                </button>
            </section>
        </>
    )
}

export default Buscador;