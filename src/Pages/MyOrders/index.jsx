import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard';
function MyOrders() {


  const {order} = useContext(ShoppingCartContext)
  return (
    <div className='flex justify-center'>
    <div className='w-1/2'>
      {
        order && order.length>0 ? order.slice(-1)[0].products.map( product => (
          <OrderCard 
              key = {product.id}
              id = {product.id}
              title = {product.title}
              imageUrl = {product.image}
              price = {product.price}
          />
        ))
        : <p>No hay productos en la orden.</p>
      }
    </div>

    </div>
  )
}

export default MyOrders