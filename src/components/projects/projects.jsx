
import { Card, Button, Row, Col, CardGroup } from "react-bootstrap"
import img from "./../../img/logo512.png"
import img1 from "./../../img/1.PNG"
import img2 from "./../../img/2.PNG"
import img3 from "./../../img/3.PNG"
import img4 from "./../../img/4.PNG"
import img5 from "./../../img/5.PNG"
import img6 from "./../../img/6.PNG"

import css from "../../App.css"


function Projects() {
    return (
        <>
            <div className="container p-5 text-center">

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>
                            Developing Weather Application using ReactJS S it will get user location and then show the weather according to the user's location and user can also search weather by the city name.
                        </Card.Text>
                        <a href="http://farazreact.surge.sh/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Food Delivery App</Card.Title>
                        <Card.Text>
                            I developed it by using core JavaScript,bootstrap & firebase integration,just like Food
                            Panda replica.It is helpful in ordering our desirable meals at our doorstep.
                        </Card.Text>
                        <a href="https://sharjeel125.github.io/Food-Delivery-App/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>TicTacToe game </Card.Title>
                        <Card.Text>
                            Created Tic Tac Toe using HTML, CSS, JavaScript, at the end of the game this application shows who is the winner or draw.
                        </Card.Text>
                        <a href="https://sharjeel125.github.io/Tic-Tac-Game/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>

            </div>


            <div className="container p-5 text-center ">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img5} />
                    <Card.Body>
                        <Card.Title>To-do App</Card.Title>
                        <Card.Text>
                            ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.
                        </Card.Text>
                        <a href="https://sharjeel125.github.io/To-do-App/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title>Quiz Application</Card.Title>
                        <Card.Text>
                            Created Quiz Application based on timer each question have it's own timing user will tick the answer and time will stop and the user can see he ticked the correct answer or not and then user will move forward. In the end of the Quiz user can see his total score
                        </Card.Text>
                        <a href="https://sharjeel125.github.io/Quiz-Application/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img6} />
                    <Card.Body>
                        <Card.Title>Stopwatch App</Card.Title>
                        <Card.Text>

                            A stopwatch is a handheld timepiece designed to measure the amount of time elapsed from a particular time when it is activated to the time when the piece is deactivated. ... Pressing the top button starts the timer running, and pressing the button a second time stops it, leaving the elapsed time displayed
                        </Card.Text>
                        <a href="https://sharjeel125.github.io/Stopwatch/"><Button variant="outline-primary"> Have a Look! </Button></a>
                    </Card.Body>

                </Card>




            </div>

        </>
    );
}

export default Projects;