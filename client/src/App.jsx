import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/SignIn'
import Profile from './pages/Profile'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Header from './components/header'
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route element={<PrivateRoute />} >
    <Route path='/profile' element={<Profile />} />
    <Route path='/about' element={<About />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}
