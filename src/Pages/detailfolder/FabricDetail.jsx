import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PrevArrow from "../../Modules/PrevArrow";
import NextArrow from "../../Modules/NextArrow";

import Slider from "react-slick";

const FabricDetail = () => {
    let { id } = useParams();

    const [fabric, setFabric] = useState(null);

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
        const getFabric = async () => {
            let url = `http://localhost:5000/fabric/${id}`
            let response = await fetch(url);
            let data = await response.json();
            setFabric(data);
        }
        getFabric();
    },[id]);

    return (
        <>
            <Slider {...settings}>
                {fabric ? (
                    fabric.including.map((item) => (
                        <div className="contents-article">
                            <h3>{item.section_title}</h3>
                            {item.section1_title ? (<p>{item.section1_title}</p>) : ""}
                            {item.section1 ? (
                                <ol className="section1">
                                    {item?.section1.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.explane_img_1 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_1}`)} style={{maxWidth: "20%"}}></img>
                            ) : ""}
                            {item.section2_title ? (<p>{item.section2_title}</p>) : ""}
                            {item.section2 ? (
                                <ol className="section2">
                                    {item?.section2.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.explane_img_2 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_2}`)} style={{maxWidth: "20%"}}></img>
                            ) : ""}
                            {item.section3_title ? (<p>{item.section3_title}</p>) : ""}
                            {item.section3 ? (
                                <ol className="section3">
                                    {item?.section3.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.explane_img_3 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_3}`)} style={{maxWidth: "20%"}}></img>
                            ) : ""}
                            {item.section4_title ? (<p>{item.section4_title}</p>) : ""}
                            {item.section4 ? (
                                <ol className="section4">
                                    {item?.section4.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.explane_img_4 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_4}`)} style={{maxWidth: "20%"}}></img>
                            ) : ""}
                        </div>
                    ))
                ) : ""}
            </Slider>
        </>
    );
}
 
export default FabricDetail;