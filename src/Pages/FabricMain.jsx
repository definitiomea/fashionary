import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const FabricMain = () => {
    const [fabcate, setFabcate] = useState(null);
    const navigate = useNavigate();

    const getFabcate = async () => {
        let url = `http://localhost:5000/fabric/`
        let response = await fetch(url);
        let data = await response.json();
        setFabcate(data);
    }

    useEffect(() => {
        getFabcate();
    },[])

    const dropToMove = () => {
        const dropMove = [];
        for(let i = 0; i < fabcate.length; i++) {
            dropMove.push(<Dropdown.Item onClick={() => {navigate(`/fabric/${fabcate[i].id}`)}}>{fabcate[i].category}</Dropdown.Item>);
        }
        return dropMove;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="fabsubvisual">
                            <h1 className="visualsub">FABRIC</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col lg={9} style={{margin: "0px auto"}}>
                                    <div className="outlet">
                                        <div className="dropcontain">
                                            <DropdownButton id="dropdown-basic-button" title="Choose Fabric Here">
                                                {fabcate && dropToMove()}
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
 
export default FabricMain;