
import Questions from '@/Components/Main/Questions'
import Devices from '../Components/Home/Devices'
import Header from '../Components/Home/Header'
import Slider from '../Components/Main/Slider'
import './App.css'
import Plan from '@/Components/Main/Plan'
import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'


function App() {

  return (
    <div>
      <Header/>
      <Slider/>
      <Devices/>
      <Questions/>
      <Plan/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
