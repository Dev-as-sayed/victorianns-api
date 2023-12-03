import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;