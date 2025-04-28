
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { clearCart } from '../utils/CartSlice'

// export const Cart = () => {
//   const dispatch = useDispatch()
//   const Cartitems = useSelector((Store)=>{return Store.cart.items})
//   const handleClaerCart = () => {
//     dispatch(clearCart())
//   }
//   return (
//     <div>
        

//     <h1>Cart Items</h1>
//     <button onClick={handleClaerCart}>Clear Cart</button>
//     {Cartitems.length === 0 ?
//      <h1>Your Cart is empty</h1> :
     
//      <div>
//         <p>Total Itam : {Cartitems.length}</p>
//         <ul>
//           {Cartitems.map((item , idx) => {
//             console.log(item)
//             return (
//               <li key={idx} > 
//               {item.name} - Rs.{item.price/100}
//             </li>
//             )
//           }
//           )}
//         </ul>
//      </div>
//       }

//     </div>
//   )
// }


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/CartSlice'; 

export const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Cart Items</h1>
        {cartItems.length > 0 && (
          <button 
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Clear Cart
          </button>
        )}
      </div>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 font-medium">Total items: <span className="font-bold text-gray-800">{cartItems.length}</span></p>
          
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  {item.quantity && <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>}
                </div>
                <span className="font-bold text-green-600">${item.price}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span className="text-lg text-green-600">
                ${cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};