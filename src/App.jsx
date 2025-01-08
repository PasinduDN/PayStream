import { useState } from 'react'
import SideNav from '../src/Pages/SideNav.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Company from './Pages/Company.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Item from './Pages/Item.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<DashBoard/>}></Route>
          <Route path='/Company' exact element={<Company/>}></Route>
          <Route path='/Item' exact element={<Item/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
