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

    const testText = () => {
        console.log(clothes?.including);
        console.log(clothes?.including[0].section1[0]);
    }

    useEffect(() => {
        getClothes();
    },[clothes]);

    return (
        <>
            <h1>Category Detail Here</h1>
            {clothes && clothes?.including.map((item) => (
                <li>{item && item?.type}
                    
                </li>
            ))}
            {/* {clothes && clothes?.including.map((item) => (
                <li>{item && item?.type}
                    {item && item?.section1.map((text) => (
                        <p>{text}</p>
                    ))}
                </li>
            ))} */}
            {/* <p>{clothes && clothes?.including.section1[0]}</p> */}
            <button onClick={() => {testText()}}>TEST</button>
            <p>{clothes?.including[0].section1[0]}</p>
        </>
    );
}
 
export default CategoryDetail;