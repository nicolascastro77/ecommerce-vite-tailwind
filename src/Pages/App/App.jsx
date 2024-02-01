
import { useRoutes, BrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'
import {ShoppingCartProvider} from '../../Context'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home /> },
    {path: '/my-order', element: <MyOrder /> },
    {path: '/my-orders', element: <MyOrders /> },
    {path: '/my-account', element: <MyAccount /> },
    {path: '/sign-in', element: <SignIn /> },
    {path: '/*', element: <NotFound /> },
  ])
  return routes
}


const App =() => {
  return (
  <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
        <AppRoutes />
        <Navbar />
        </Layout>
      </BrowserRouter>
  </ShoppingCartProvider>

  )
}

export default App
