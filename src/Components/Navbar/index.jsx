import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'
import { CiShop, CiUser  } from "react-icons/ci";


const rootPath = "";

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
        className: 'email text-black/60'
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
        text: 'Sign Out',
        className: 'Sign-in'
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

    // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState



    const handleSignOut = () => {
        const stringyfieldSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out',stringyfieldSignOut)
        context.setSignOut(true)
    }

    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut
    


    const renderView = (menu) => {
        console.log(menu);
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    {menu.map(link => (
                        <li
                            key={link.text}
                            className={link.className}
                        >
                            {link.to ? (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => isActive ? textDecoration : undefined}
                                    onClick={link.className === 'Sign-in' ? handleSignOut : undefined}
                                >
                                    {link.text}
                                    {link.className === 'cart' && <span>{context.cartProducts.length}</span>}
                                </NavLink>
                            ) : (
                                <span className="flex items-center cursor-default">
                                <CiUser className="text-black" />
                                {link.className.includes('email') ? parsedAccount?.email : link.text}
                              </span>
                                    
                                )}
                        </li>
                    ))}
                </>
            );
        } return (
              <li>
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) => isActive ? textDecoration : undefined }
                  onClick={() => handleSignOut()}>
                  Sign in
                </NavLink>
              </li>
            ) 
    }
  return (
    <nav className="flex items-center justify-between w-full fixed z-10 top-0 py-5 px-8 text-base shadow-lg  bg-slate-50">
        <ul className='flex gap-4 items-center'>
            {menu1.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={isUserSignOut ? '/sign-in' : link.to}          
                        className={({isActive})=> isActive && !isUserSignOut ? textDecoration : undefined }
                        onClick={() => {
                            console.log(isUserSignOut);
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
        <ul className='flex gap-4 items-center'>
            {renderView(menu2)}
        </ul>
    </nav>
  )
}

export default Navbar