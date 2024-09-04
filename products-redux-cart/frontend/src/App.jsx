import { Route, RouterProvider, createBrowserRouter , createRoutesFromChildren } from "react-router-dom"
import Application from "./Layouts/Application"
import Home from "./Layouts/Home"
import Cart from "./Layouts/Cart"
import Login from "./Layouts/Login"
import Register from "./Layouts/Register"
import { useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { loaduser } from "./redux/UserSlice"

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(loaduser())
  }, [])
  const router = createBrowserRouter( 
    createRoutesFromChildren(
      <Route path="/" element = {<Application/>} >
        <Route path="/" element = {<Home />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/login" element = {<Login />}  />
        <Route path="/register" element = {<Register />} />
      </Route>
    )
    
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
