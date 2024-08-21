import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import User from './components/User'

import HomePage from './routes/homePage/HomePage'
import Layout from './routes/layout/layout'
import BuyAndSell from './routes/buyAndSell/BuyAndSell'
import Taxi from './routes/taxi/Taxi'
import Canteen from './routes/canteen/Canteen'
import ProductDetails from './routes/buyAndSell/productDetails_old'
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Sell from './routes/buyAndSell/sell'
import AllProds from './routes/buyAndSell/AllProds'
import Products from './routes/buyAndSell/Products'
import ProductView from './routes/buyAndSell/productview'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/taxi",
          element:<Taxi/>
        },
        {
          path:"/buyandsell",
          element:<BuyAndSell/>,
          children: [
            {
              path: "sell", // Note: no leading slash here
              element: <Sell/>
            },
            { 
              path: "path", // Note: no leading slash here
              element: <ProductDetails/>
            },
            { 
              path: "allprods", // Note: no leading slash here
              element: <AllProds/>
            },
            // { 
            //   path: ":id", // Note: no leading slash here
            //   element: <ProductDetails/>
            // },
            { 
              path: "products", // Note: no leading slash here
              element: <Products/>,
            },
            { 
              path: "products/:id", // Note: no leading slash here
              element: <ProductView/>,
            },
          ]
        },
        {
          path:"/canteen",
          element:<Canteen/>
        },
        {
          path:"/buyandsell",
          element:<BuyAndSell/>
        },
      ]
    }, 
   
  ]);
  return (
    <>
      {/* <Navbar/>
      <User/>
      <Grid/>
      <Footer/> */}
      <RouterProvider router={router}/>

    </>
  )
}

export default App
