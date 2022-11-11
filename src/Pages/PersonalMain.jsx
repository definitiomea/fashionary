import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Sketch from "react-p5";

const PersonalMain = () => {
    let x = 50;
    let y = 50;

    let backgroundImg;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.loadImage("../Sources/Img/192x192.png", img => {
            p5.image(img, 0, 0);
            p5.redraw();
        });
    }

    const draw = (p5) => {
        p5.background("transparent", "transparent", "transparent");
        p5.ellipse(x, y, 70, 70);
        x++;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="persubvisual">
                            <h1 className="visualsub">PERSONAL COLOR</h1>
                        </div>
                        <Container>
                            <div className="outlet">
                                <div className="percanvas">
                                    <Sketch setup={setup} draw={draw} />
                                </div>
                            </div>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default PersonalMain;