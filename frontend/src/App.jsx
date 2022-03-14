// import React, { createContext, useReducer } from 'react'
// import { Route, Routes, } from "react-router-dom"
// import Login from './components/login'
// import { Nav } from './components/nav'
// import Home from "./components/home"
// import About from "./components/about"
// import Signin from "./components/signin"
// import Logout from "./components/logout"
// import { reducer, initilstate } from './reducer/usereducer'
// import Products from "./components/products"
// import Product from './components/product'
// import Employee from './components/employee'

// export const usercontext = createContext();

// const App = () => {

//   const [state, dispatch] = useReducer(reducer, initilstate)

//   return (
//     <>
//       <usercontext.Provider value={[state, dispatch]}>
//         <Nav />
//         <Routes>
//           <Route exact path='/' element={<Home />} />
//           <Route exact path='/about' element={<About />} />
//           <Route exact path='/products' element={<Products />} />
//           <Route exact path='/products/:id' element={<Product />} />
//           <Route exact path='/employee' element={<Employee />} />
//           <Route exact path='/login' element={<Login />} />
//           <Route exact path='/sigin' element={<Signin />} />
//           <Route exact path='/logout' element={<Logout />} />
//         </Routes>
//       </usercontext.Provider>


//     </>
//   )
// }


// export default App

import React, { createContext, useReducer, useContext } from 'react'
import { Route, Routes, } from "react-router-dom"
import Login from './components/login'
import { Nav } from './components/nav'
import Home from "./components/home"
import About from "./components/about"
import Signin from "./components/signin"
import Logout from "./components/logout"
import { reducer, initilstate } from './reducer/usereducer'
import Products from "./components/products"
import Product from './components/product'
import Employee from './components/employee'




export const usercontext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initilstate)

  return (
    <>
      <usercontext.Provider value={[state, dispatch]}>

        <Nav />
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<Product />} />
          <Route exact path='/employee' element={<Employee />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sigin' element={<Signin />} />
          <Route exact path='/logout' element={<Logout />} />

        </Routes>

      </usercontext.Provider>


    </>
  )
}


export default App