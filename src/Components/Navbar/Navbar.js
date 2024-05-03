import React, { useContext } from 'react';
import './Navbar.css';
import { AppContext } from '../Context/AppContext';
import App from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';

export default function Navbar({ portal, setPortal, user }) {

    const { cartArr } = useContext(AppContext)
    const navigate = useNavigate();

    const modalHandler = () => {
        setPortal(!portal)
        portal ?  navigate("/store") :  navigate("/cart")
       
    }

    const loginHandler = () => {
        navigate("/login")
    }
    const signupHandler = () => {
        navigate("/signup")
    }

    const logoutHandler = async ()=>{
        try{
           await signOut(auth)
           navigate("/Login")
           alert("Signout successfully")
        }catch(err){
          alert(err)
        }
    
      }

    return (
        <nav className='container'>
            <ul className='ul'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="store">Store</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
            </ul>
            {!user ?
                <>
                    <button className='cartBtn' onClick={signupHandler}>Sign up</button>
                    <button className='cartBtn' onClick={loginHandler}>Login</button>
                </> : <>
                    <button className='cartBtn' onClick={modalHandler}>Cart {cartArr.length}</button>
                    <button className="cartBtn" onClick={logoutHandler}>Logout</button>
                </>
            }


        </nav>
    );
}
