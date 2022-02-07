/* **************** Imports **************** */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header'
import useTours from './hooks/useTours'
import Home from './pages/Home'
import Tour from './pages/Tour'

/* **************** Variables **************** */

/* **************** Functions **************** */
function App() {
  const tours = useTours()

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home tours={tours} />} />
          <Route path='/tours/:id' element={<Tour tours={tours} />} />
        </Routes>
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default App
