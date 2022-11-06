import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
    let { id } = useParams();
    
    const [clothes, setClothes] = useState(null);

    const getClothes = async () => {
        let url = `http://localhost:5000/clothes/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setClothes(data);
    }

    /* const testText = () => {
        console.log(clothes?.including);
        console.log(clothes?.including[0].section1[0]);
    } */

    useEffect(() => {
        getClothes();
    },[clothes]);

    return (
        <>
            <h1>Category Detail Here</h1>
            {clothes && clothes?.including.map((item) => (
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
            ))}
            {/* {clothes && clothes?.including.map((item) => (
                <li>{item && item?.type}
                    
                </li>
            ))} */}
            {/* <hr></hr>
            <h3>{clothes?.including[0]?.title && clothes?.including[0]?.title}</h3>
            <p>{clothes?.including[0]?.section1_title && clothes?.including[0]?.section1_title}</p>
            <ol>
                <li>{clothes?.including[0]?.section1[0] && clothes?.including[0]?.section1[0]}</li>
                <li>{clothes?.including[0]?.section1[1] && clothes?.including[0]?.section1[1]}</li>
                <li>{clothes?.including[0]?.section1[2] && clothes?.including[0]?.section1[2]}</li>
            </ol>
            <p>{clothes?.including[0]?.section2_title && clothes?.including[0]?.section2_title}</p>
            <ol>
                <li>{clothes?.including[0]?.section2[0] && clothes?.including[0]?.section2[0]}</li>
                <li>{clothes?.including[0]?.section2[1] && clothes?.including[0]?.section2[1]}</li>
            </ol>
            <p>{clothes?.including[0]?.section3_title && clothes?.including[0]?.section3_title}</p>
            <ol>
                <li>{clothes?.including[0]?.section3[0] && clothes?.including[0]?.section3[0]}</li>
                <li>{clothes?.including[0]?.section3[1] && clothes?.including[0]?.section3[1]}</li>
                <li>{clothes?.including[0]?.section3[2] && clothes?.including[0]?.section3[2]}</li>
                <li>{clothes?.including[0]?.section3[3] && clothes?.including[0]?.section3[3]}</li>
                <li>{clothes?.including[0]?.section3[4] && clothes?.including[0]?.section3[4]}</li>
                <li>{clothes?.including[0]?.section3[5] && clothes?.including[0]?.section3[5]}</li>
                <li>{clothes?.including[0]?.section3[6] && clothes?.including[0]?.section3[6]}</li>
                
            </ol>
            <ol>
                <li>{clothes?.including[0]?.section3[7] && clothes?.including[0]?.section3[7]}</li>
                <li>{clothes?.including[0]?.section3[8] && clothes?.including[0]?.section3[8]}</li>
                <li>{clothes?.including[0]?.section3[9] && clothes?.including[0]?.section3[9]}</li>
                <li>{clothes?.including[0]?.section3[10] && clothes?.including[0]?.section3[10]}</li>
                <li>{clothes?.including[0]?.section3[11] && clothes?.including[0]?.section3[11]}</li>
                <li>{clothes?.including[0]?.section3[12] && clothes?.including[0]?.section3[12]}</li>
            </ol> */}
        </>
    );
}
 
export default CategoryDetail;