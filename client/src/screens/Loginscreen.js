
import { useState, useEffect } from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import { loginUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
export default function Loginscreen() {
  
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const loginstate =useSelector(state =>state.loginUserReducer)
  const {error, loading} = loginstate
  const dispatch =useDispatch()
 useEffect( () =>{
if(localStorage.getItem('currentUser'))
{
window.location.href='/'
}
 },
 [])
  function login(){
const user={email , password}
dispatch(loginUser(user))
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 text-left shadow p-3 mb-5 bg-white rounded mt-4 " >
          <h2 style={{ color:"Black" ,fontSize:"35px" ,textalign:"center"}}>LOGIN</h2>
                  {loading && (<Loading/>)}
                  {error && (<Error error= 'Invalid Credentials'/>)}

            <div>
                <input  required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input  type="text" placeholder="password" className="form-control" value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
                <button onClick={login}className='btn mt-2'>Login</button><br></br>
                <a style={{color:'red'}} href="/register">Click Here To Register</a>
            </div>
        </div>
     </div>
    </div>
  )
}
