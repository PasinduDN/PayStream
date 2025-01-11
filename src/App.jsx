import { useState } from 'react'
import SideNav from '../src/Pages/SideNav.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Company from './Pages/Company.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Item from './Pages/Item.jsx'
import Login from './Pages/Login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { db } from './Firebase.js'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/dashboard"
          exact
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company"
          exact
          element={
            <ProtectedRoute>
              <Company />
            </ProtectedRoute>
          }
        />
        <Route
          path="/item"
          exact
          element={
            <ProtectedRoute>
              <Item />
            </ProtectedRoute>
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
