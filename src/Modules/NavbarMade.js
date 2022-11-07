import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Navigate, useNavigate } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { useState } from 'react';

const NavbarMade = ({authenticate, setAuthenticate}) => {
    let [width, setWidth] = useState(0);
    let navigate = useNavigate();

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
            <div className='from-side-menu' style={{ width: width }}>
                <button className='close-btn' onClick={() => {setWidth(0)}}>
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </button>
                <p>test</p>
            </div>
            <div className='menu-area'>
                <span>
                    <button className='index-btn' onClick={() => {setWidth("100%")}}>
                        <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon> INDEX
                    </button>
                </span>
                <ul className='menu-list'>
                    {allMenu()}
                </ul>
            </div>
        </>
    );
}
 
export default NavbarMade;