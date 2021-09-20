
import { useState, useEffect, useRef } from "react"
import axios from 'axios';
import { Card, Button, CardColumns } from "react-bootstrap"
import img1 from "./../../img/sherry.jpg"
import img2 from "../../img/7.png"
import img3 from "./../../img/10.jpg"
import img4 from "./../../img/9.png"


function Contact() {


    return (<>
        <div className="center">
            <div className="container me-auto  ">
                <Card bg="light" text="black" className="text-center  p-5  "  >


                    <h1> Contact me via  </h1>

                    <p>
                        
                        <div className="container  text-center">

<Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
        <Card.Title>WhatsApp</Card.Title>
        <Card.Text>
            
        </Card.Text>
        <a href="https://wa.me/+923318932524"><Button variant="outline-primary"> Connect </Button></a>
    </Card.Body>

</Card>

<Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
        <Card.Title>Facebook</Card.Title>
        <Card.Text>
            
        </Card.Text>
        <a href="https://www.facebook.com/muhammad.abdulsharjeel"><Button variant="outline-primary"> Connect </Button></a>
    </Card.Body>

</Card>
<Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
        <Card.Title>LLinked In </Card.Title>
        <Card.Text>
           
        </Card.Text>
        <a href="https://www.linkedin.com/in/muhammad-sharjeel-7a540a1b7/"><Button variant="outline-primary"> Connect </Button></a>
    </Card.Body>

</Card>

</div>

                    </p>
                    <br />


                </Card>
            </div>
        </div>
    </>
    )
}
export default Contact;
