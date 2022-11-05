import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'

import { Navigate, useNavigate } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';

import MenuTest from './MenuTest';
import { Link } from 'react-router-dom';

const NavbarMade = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate();

    const allMenu = () => {
        const menuArray = []
        const menulist = {
            silhouette: "Silhouette & Line",
            pattern: "Pattern",
            fabric: "Fabric",
            category: "Category of Clothes",
            brands: "Brands",
            personal: "Personal Color"
        }
        for(const prop in menulist) {
            menuArray.push(<li><Link to={`/${prop}`} className="menubox">{menulist[prop]}</Link></li>)
        }
        return menuArray;
    }

    return (
        <>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {allMenu()}
                </ul>
            </div>
        </>
    );
}
 
export default NavbarMade;