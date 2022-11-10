import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const PatternMain = () => {
    const [pattcate, setPattcate] = useState(null);
    const navigate = useNavigate();

    const getPattcate = async () => {
        let url = `http://localhost:5000/pattern/`
        let response = await fetch(url);
        let data = await response.json();
        setPattcate(data);
    }

    useEffect(() => {
        getPattcate();
    },[]);

    const dropToMove = () => {
        const dropMove = [];
        for(let i = 0; i < pattcate.length; i++) {
            dropMove.push(<Dropdown.Item onClick={() => {navigate(`/pattern/${pattcate[i].id}`)}}>{pattcate[i].category}</Dropdown.Item>);
        }
        return dropMove;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="patsubvisual">
                            <h1 className="visualsub">PATTERN</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="outlet">
                                        <div className="dropcontain">
                                            <DropdownButton id="dropdown-basic-button" title="Choose silhouette Here">
                                                {pattcate && dropToMove()}
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
 
export default PatternMain;