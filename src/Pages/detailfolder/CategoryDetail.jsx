import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Slider from "react-slick";

const CategoryDetail = () => {
    let { id } = useParams();
    
    const [clothes, setClothes] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const getClothes = async () => {
        let url = `http://localhost:5000/clothes/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setClothes(data);
    }

    useEffect(() => {
        getClothes();
    },[clothes]);

    return (
        <>
            <h1>Category Detail Here</h1>
            <Slider {...settings}>
                {clothes && clothes?.including.map((item) => (
                    <div>
                        <div className="notice-type">
                            <h3>{item && item.type}</h3>
                        </div>
                    </div>
                ))}
                {/* {clothes && clothes?.including.map((item) => (
                <div>
                    <h3>{item && item.type}</h3>
                    <p>{item && item.section1_title}</p>
                    <ol>
                        {item?.section1.map((list) => (
                            <li>{item && list}</li>
                        ))}
                    </ol>
                    <p>{item && item.section2_title}</p>
                    <ol>
                        {item?.section2.map((list) => (
                            <li>{item && list}</li>
                        ))}
                    </ol>
                    <p>{item && item.section3_title}</p>
                    <ol>
                        {item?.section3.map((list) => (
                            <li>{item && list}</li>
                        ))}
                    </ol>
                </div>
                ))} */}
            </Slider>
        </>
    );
}
 
export default CategoryDetail;