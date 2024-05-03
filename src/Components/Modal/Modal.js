import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti';
import './Modal.css'
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

export default function Modal({setPortal,portal}) {

  const navigate = useNavigate();
  const {cartArr,removeHandler, totalPrice,clearCart} = useContext(AppContext)


  const navigateToHome= ()=>{
     setPortal(false)
     navigate("/")
  }
  return (
    <div className='main__container'>
        <div className='icon'>
             <TiDeleteOutline onClick={navigateToHome}/>
        </div>
     
      <h2 className='modal__cart'>CART</h2>
      <ul className='ul__list'>
        <li>ITEM</li>
        <li style={{marginLeft:"3rem"}}>PRICE</li>
        <li>QUANTITY</li>
      </ul>
      <div className = 'main__cart'>
        {cartArr.map((item, index)=>(
           <div key={index} className='modal__data'>
            <div className='img__div'>
              <img className='cart__img' src={item.imageUrl} />
              <span>{item.title}</span>
            </div>
              <div className='cart__price'>{item.price}</div>
              <div className='btn_div'>
                  <span>1</span>
                  <button className='cart__btn' onClick={()=>removeHandler(item.id)}>Remove</button>
              </div>
          </div>
           ))}
      </div>
      <hr />
      <div className='total'>
         <span>Total $ {totalPrice}</span>
      </div>
     
     <div className='purchaseBtn'>
        <button className='main_btn' onClick={clearCart} >PURCHASE</button>
     </div>
      
    </div>
  )
}