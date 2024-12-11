import { Outlet } from "react-router-dom"; 
import NavBar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <div>
      {/* Render the NavBar for all pages */}
      <NavBar />
      
      {/* This is where the nested route content will appear */}
      <div className="container mt-4">
        <Outlet />  {/* The content of the current route will be rendered here */}
      </div>
    </div>
  );
};

export default Layout;
