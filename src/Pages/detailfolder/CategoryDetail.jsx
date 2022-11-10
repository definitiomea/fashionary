import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PrevArrow from "../../Modules/PrevArrow";
import NextArrow from "../../Modules/NextArrow";

import Slider from "react-slick";

const CategoryDetail = () => {
    let { id } = useParams();
    
    const [clothes, setClothes] = useState(null);

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
        const getClothes = async () => {
            let url = `http://localhost:5000/clothes/${id}`
            let response = await fetch(url);
            let data = await response.json();
            setClothes(data);
            console.log(clothes);
        }
        getClothes();
    },[id]);

    return (
        <>
            <Slider {...settings}>
                {clothes ? (
                    clothes?.including.map((item) => (
                        <div className="contents-article">
                            <h3>{item.type}</h3>
                            {item.section1_title ? (<p>{item.section1_title}</p>) : ""}
                            {item.section1 ? (
                                <ol className="section1">
                                    {item?.section1.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section2_title ? (<p>{item.section2_title}</p>) : ""}
                            {item.section2 ? (
                                <ol className="section2">
                                    {item?.section2.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section3_title ? (<p>{item.section3_title}</p>) : ""}
                            {item.section3 ? (
                                <ol className="section3">
                                    {item?.section3.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.section4_title ? (<p>{item.section4_title}</p>) : ""}
                            {item.section4 ? (
                                <ol className="section4">
                                    {item?.section4.map((list) => (
                                        <li>{item && list}</li>
                                    ))}
                                </ol>
                            ) : ""}
                            {item.explane_img_1 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_1}`)} style={{maxWidth: "100%"}}></img>
                            ) : ""}
                            {item.explane_img_2 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_2}`)} style={{maxWidth: "100%"}}></img>
                            ) : ""}
                            {item.explane_img_3 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_3}`)} style={{maxWidth: "100%"}}></img>
                            ) : ""}
                            {item.explane_img_4 ? (
                                <img src={require(`../../Sources/Img/${item.explane_img_4}`)} style={{maxWidth: "100%"}}></img>
                            ) : ""}
                        </div>
                ))) : ""}
            </Slider>
        </>
    );
}
 
export default CategoryDetail;