import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons, nextPage} = useSelector(state => state.pokemons);
  console.log(isLoading, pokemons, nextPage)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      { isLoading ?
        <span>loading list of pokemons</span> :
        <span>the request it is finished</span>
      }

      <ul>
        {
          pokemons.map(el =>
            <li key={el.name}> {el.name} </li>
          )
        }
      </ul>

      <button onClick={()=> dispatch(getPokemons(nextPage))} >
        Next
      </button>
    </>
  )
}
