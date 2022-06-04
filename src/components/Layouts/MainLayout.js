import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
