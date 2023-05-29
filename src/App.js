/* eslint-disable react/jsx-no-duplicate-props */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import React, { useContext } from 'react';
import './Global.js';
import ThemeContext from './contexts/ThemeContext';

import { ThemeProvider } from 'styled-components';


//Components
import { Header, Footer} from './Components/index.js';
//Pages
import Home from './Pages/Home.jsx';
import Login from './Pages/auth/Login.jsx';
import Register from './Pages/auth/Register.jsx';
import Reset from './Pages/auth/Reset.jsx';

import ProductScreen from './containers/ProductScreen';





function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
      <ThemeProvider theme={{ theme }}>
      <div >
       
      
      <BrowserRouter >
          <ToastContainer />
          
        < Header   />
        <Routes>
        <Route path="/" element={<Home  />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
           
            <Route path="/shop"  element={<ProductScreen />} />
           
           
            

          </Routes>
       
        <Footer />
      
        </BrowserRouter>
        
        </div>
        </ThemeProvider>
    </>
  );
}

export default App;
