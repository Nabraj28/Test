import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
  aquire: 'Aquire, sans-serif',
  mobile: '768px',
  largemobile: '425px',
  pc: '1024px',
  largepc: '1440px',
  maincolor: '#865CD0'
};

const router = createBrowserRouter([
  {
    path: "/", Component: Navbar, children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/event", Component: Event },
      { path: "/contactus", Component: Contactus }
    ]
  }
]);



const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
