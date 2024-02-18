import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Event from './pages/Event'
import { Contactus } from './pages/Contactus'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'styled-components'
import React from 'react'


const theme = {
  poppins: 'Poppins,sans-serif',
  lora: 'Lora, sans-serif',
  roboto: 'Roboto, sans-serif',
  spartan: 'League Spartan, sans-serif',
  mobile: '768px',
  largemobile: '425px',
  pc: '1024px',
  largepc: '1440px',
  maincolor: '#865CD0'
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />} >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/event' element={<Event />} />
      <Route path='/contactus' element={<Contactus />} />
    </Route>
  )
);



const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
