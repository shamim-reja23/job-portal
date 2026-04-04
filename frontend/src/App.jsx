import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/auth/Login.jsx"
import SIgnup from "./components/auth/SIgnup.jsx"
import Home from "./components/Home.jsx"


const appRouter = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/login', element: <Login/> },
  { path: '/signup', element: <SIgnup/> }

])
function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
   
    </>
  )
}

export default App
