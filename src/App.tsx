import {  useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader';
import About from './components/About'
// import ContactForm from './components/ContactForm'
// import Projects from './components/Projects'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  
  }, [])
  

  return (
    <main className="App">
      {/* <About />
      <ContactForm/> */}
      {
        loading
        ? <Loader />
        : <About />
      }
    </main>
  )
}

export default App
