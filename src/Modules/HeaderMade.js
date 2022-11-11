import React from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const HeaderMade = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5500,
        speed: 3000,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    };

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <>
            <header>
                <div style={{overflow: "hidden"}}>
                <Slider {...settings}>
                    <div className="header-img1"></div>
                    <div className="header-img2"></div>
                    <div className="header-img3"></div>
                </Slider>
                {/* <div className="home-area"> */}
                    <div className='home-logo' onClick={goHome}>
                        <h1 className="home-title">F<span className="paint-red">A</span>SHION<span className="paint-red">A</span>RY
                            {/* <FontAwesomeIcon icon={faBookOpen} className="home-book"></FontAwesomeIcon>
                            <img src={require('../Sources/Img/hanger.png')} className="home-hanger"></img> */}
                        </h1>
                    </div>
                {/* </div> */}
                </div>
            </header>
        </>
    );
}
 
export default HeaderMade;