import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'

let menu1 = [
    {
        to: '/',
        text: 'Shopi',
        className: 'font-semibold text-lg'
    },
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/furnitures',
        text: 'furnitures',
        className: ''
    },
    {
        to: '/toys',
        text: 'toys',
        className: ''
    },
    {
        to: '/others',
        text: 'others',
        className: ''
    },
]

let menu2 = [
    {
        text: 'user@email.com',
        className: 'text-black/60'
    },
    {
        to: '/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My occount',
        className: ''
    },
    {
        to: '/sign-in',
        text: 'Sign in',
        className: ''
    },
    {
        to: '/shoppcar',
        text: '🛒',
        className: 'cart'
    },
]



const Navbar = () => {
    
    const context = useContext(ShoppingCartContext)

    const textDecoration = 'underline underline-offset-4 text-red-800'

  return (
    <nav className="flex items-center justify-between w-full fixed z-10 top-0 py-5 px-8 text-sm shadow-lg  bg-slate-50">
        <ul className='flex gap-3 items-center'>
            {menu1.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
        <ul className='flex gap-3 items-center'>
            {menu2.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
            {link.to ? (
              <NavLink 
                to={link.to}
                className={({isActive}) => isActive ? 'activeClass' : undefined }
              >
                {link.text}
                {link.className === 'cart' && <span>{context.cartProducts.length}</span>}
              </NavLink>
            ) : (
              <span>{link.text}</span>
            )}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar