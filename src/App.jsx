import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import CustomButton from "./components/CustomButton/CustomButton";
import Week from "./pages/Week/Week";

function App() {
  const [showDay, setShowDay] = useState("");
  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDay = (day) => {
    setShowDay(day);
  };

  return (
    <div className="vh-full">
      <Container>
        <Title />
        <Row className="d-flex flex-column">
          <Col>
            <CustomButton weekday={weekday} handleDay={handleDay} />
          </Col>
          <Col>
            <Week weekday={weekday} showDay={showDay} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
