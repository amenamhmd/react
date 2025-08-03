import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Gallery from './Components/Gallery/Gallery'
import Contacts from './Components/Contacts/Contacts'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'
const routers = createBrowserRouter([
  {path:'' ,element:<Layout/>,children:[
{index:true ,element:<Home/>},
{path:'about', element:<About/>},
{path:'gallery', element:<Gallery/>},
{path:'contacts', element:<Contacts/>},
{path:'*', element:<NotFound/>}
  ]}
])


export default function App() {
  

  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    
    
    
     
    </>
  )
}


