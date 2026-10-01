import { Suspense } from "react"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Stats from "./components/Stats"
import Home from "./pages/Home"
import Loading from "./components/Loading"
import Steps from "./components/Steps"

function App() {
  const product = async () => {
    const res = await fetch('/product.json')
    return res.json()
  }
   const productPromise = product()
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Stats></Stats>
      <Suspense fallback={<Loading></Loading>}>
        <Product productPromise={productPromise}></Product>
      </Suspense>
      <Steps></Steps>
    </>
  )
}

export default App
