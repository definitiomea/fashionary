import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Navigate, useNavigate } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { useState } from 'react';

const NavbarMade = ({authenticate, setAuthenticate}) => {
    let [width, setWidth] = useState(0);
    let navigate = useNavigate();

    const menulist = {
        silhouette: "Silhouette",
        pattern: "Pattern",
        fabric: "Fabric",
        category: "Category of Clothes",
        /* brands: "Brands", */
        personal: "Personal Color"
    }

    const horizonMenu = () => {
        const horizon = [];
        for(const prop in menulist) {
            horizon.push(<li><Link to={`/${prop}`} className="menubox">{menulist[prop]}</Link></li>);
        }
        return horizon;
    }

    const verticalMenu = () => {
        const vertical = [];
        for(const prop in menulist) {
            vertical.push(<><h1><Link to={`/${prop}`} className="vertical-box" onClick={() => {setWidth(0)}}>{menulist[prop]}</Link></h1><br></br></>);
        }
        return vertical;
    }

    return (
        <>
            <div className='from-side-menu' style={{ width: width }}>
                <button className='close-btn' onClick={() => {setWidth(0)}}>
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </button>
                <div className='vertical-area'>
                    {verticalMenu()}
                </div>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {horizonMenu()}
                </ul>
                <h4 className='index-btn hide' onClick={() => {setWidth("100%")}}>
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> INDEX
                </h4>
            </div>
        </>
    );
}
 
export default NavbarMade;