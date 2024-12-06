import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { PokemonComponent } from './components/PokemonComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonComponent/>
  </StrictMode>,
)
