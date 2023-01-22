import React ,{useEffect , useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {getAllPizzas} from '../actions/pizzaAction'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'
export default function Homescreen() {

  const dispatch = useDispatch()
  const pizzasstate = useSelector(state=>state.getAllPizzasReducer)
  const {pizzas , error, loading} = pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
    
  }, [])

  return (
    <div>
      <Filter/>
       <div className="row">
        {/* conditional rendering */}
        {loading ? (
        <Loading/>
        ) : error ? (
        <Error error='something went wrong'/>
        ) : (
        pizzas.map(pizza=>{
  return <div className="col-md-4" key={pizza.id}>
      <div >
       <Pizza pizza={pizza}/> 
      </div>
  </div>
})

        )}
        
      </div>
</div>
    
  )
}
