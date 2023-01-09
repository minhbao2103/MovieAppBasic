import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Main from './components/navbar/main/Main'

import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
   <>
  <Navbar />
  <Routes>
      <Route path="/" element={<Home />}></Route>
  </Routes>
  <Routes>
      <Route path="/main" element={<Main />}></Route>
  </Routes>
   </>
  )
}

export default App