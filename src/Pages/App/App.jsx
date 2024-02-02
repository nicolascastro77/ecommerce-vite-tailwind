import { useRoutes, BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context";
import CheckoutSideMenu from "../../Components/Checkout SideMenu";

const rootPath = "/ecommerce-vite-tailwind";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: `${rootPath}/`, element: <Home /> },
    { path: `${rootPath}/jewelery`, element: <Home /> },
    { path: `${rootPath}/electronics`, element: <Home /> },
    { path: `${rootPath}/mens-clothing`, element: <Home /> },
    { path: `${rootPath}/womens-clothing`, element: <Home /> },
    { path: `${rootPath}/othes`, element: <Home /> },
    { path: `${rootPath}/my-order`, element: <MyOrder /> },
    { path: `${rootPath}/my-orders`, element: <MyOrders /> },
    { path: `${rootPath}/my-orders/last`, element: <MyOrder /> },
    { path: `${rootPath}/my-orders/:id`, element: <MyOrder /> },
    { path: `${rootPath}/my-account`, element: <MyAccount /> },
    { path: `${rootPath}/sign-in`, element: <SignIn /> },
    { path: `${rootPath}/*`, element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
