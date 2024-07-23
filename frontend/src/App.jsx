import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import User from './components/User'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <User login={true}/>
      <Grid/>
      <Footer/>
    </>
  )
}

export default App
