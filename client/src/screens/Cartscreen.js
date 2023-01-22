import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector , useDispatch } from 'react-redux'
import {addToCart} from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
export default function Cartscreen() {
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x,item)=> x+item.price ,0)
    const dispatch = useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h2 style={{fontsize:'40px' , color :'white'}}>Your Cart </h2>
        {cartItems.map(item=>{
            return <div className="flex-container" style={{color :'#F3E5AB'}}>
            <div className='ms-auto m-1 w-100'>
                <h1 style={{color:'white'}}>{item.name} [{item.varient}]</h1>
                <h1>Price : {item.quantity}*{item.prices[0][item.varient]}={item.price} </h1>
                <h1 style={{display:'inline'}}>Quantity: </h1>
                <FontAwesomeIcon icon={faPlus} className='plus' onClick={()=>{dispatch(addToCart(item ,item.quantity+1 , item.varient ))}}/>
                <b>{item.quantity}</b>
                <FontAwesomeIcon icon={faMinus} className='minus' onClick={()=>{dispatch(addToCart(item ,item.quantity-1 , item.varient ))}} />
                <hr></hr>
          
            </div>
            <div className='m-1 w-50'>
              <img src={item.image} style={{height:'85px' , width:'80px'}}/>
            </div>
            <div className='m-1 w-50'>
            <FontAwesomeIcon icon={faTrash} className='trash mt-5' onClick={()=>{dispatch(deleteFromCart(item))}} />
            </div>
        </div>
        })}
       
        </div>
 <div className="col-md-4">
    <h2 style={{fontSize:'30px' , color:'white'}}> SubTotal:{subtotal} /-</h2>
    <button className="button">Pay Now</button>
 </div>
      </div>
    </div>
  )
}
