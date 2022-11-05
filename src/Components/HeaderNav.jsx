import HeaderMade from '../Modules/HeaderMade';
import NavbarMade from '../Modules/NavbarMade';
import UserMade from '../Modules/UserMade';

const HeaderNav = ({authenticate, setAuthenticate}) => {
    return (
        <>
            <HeaderMade></HeaderMade>
            <nav>
                <NavbarMade authenticate={authenticate} setAuthenticate={setAuthenticate}></NavbarMade>
                <UserMade authenticate={authenticate} setAuthenticate={setAuthenticate}></UserMade>
            </nav>
        </>
    );
}
 
export default HeaderNav;