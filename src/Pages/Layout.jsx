import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import HeaderNav from "../Components/HeaderNav";

const Layout = ({authenticate, setAuthenticate}) => {
    return (
        <>
            <HeaderNav authenticate={authenticate} setAuthenticate={setAuthenticate}></HeaderNav>
            <Outlet></Outlet>
            <Footer authenticate={authenticate} setAuthenticate={setAuthenticate}></Footer>
        </>
    );
}
 
export default Layout;