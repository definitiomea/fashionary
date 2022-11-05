import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'

import { useNavigate } from 'react-router-dom';

const UserMade = ({authenticate ,setAuthenticate}) => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/login");
    }

    const goLogout = () => {
        setAuthenticate(false);
        navigate("/");
    }

    const goMyPage = () => {
        navigate("/mypage");
    }

    const goSignup = () => {
        navigate("/signup");
    }

    const search = (e) => {
        if(e.key == "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
            e.target.value = "";
        }
    }

    return (
        <>
            <ul className='act-list'>
                {/* 이제 이걸 드랍 다운, 혹은 text area로 바꿔주면 될 것 같다. */}
                <li className='search' key="search">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" placeholder='Search' className='search-area' onKeyPress={(e) => search(e)}></input>
                </li>

                {/* 두 메뉴는 각각 페이지로 보내주기, onClick */}
                {authenticate == true ?
                <li className='logout' key="logout" onClick={goLogout}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Logout</li> :
                <li className='login' key="login" onClick={goLogin}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Login</li>                            
                }
                {authenticate == true ?
                <li className='signup' key="signup" onClick={goMyPage}>
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon> My Page</li> :
                <li className='signup' key="signup" onClick={goSignup}>
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon> Sign up</li>
                }
            </ul>
        </>
    );
}
 
export default UserMade;