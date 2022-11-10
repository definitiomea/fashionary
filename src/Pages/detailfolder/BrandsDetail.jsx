import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PrevArrow from "../../Modules/PrevArrow";
import NextArrow from "../../Modules/NextArrow";

import Slider from "react-slick";

const BrandsDetail = () => {
    let { id } = useParams();

    const [brands, setBrands] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    useEffect(() => {
        const getBrands = async () => {
            let url = `http://localhost:5000/brands/${id}`
            let response = await fetch(url);
            let data = await response.json();
            setBrands(data);
        }
        getBrands();
    },[id]);

    return (
        <>
            <Slider {...settings}>
                {brands ? (
                    brands.including.map((item) => (
                        <div className="contents-article">
                            <h3>{item.section_title}</h3>
                            {item.section1 ? (
                                <ol className="pat-section1">
                                    {item?.section1.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section1_img ? (
                                <img src={require(`../../Sources/Img/${item.section1_img}`)} style={{maxWidth: "100%"}}></img>
                            ) : ""}
                            {item.section2 ? (
                                <ol className="pat-section2">
                                    {item?.section2.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section3 ? (
                                <ol className="pat-section3">
                                    {item?.section3.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section4 ? (
                                <ol className="pat-section4">
                                    {item?.section4.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                        </div>
                    ))
                ) : ""}
            </Slider>
        </>
    );
}
 
export default BrandsDetail;