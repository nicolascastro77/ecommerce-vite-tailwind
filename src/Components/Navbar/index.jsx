import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'
import { CiShop } from "react-icons/ci";


let menu1 = [
    {
        to: '/',
        text: 'Shop',
        className: 'font-semibold text-lg logo mr-8'
    },
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/jewelery',
        text: 'jewelery',
        className: ''
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/mens-clothing',
        text: "men's clothing",
        className: ''
    },
    {
        to: '/womens-clothing',
        text: "women's clothing",
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

    const textDecoration = 'underline underline-offset-4 font-bold '

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
                        onClick={() => {
                            if (link.text === "All" || link.text === "Shop") {
                              context.setSearchByCategory();
                            } else {
                              context.setSearchByCategory(link.text);
                            }
                          }}
                    >
                        {link.className.includes('logo') && <span><CiShop className='h-10 w-10' /></span>}
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