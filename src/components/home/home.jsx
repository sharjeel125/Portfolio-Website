import { Card, CardColumns, Carousel } from "react-bootstrap";
import img1 from '../../img/alexandru-acea-XEB8y0nRRP4-unsplash.jpg'
import img2 from '../../img/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import img3 from '../../img/florian-olivo-4hbJ-eymZ1o-unsplash.jpg'
import img4 from "../../img/sherry.jpg"


function Home() {
    return (<>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<CardColumns>
            <div className="container   ">
                <Card bg="light" text="black" className="text-center m-4  "  >
                    <Card>
                        <Card.Img src={img4} id="pic" />
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
                
                    
                
            </div>

        </CardColumns>
        </>
    );
}

export default Home;