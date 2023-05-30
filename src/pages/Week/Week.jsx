import { Col, Row } from "react-bootstrap";
import DayOfWeek from "../../components/DayOfWeek/DayOfWeek";
import PropTypes from "prop-types";

const Week = ({ weekday, showDay }) => {
  const currentDay = weekday[new Date().getDay() - 1];

  // Vytvorte pole s vyfiltrovanými dňami
  const filteredDays = weekday.filter(
    (day) => showDay === "" || showDay === day
  );

  return (
    <Row>
      {/* Vykreslite vyfiltrované dni */}
      {filteredDays.map((day) => (
        <Col key={day} xs={12} sm={6} md={4}>
          <DayOfWeek
            key={day}
            title={day}
            currentDay={currentDay}
            show={showDay === "" || showDay === day}
          />
        </Col>
      ))}
    </Row>
  );
};

Week.propTypes = {
  weekday: PropTypes.arrayOf(PropTypes.string).isRequired,
  showDay: PropTypes.string.isRequired,
};

export default Week;
