import React, { useEffect, useRef, useState } from 'react'
import { Pokemon, Result } from '../interfaces/IPokemonApi'
import axios from 'axios'


const loadPokemons = async(page : number) : Promise<Pokemon[]> => {
  try{
    const {data} = await axios.get<Result>('https://pokeapi.co/api/v2/pokemon',{
      params:{
        offset: page,
        limit: 10
      }
    })
    return data.results
  }catch(error){
    console.log(error)
    return []
  }
}

export const usePokemon = () => {

  const[pok, setPok] = useState<Pokemon[]>([])
  const currentPage = useRef(0)

  useEffect(() => {
    loadPokemons(currentPage.current).then(setPok)
  }, [])

  const pokeFoto = (id : number) : string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
  
  const previous = async () => {
    if(currentPage.current != 0){
      currentPage.current -= 10
      const poks = await loadPokemons(currentPage.current)
      setPok(poks)
    }
  }

  const next = async () => {
    currentPage.current += 10
    const poks = await loadPokemons(currentPage.current)
    setPok(poks)
  }
  
  return {
    pok,
    previous,
    next,
    pokeFoto
  }
}
