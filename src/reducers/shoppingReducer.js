/* import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products: [
        {id:1, name:"Product 1", price:100},
        {id:2, name:"Product 2", price:200},
        {id:3, name:"Product 3", price:300},
        {id:4, name:"Product 4", price:400},
        {id:5, name:"Product 5", price:500},
        {id:6, name:"Product 6", price:600},
    ],
    cart: [],
};

//export const shoppingInitialState = ()=>  {
//const [ products, setProducts ] = useState([]);
    
/* const url ='http://localhost:3001/Product'
        const fetchData = async (url) => {
         try{
            const response = await fetch(url);
            const data  = await response.json();
            //setProducts(data);
            console.log(data)
            return  data 
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
        
    } */
  
    


/* export function shoppingReducer(state,action){
   

    switch(action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem=state.products.find(
                (product) => product.id === action.payload
                );
            //console.log(newItem);

            let itemInCart = state.cart.find((item)=>item.id===newItem.id);
            return itemInCart 
            ? {
                ...state,
                cart:state.cart.map((item)=>
                item.id===newItem.id
                    ?{...item,quantity:item.quantity+1}
                    :item
                    ),
            }
            :{
                ...state,
                cart:[...state.cart,{...newItem,quantity:1}], 
            };

           
        }

    
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1 
            ? {
                ...state,
                cart: state.cart.map((item) => 
                item.id === action.payload 
                ? {...item, quantity: item.quantity -1}
                : item
            ),
        }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };
        }
        

        case TYPES.REMOVE_ALL_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };

        }
        

        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        
        

default:
    return state;
        
}
} */
 