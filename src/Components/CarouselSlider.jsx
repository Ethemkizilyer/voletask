import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
function CarouselSlider() {
  return (
    <div>
      <Carousel className="crsl" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 imgMain"
            src="img/Slider_Photo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Row>
              <Col>
                <h1 className="bronzeText">
                  NEW <br />
                  BRONZE CARDS
                </h1>
              </Col>
              <Col>
                {" "}
                <img
                  className="d-block  imgStick"
                  src="img/Bronze Cards.png"
                  alt="Second slide"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgMain"
            src="img/Slider_Photo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Row>
              <Col>
                <h1 className="bronzeText">
                  NEW <br />
                  SILVER CARDS
                </h1>
              </Col>
              <Col>
                {" "}
                <img
                  className="d-block  imgStick"
                  src="img/Silver.png"
                  alt="Second slide"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgMain"
            src="img/Slider_Photo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Row>
              <Col>
                <h1 className="bronzeText">
                  NEW <br />
                  GOLD CARDS
                </h1>
              </Col>
              <Col>
                {" "}
                <img
                  className="d-block  imgStick"
                  src="img/Gold.png"
                  alt="Second slide"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
