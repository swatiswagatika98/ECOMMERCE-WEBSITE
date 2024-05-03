import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import AppContextProvider, { AppContext } from './Components/Context/AppContext';
import { ReactDOM } from 'react-dom';
import Modal from './Components/Modal/Modal';
import Portal from './Components/Modal/Portal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PrivateRoutes from './PrivateRoutes';



export default function App() {
  const { setPortal, portal,user, setUser } = useContext(AppContext)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
       console.log(user)
      } else {
        setUser(null)
      }
    });
    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener
    };
  },[])
  
  return (
    <>
    <AppContextProvider>
      <BrowserRouter>
        <Navbar portal={portal} setPortal={setPortal} user={user}/>
        {portal && (
         
              <Store />
          )}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PrivateRoutes user={user}  component={About} alt={Login} />}/>
          <Route path="/cart" element={portal ? <Portal portal={portal} setPortal={setPortal} /> : null} />
          <Route path="/store" element={<PrivateRoutes user={user} portal={portal} setPortal={setPortal} component={Store} alt={Login} />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppContextProvider>
  
  </>

  );
}
