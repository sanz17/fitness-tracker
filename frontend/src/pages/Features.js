import React from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// const FeatureCard = ({ title, description, link }) => {
//   return (
//     <Card className="mb-4 text-center">
//       <Card.Body>
//         <Card.Title className="mt-3">{title}</Card.Title>
//         <Card.Img></Card.Img>
//         <Card.Text>{description}</Card.Text>
//         <Link to={link} className="btn btn-primary">
//           Learn More
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

const FeaturesPage = () => {

  return (
    <>
      {/* <Container className="mt-4">
        <h2 className="text-center mb-4">App Features</h2>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </Col>
          ))}
        </Row>
      </Container> */}
      <Row xs={1} md={2} className="g-4">
        <Col >
          <Card>
            <Card.Img variant="top" style={{'height':'283px','width':'459px','marginLeft':'110px'}} src="https://img.freepik.com/free-vector/people-keeping-healthy-diet_74855-5912.jpg" />
            <Card.Body>
              <Card.Title>Nutrition Checker</Card.Title>
              <Card.Text>
                With Nutrition Checker, you can quickly and easily see the nutritional value of any food, including calories, fat, protein, carbohydrates.
              </Card.Text>
              <Button variant="dark" className="mr-5" style={{'marginLeft':'250px'}} as={Link} to="/pages/nutrition-checker" >Check &nbsp; &nbsp; <ArrowRightCircle size={25} /></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" style={{'height':'283px','width':'315px','marginLeft':'170px'}} src="https://img.freepik.com/premium-vector/bmr-basal-metabolic-rate-acronym-vector-stock-illustration_100456-10491.jpg?w=2000" />
            <Card.Body>
              <Card.Title>BMR Calculator</Card.Title>
              <Card.Text>
                Calculate your Basal Metabolic Rate (BMR) to determine your daily calorie needs. Get insights into your metabolism.
              </Card.Text>
              <Button variant="dark" style={{'marginLeft':'250px'}} as={Link} to="/pages/bmr-calculator">Check &nbsp; &nbsp; <ArrowRightCircle size={25} /></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" style={{'height':'283px','width':'280px','marginLeft':'170px'}} src="https://static.vecteezy.com/system/resources/previews/010/051/927/original/meal-plan-icon-colorful-flat-design-illustration-graphics-free-vector.jpg" />
            <Card.Body>
              <Card.Title>Meal Planner</Card.Title>
              <Card.Text>
                The Meal Planner helps you to plan your fooding habit, is a great way to save time and money, and to eat healthier !
              </Card.Text>
              <Button variant="dark" style={{'marginLeft':'250px'}} as={Link} to="/pages/profile/meal-plan">Plan &nbsp; &nbsp; <ArrowRightCircle size={25} /></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" style={{'height':'283px','width':'459px','marginLeft':'110px'}} src="https://img.freepik.com/free-vector/tiny-woman-pouring-clean-water-from-faucet-with-mountain-landscape_74855-11024.jpg" />
            <Card.Body>
              <Card.Title>Water Intake Log</Card.Title>
              <Card.Text>
                This helps you track how much water you drink each day. You can enter the amount of water you drink each time you take a drink.
              </Card.Text>
              <Button variant="dark" style={{'marginLeft':'250px'}} as={Link} to="/pages/profile/water-intake">Check &nbsp; &nbsp; <ArrowRightCircle size={25} /></Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Footer />
    </>
  );
};

export default FeaturesPage;