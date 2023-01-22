import React from 'react'
import { useState, useEffect } from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import {registerUser} from "../actions/userActions";

import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';
export default function Registerscreen() {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [cpassword,setcpassword] =useState('')
  const registerstate =useSelector(state =>state.registerUserReducer)
  const {error, loading , success} = registerstate
  const dispatch = useDispatch()
  function register(){
    if(password!==cpassword){
      alert("password not match")
    }
    else{
      const user={
        name,
        email,
        password
      }
      console.log(user);
      dispatch(registerUser(user))
    }
  }
  return (
    <div>
     <div className="row justify-content-center">
        <div className="col-md-5 text-left shadow p-3 mb-5 bg-white rounded mt-4" >
         {loading && (<Loading/>)}
         {success && (<Success success= 'User Register Successfully'/>)}
         {error && (<Error error= 'Email Already Register '/>)}



          <h2 style={{ color:"black" ,fontSize:"35px" ,textalign:"center"}}>Register Here</h2>
            <div>
                <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} />
                <input  required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input  type="text" placeholder="password" className="form-control" value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
                <input  type="text" placeholder="conform password" className="form-control" value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
                <button onClick={register}className='btn mt-2'>Register</button><br></br>
                <a style={{color:'red'}} href="/login">Click Here To Login</a>
            </div>
        </div>
     </div>
    </div>
  )
}
