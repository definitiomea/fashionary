import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Sketch from "react-p5";

const PersonalMain = () => {
    let x = 50;
    let y = 50;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.background(255, 130, 20);
        p5.ellipse(x, y, 70, 70);
        x++;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <Container>
                            <div className="outlet">
                                <h1>PERSONAL COLOR MAIN HERE</h1>
                                <Sketch setup={setup} draw={draw} />
                            </div>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default PersonalMain;