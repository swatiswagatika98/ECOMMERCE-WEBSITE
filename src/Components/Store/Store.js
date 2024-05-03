import React, { useContext } from 'react'
import './Store.css'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router';

export default function Store({portal,setPortal}) {
    const navigate = useNavigate();
    const {productsArr,addHandler, cartArr} = useContext(AppContext)

    const modalHandler = () => {
        setPortal(!portal)
        navigate("/cart")
       
    }
    
    return (
        <div >
            <div className='header'>
                <h1 >The Generics</h1>
            </div>

            <span className='music'>MUSIC</span>
            <div className='cart-container'>
                {productsArr.map((item, index) => (
                    <div key={index} className='cart'>
                        <div>
                            <div className='cart-album'>
                                <span > {item.title}</span>
                            </div>
                            <div>
                                <img src={item.imageUrl} alt='img' />
                            </div>
                            <div className='cart-btn'>
                                <span>${item.price}</span>
                                <button onClick={()=>addHandler(item.id)}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button className='see-all-cart-btn' onClick={modalHandler}>See the cart</button>



        </div>
    )
}

