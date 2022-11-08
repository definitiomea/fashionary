import { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';

const CategoryMain = () => {

    const [category, setCategory] = useState(null);
    const navigate = useNavigate();

    const getCategory = async () => {
        let url = `http://localhost:5000/clothes/`
        let response = await fetch(url);
        let data = await response.json();
        setCategory(data);
    }

    useEffect(() => {
        getCategory();
    },[]);

    /* const test = () => {
        console.log(category);
        console.log(category[0]);
        console.log(category[0].id);
        console.log(category.length);
        console.log(category[0]?.including[0].type);
    } */

    const dropToMove = () => {
        const dropMove = [];
        for(let i = 0; i < category.length; i++) {
            dropMove.push(<Dropdown.Item onClick={() => {navigate(`/category/${category[i].id}`)}}>{category[i].category}</Dropdown.Item>);
        }
        return dropMove;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="catsubvisual">
                            <h1 className="visualsub">CATEGORY</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="outlet">
                                        <div className="dropcontain">
                                            <DropdownButton id="dropdown-basic-button" title="Choose Category Here">
                                                {category && dropToMove()}
                                            </DropdownButton>
                                        </div>
                                        <Outlet></Outlet>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </article>
            </main>
            
        </>
    );
}
 
export default CategoryMain;