
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Event from './pages/Event'
import { Contactus } from './pages/Contactus'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'styled-components'


function App() {
  const theme = {
    poppins: 'Poppins, sans-serif',
    mobile: '768px',
    largemobile: '425px',
    pc: '1024px',
    maincolor: '#865CD0'
  };
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/event' element={<Event />} />
            <Route path='/contactus' element={<Contactus />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
