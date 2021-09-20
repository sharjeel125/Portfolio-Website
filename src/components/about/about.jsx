
import { Card, Button, CardColumns } from "react-bootstrap"
import img from "./../../img/logo512.png"
import css from "../../App.css"
import img1 from "./../../img/sherry.jpg"
import img2 from "./../../img/Capture.PNG"




function About() {
    return (
        <CardColumns>
            <div className="container   ">
                <Card bg="light" text="black" className="text-center m-4  "  >
                    <Card>
                        <Card.Img src={img1} id="pic" />
                    </Card>
                    <blockquote className="blockquote mb-0 card-body p-4">
                        <h1 > Eduacation </h1>
                        <p>
                            <br />

                            I am a BSc graduated Full Stack Engineer from Pakistan and working in the industry for around   9 months. I love to work and have proficiency in JavaScript but am open to exploring other technologies also. In the industry, I have worked with several Laravel and lumen projects where the frontends are powered by React. Additionally, I like to contribute to the open source community and have 5 published libraries in npm and composer. As a tech enthusiast, I have always wanted to become a Software Engineer to learn and contribute to technology. And I have always believed that I need to do what I love. I love solving problems, making something great, making something meaningful.
                        </p>
                        <br />
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Muhammad <cite title="Source Title p-5">Sharjeel</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                
                    
                <Card className= "p-4">
                        <h1 id="skill"> Skills </h1>
                        <br/>
                       
                
                        <Card.Img src={img2} id="pic" />
                    </Card>
            </div>

        </CardColumns>
    );
}

export default About;