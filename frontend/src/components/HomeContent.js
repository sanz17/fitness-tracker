import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button,Carousel } from "react-bootstrap";
import Start from "../assets/images/start.jpg"
import Track from "../assets/images/track.jpg"
import Login from "../assets/images/login.jpg"
import Positive from "../assets/images/positive.jpg"

const HomeContent = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1>Guides for You</h1>
          <p style={{'fontSize':'20px'}}>
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to get there.
          </p>
        </Col>
      </Row>

      <Row data-bs-theme="dark">
        <Carousel >
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-50"
              src={Track}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3 style={{'paddingLeft':'403px'}}>Track Learn Improve</h3>
              <p style={{'paddingLeft':'435px'}}>Keeping a food diary helps you understand your habits and to hit your goals.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={Login}
              alt="Second slide"
              style={{
                'height':'429px',
                'paddingLeft':'510px',
                'paddingRight':'288px'
              }}
            />
            <Carousel.Caption>
              <h3 style={{'paddingRight':'480px'}}>Logging simplified</h3>
              <p style={{'paddingRight':'495px'}}>Save meals and use Quick Tools for fast and easy food tracking.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Positive}
              alt="Third slide"
              style={{
                'height':'429px',
                'paddingLeft':'510px',
                'paddingRight':'288px'
              }}
            />
            <Carousel.Caption>
              <h3 style={{'paddingRight':'500px'}}>Stay optimistic</h3>
              <p style={{'paddingRight':'541px'}}>
              Join the World's Largest Fitness Community for advice, tips, and support 24/7.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row className="align-items-center">
        <Col md={6}>
          <h1>Start your fitness journey today!</h1>
          <p>
            Sign up for Shape Up and get started on your path to a healthier
            lifestyle.
          </p>
          <Button
            variant="dark"
            className="me-2"
            as={Link}
            to="/pages/register"
          >
            Register
          </Button>
          <Button variant="outline-dark" as={Link} to="/pages/login">
            Login
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={Start}
            alt="Banner"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
