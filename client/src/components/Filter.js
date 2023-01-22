import React ,{useEffect , useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {filterPizzas} from '../actions/pizzaAction'
export default function Filter() {
    const dispatch= useDispatch()
    const [searckey , setsearchkey] = useState('')
    const [category , setcategory] = useState('all')
  return (
    <div>
      <div className="row justify-content-center ">
        
        <div className="col-md-3 w-40">
<input
onChange={(e)=>{setsearchkey(e.target.value)}}
value={searckey} type="text" className="form-control w-100" placeholder="Search Pizza"/>
        </div>
        <div className="col-md-3 w-40 mt-2"  value={category} onChange={(e)=>{setcategory(e.target.value)}}>
            <select className="form-control w-100">
                <option value="all">All</option>
                <option value="veg">Veg</option>
                <option value="nonveg">NonVeg</option>
            </select>
        </div>
        <div className="col-md-3 m-2 ">
         <button className='btn w-100' onClick={()=>{dispatch(filterPizzas(searckey , category))}}>Filter</button>   
        </div>
      </div>
    </div>
  )
}
