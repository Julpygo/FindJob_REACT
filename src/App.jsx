import { useState } from 'react'
import FormularioOffer from './components/FormularioOffer'
import CardOffer from './components/CardOffer'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Offers from './components/Offers'

function App() {
  return (
    <Routes>
      <Route path='/' element={<FormularioOffer/>} />
      <Route path='/offers' element={<CardOffer/>} />
      <Route path='/offers2' element={<Offers/>} />
    </Routes>
  )
}

export default App
