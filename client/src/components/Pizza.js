import React from 'react'
import { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useSelector , useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
export default function Pizza({pizza}) {
  const[quantity , setquantity] =useState(1)
  const[Varients , setVarients] =useState('small')
  // They are model variable
  const [show, setShow] = useState(false); 
      // They are functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch =useDispatch()
  function addtocart(){
    dispatch(addToCart(pizza , quantity ,Varients))

  }
  return (
    <div className=' m-4 shadow-lg p-3 mb-5 bg-white rounded'>
         <div onClick={handleShow}>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} className="img-fluid" style={{height:'200px',width : '200px'}}/> 
      </div>
         <div className="flex-container">
            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control' value={Varients} onChange={(e)=>{setVarients(e.target.value)}}>
                    {pizza.varients.map(varient=>{
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
         </div>
         <div className='w-100 m-1'>
         <p>Quantity</p>
         <select className='form-control' value={quantity} 
         onChange={(e)=>{setquantity(e.target.value)}}>
            
            {[...Array(10).keys()].map((x,i)=>{
              
              
              return <option value={i+1}>{i+1}</option>
            }
            )}




            //
          </select>
         </div>
    </div>
    <div className="flex-container">
        <div className='w-100 m-1'>
        <h1>Prices:Rs{pizza.prices[0][Varients] * quantity}</h1>
        </div>
        <div className='w-100 m-1'>
        <button className="button" onClick={addtocart}>ADD TO CART</button>
        </div>
        </div>
        <div className="child">
        <Modal  show={show} onHide={"handleClose"}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image}   className="img-fluid" style={{height:"350px"}} />
          <p>{pizza.description}</p>
          
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close Model</button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}
