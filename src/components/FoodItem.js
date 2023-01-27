import React,{useContext} from 'react'
import './css/FoodItem.css'
import {store} from '../App'
import {toast} from 'react-toastify'

function FoodItem(props) {

  const {cartItems,setCartItems} = useContext(store);

  



  return (
    <div style={{marginRight:"30px"}}>
                     <div className="card">
                        <img src={props.data.strMealThumb} alt="meal"/>
                        <div style={{marginBottom:"15px"}} className ="info">
                        <h3>{props.data.strMeal}</h3>
                        <h6>{props.data.strArea} food</h6>
                        </div>

                        <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                        <h3 style={{marginRight:"30px"}}>₹ {Math.floor((props.data.idMeal/10)-5000)}</h3>
                        <button style={{marginLeft:"30px"}} type="button" class="btn btn-danger" onClick={()=>{
                          if(cartItems.filter(e => e.idMeal === props.data.idMeal).length > 0){
                            toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
                          }
                          else{
                         
                          setCartItems([...cartItems,{...props.data,price: Math.floor((props.data.idMeal/10)-5000),total_price:Math.floor((props.data.idMeal/10)-5000),quantity:1}])
                          console.log(cartItems);
                          toast.success('Added to Cart!', {position: toast.POSITION.BOTTOM_RIGHT})

                          
                          }
                          
                        }} >Add to Cart</button>
                        </div>
                       
            </div>  
      
    </div>
  )
}

export default FoodItem
