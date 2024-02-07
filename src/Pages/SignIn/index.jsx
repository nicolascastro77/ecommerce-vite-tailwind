import { useContext, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useState } from 'react'

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }

  const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
    // TODO: Remove this console.log 🥲
		console.log(data)
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    // Sign In
    handleSignIn()
	}
 

  const renderLogIn = () => {
    return (
    <div>
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-bold text-sm'>Email: </span>
          <span className='font-light'>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-bold text-sm'>Password: </span>
          <span className='font-light'>{parsedAccount?.password}</span>
        </p>
        <Link
          to="/">
          <button
            className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2'
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}>
            Log in
          </button>
        </Link>
        <div className='text-center'>
        <a
          href='/'
          className='font-light text-xs underline underline-offset-4 hover:underline-hover-disabled'
          disabled={true} // Agrega esta propiedad si estás utilizando un elemento que soporte la propiedad disabled
        >Forgot my password</a>
        </div>
        <button
          className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}>
          Sign up
        </button>
      </div>
    </div>
)
}

const renderCreateUserInfo = () => {
  return (
    <form ref={form} className='flex flex-col gap-4 w-80'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='font-light text-sm'>Your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={parsedAccount?.name}
          placeholder="Peter"
          className='rounded-lg border border-black placeholder:font-light
          placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-light text-sm'>Your email:</label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={parsedAccount?.email}
          placeholder="hi@helloworld.com"
          className='rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="password" className='font-light text-sm'>Your password:</label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue={parsedAccount?.password}
          placeholder="******"
          className='rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
        />
      </div>
      <Link to="/">
        <button
          className='bg-black text-white w-full rounded-lg py-3'
          onClick={() => createAnAccount()}>
          Create
        </button>
      </Link>
    </form>
  )
}

const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

return (
  <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="font-bold text-8xl text-center mb-6">Welcome</h1>
    <div className='flex justify-center my-10'>
      <img className='w-64 h-auto mr-6' src="https://i.ibb.co/WyP0bhj/3d-casual-life-guy-shopping-online.png" alt="" />
      {renderView()}
    </div>
  </div>
);


}

export default SignIn;
