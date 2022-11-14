import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Sketch from "react-p5";

const PersonalMain = () => {
    let x = 50;
	let y = 50;

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
        console.log(p5._renderer._cachedFillStyle);
	};

    const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="persubvisual">
                            <h1 className="visualsub">PERSONAL COLOR</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col lg={9} style={{margin: "0px auto"}}>
                                    <div className="outlet">
                                        <div className="percanvas">
                                            <Sketch setup={setup} draw={draw} />
                                        </div>
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
 
export default PersonalMain;