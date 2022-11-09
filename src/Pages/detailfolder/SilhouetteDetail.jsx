import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PrevArrow from "../../Modules/PrevArrow";
import NextArrow from "../../Modules/NextArrow";

import Slider from "react-slick";

const SilhouetteDetail = () => {
    let { id } = useParams();
    
    const [shape, setShape] = useState(null);

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
        const getShape = async () => {
            let url = `http://localhost:5000/silhouette/${id}`
            let response = await fetch(url);
            let data = await response.json();
            setShape(data);
            console.log(shape);
        }
        getShape();
    },[id]);

    return (
        <>
            <Slider {...settings}>
                {/* {clothes && clothes?.including.map((item) => (
                    <div>
                        <div className="notice-type">
                            <h3>{item && item.type}</h3>
                        </div>
                    </div>
                ))} */}
                {shape && shape?.including.map((item) => (
                <div className="contents-article">
                    <h3>{shape.shape}</h3>
                    {item.checklist_title ? (<p>{item.checklist_title}</p>) : ""}
                    {item.checklist ? (
                        <ol className="sil-section1">
                            {item?.checklist.map((list) => (
                                <li>{item && list}</li>
                            ))}
                        </ol>
                    ) : ""}
                    {item.total_title ? (<p>{item.total_title}</p>) : ""}
                    {item.total ? (
                        <ol className="sil-section2">
                            {item?.total.map((list) => (
                                <li>{item && list}</li>
                            ))}
                        </ol>
                    ) : ""}
                    {item.top_title ? (<p>{item.top_title}</p>) : ""}
                    {item.top ? (
                        <ol className="sil-section3">
                            {item?.top.map((list) => (
                                <li>{item && list}</li>
                            ))}
                        </ol>
                    ) : ""}
                    {item.bottom_title ? (<p>{item.bottom_title}</p>) : ""}
                    {item.bottom ? (
                        <ol className="sil-section4">
                            {item?.bottom.map((list) => (
                                <li>{item && list}</li>
                            ))}
                        </ol>
                    ) : ""}
                    {item.solution ? (
                        <ol className="sil-section5">
                            {item?.solution.map((list) => (
                            <li>{item && list}</li>
                            ))}
                        </ol>
                    ) : ""}
                </div>
                ))}
            </Slider>
        </>
    );
}
 
export default SilhouetteDetail;