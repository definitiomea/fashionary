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

    useEffect(() => {
        getClothes();
    },[clothes]);

    return (
        <>
            <h1>Category Detail Here</h1>
            {clothes?.including.map((item) => (
                <li>{item?.type}
                    <p>{item?.explane}</p>
                </li>
            ))}
        </>
    );
}
 
export default CategoryDetail;