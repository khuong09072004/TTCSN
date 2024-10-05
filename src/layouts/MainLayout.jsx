import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header"
import Footer from "../common/Footer/Footer"

const MainLayout = () => {
    return (
      <div className='main-layout'>
        <div className='layout-content'>
          <div className='outlet'>
            <div>
              <Header/>
              <Outlet />
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default MainLayout