import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'




function App() {

  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      const listaPokemones = await response.json()
      const { results } = listaPokemones

      const newPokemones = results.map(async (pokemon) => {

        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          image: poke.sprites.other.dream_world.front_default
        }
      })
      setPokemones(await Promise.all(newPokemones))
      
    }

    getPokemones()

  }, [])

  return (
    
    <>
    <Navbar />
    
    <div className="App">

<h1>Pokédex</h1>
{
  // eslint-disable-next-line react/jsx-key
  pokemones.map(pokemon => {
    return (
      // eslint-disable-next-line react/jsx-key
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <span>{pokemon.id}</span>
      </div>
    )
  })
}
</div>
</>


  )
}

export default App
