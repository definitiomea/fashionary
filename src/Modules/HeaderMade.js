import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const HeaderMade = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <>
            <header>
                {/* <div className="home-area"> */}
                    <div className='home-logo' onClick={goHome}>
                        <h1 className="home-title">F<span className="paint-red">A</span>SHION<span className="paint-red">A</span>RY
                            {/* <FontAwesomeIcon icon={faBookOpen} className="home-book"></FontAwesomeIcon>
                            <img src={require('../Sources/Img/hanger.png')} className="home-hanger"></img> */}
                        </h1>
                    </div>
                {/* </div> */}
            </header>
        </>
    );
}
 
export default HeaderMade;