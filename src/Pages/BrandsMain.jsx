import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const BrandsMain = () => {
    const [brandscate, setBrandscate] = useState(null);
    const navigate = useNavigate();

    const getBrandscate = async () => {
        let url = `http://localhost:5000/brands/`
        let response = await fetch(url);
        let data = await response.json();
        setBrandscate(data);
    }

    useEffect(() => {
        getBrandscate();
    },[])

    const dropToMove = () => {
        const dropMove = [];
        for(let i = 0; i < brandscate.length; i++) {
            dropMove.push(<Dropdown.Item onClick={() => {navigate(`/brands/${brandscate[i].id}`)}}>{brandscate[i].category}</Dropdown.Item>);
        }
        return dropMove;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="brandsubvisual">
                            <h1 className="visualsub">BRANDS</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="outlet">
                                        <div className="dropcontain">
                                            <DropdownButton id="dropdown-basic-button" title="Choose Brands Here">
                                                {brandscate && dropToMove()}
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
 
export default BrandsMain;