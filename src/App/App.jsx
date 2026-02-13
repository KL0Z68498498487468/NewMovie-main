
import Questions from '@/Components/Main/Questions'
import Devices from '../Components/Home/Devices'
import Header from '../Components/Home/Header'
import Slider from '../Components/Main/Slider'
import './App.css'
import Plan from '@/Components/Main/Plan'
import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import { BrowserRouter, Route, Routes, useParams, } from 'react-router-dom'
import Movies from '@/Pages/Movies'
import Home from '@/Pages/Home'
import Navbar from '@/Components/Main/Navbar'
import Support from '@/Pages/Support'
import Subscription from '@/Pages/Subscription'
import Movie_inside from '@/Pages/Movie_inside'
import { useState } from 'react'
import Actor from '@/Pages/Actor'
import Register from '@/Pages/Register'
import Search from '@/Pages/Search'


function App() {

  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movieshow' element={<Movies/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/subscriptions' element={<Subscription/>}/>
      <Route path='/movie_inside/:id' element={<Movie_inside/>}/>
      <Route path='/actor/:id' element={<Actor/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
