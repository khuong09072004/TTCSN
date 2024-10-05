import './App.scss'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {

  const router = useRoutes([
    {
      path:"/",
      element: <MainLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
      ],
    },
    {
      path: '/signIn',
      element:<Login/>
    },
    {
      path:'/signUp',
      element:<Register/>
    }
    
  ])
  return (
    <>
    {router}
    </>
  )
}

export default App