import { useState } from 'react'
import Header from './components/Header'
import Global from './styles/Global'
import Banner from './components/Banner'
import Home from './pages/Home'
import Footer from '.\\components\\Footer\\index'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />      
      <Global />
    </div>
  )
}

export default App
