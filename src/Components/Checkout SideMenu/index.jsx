import { useContext } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';



const CheckoutSideMenu = () => {
    
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts} = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }


  return (
    <aside
    className={`${isCheckoutSideMenuOpen ? 'flex shadow-lg' : 'hidden'} checkout-side-menu flex-col p-2 overflow-y-scroll fixed right-0  bg-white`}>
    <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <IoMdCloseCircle
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => closeCheckoutSideMenu()}></IoMdCloseCircle>
        </div>
    </div>
    <div className=''>
    {
      cartProducts.map( product => (
        <OrderCard 
            key = {product.id}
            id = {product.id}
            title = {product.title}
            imageUrl = {product.image}
            price = {product.price}
            handleDelete = {handleDelete}
        />
      ))
      }
    </div>
    <div className='w-full h-16 flex items-center justify-center shadow-md b'>
      <p className=''>
        <span> Total: </span>
        <span> {totalPrice(cartProducts)}</span>
      </p>
    </div>
    </aside>
  )
}

export default CheckoutSideMenu