
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './componenets/Pokedex/Pokedex'
import PokemonDetails from './componenets/PokemonDetails/PokemonDetails'

function App() {
 
  return (

    <Routes>
     
       <Route path ="/" element ={<Pokedex />}/>
        <Route path ="/pokemon/:id" element ={<PokemonDetails />}/>
        <Route path ="*" element ={<h1>Not Found</h1>}/>
      
    </Routes>
      
  )
}

export default App
