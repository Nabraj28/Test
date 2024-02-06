
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Event } from './pages/Event'
import { Contactus } from './pages/Contactus'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/event' element={<Event />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
