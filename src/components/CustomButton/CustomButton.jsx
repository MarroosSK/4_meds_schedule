import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const CustomButton = ({ weekday, handleDay }) => {
  return (
    <>
      <Button
        onClick={() => handleDay("")}
        className="btn-sm btn-secondary m-1 btn_clicked"
      >
        All
      </Button>
      {weekday.map((day) => (
        <Button
          key={day}
          onClick={() => handleDay(day)}
          className="btn-sm btn-secondary m-1 btn_clicked"
        >
          {day}
        </Button>
      ))}
    </>
  );
};

CustomButton.propTypes = {
  weekday: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDay: PropTypes.func.isRequired,
};

export default CustomButton;
