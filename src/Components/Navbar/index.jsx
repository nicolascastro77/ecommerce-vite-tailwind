import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'
import { CiShop } from "react-icons/ci";

const rootPath = "/ecommerce-vite-tailwind";

let menu1 = [
    {
        to: `${rootPath}/`,
        text: 'Shop',
        className: 'font-semibold text-lg logo mr-8'
    },
    {
        to: `${rootPath}/`,
        text: 'All',
        className: ''
    },
    {
        to: `${rootPath}/jewelery`,
        text: 'jewelery',
        className: ''
    },
    {
        to: `${rootPath}/electronics`,
        text: 'electronics',
        className: ''
    },
    {
        to: `${rootPath}/mens-clothing`,
        text: "men's clothing",
        className: ''
    },
    {
        to: `${rootPath}/womens-clothing`,
        text: "women's clothing",
        className: ''
    },
];

let menu2 = [
    {
        text: 'user@email.com',
        className: 'text-black/60'
    },
    {
        to: `${rootPath}/my-orders`,
        text: 'My orders',
        className: ''
    },
    {
        to: `${rootPath}/my-account`,
        text: 'My account',
        className: ''
    },
    {
        to: `${rootPath}/sign-in`,
        text: 'Sign in',
        className: ''
    },
    {
        to: `${rootPath}/shoppcar`,
        text: '🛒',
        className: 'cart'
    },
];



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