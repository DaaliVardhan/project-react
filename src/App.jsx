import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home,Login,Intro,Role } from './components/pages'

function App(){

  
  return (
   <Router>
      <Routes>
        <Route path='/' element={ <Intro/> } />
        <Route path='/login' element={ <Login />} />
        <Route path='/home' element={ <Home />  } />
        <Route path='/role' element={ <Role />} />
        <Route path='*' element={<>Not found</>} />
      </Routes>
   </Router>
  )
}

export default App
