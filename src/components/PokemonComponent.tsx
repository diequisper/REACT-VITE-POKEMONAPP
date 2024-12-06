import React, { useEffect, useRef, useState } from 'react'
import { Pokemon, Result } from '../interfaces/IPokemonApi'
import axios from 'axios'
import { usePokemon } from '../hook/usePokemon'

export const PokemonComponent = () => {

  const{pok, previous, next, pokeFoto} = usePokemon()

  return (
    <>
      <h3>Lista de Pokemones</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            pok.map(p => {
              const pokeId = p.url.split('/').slice(-2, -1).toString()

              return(
                <tr key={pokeId}>
                  <td>{pokeId}</td>
                  <td><img style={{width : "90px"}} src={pokeFoto(parseInt(pokeId))} alt=""/></td>
                  <td>{p.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={previous} style={{marginRight : '6px', backgroundColor : 'rgb(248, 224, 225)'}}>Previous</button>
      <button onClick={next} style={{marginLeft : '6px', backgroundColor : 'rgb(248, 224, 225)'}}>Next</button>
    </>
  )
}
