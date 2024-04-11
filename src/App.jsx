import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from './store/states/hotels.slice'
import RegisterPage from './pages/RegisterPage.'
import HomePage from './pages/HomePage'
import HotelsIdpage from './pages/HotelsldPage'
import LoginPage from './pages/LoginPage'
import { PrincipalHeader } from './components/shared/PrincipalHeader'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'



function App() {

 const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

 useEffect(() => {
  const url= 'https://hotels-api.academlo.tech/hotels'
   dispatch(getHotelsThunk(url))
 },[])

  return (
    <div>
      <PrincipalHeader/>
      <Routes >
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/hotels/:id' element={<HotelsIdpage  />}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/reservations' element={(<ReservationPage />)}/>
        </Route>        
      </Routes>
    </div>
   
  )
}

export default App
