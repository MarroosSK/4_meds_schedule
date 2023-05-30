import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useHover } from "../../hooks/useHover";
import ListOfMeds from "../ListOfMeds/ListOfMeds";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

const DayOfWeek = ({ currentDay, title, show }) => {
  //useHover
  const { isHover, handleMouseHover, handleMouseStopHover } = useHover();

  const [dayData, setDayData] = useState(
    JSON.parse(localStorage.getItem(title.toLowerCase())) || []
  );
  const [record, setRecord] = useState({
    id: uuid(),
    title: "",
    isDone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDayData([...dayData, { ...record, id: uuid() }]);
    setRecord({ id: "", title: "" });
  };

  const handleEdit = (id, newPill) => {
    const newPillRecord = dayData.map((pill) => {
      if (id === pill.id) {
        return { ...pill, title: newPill };
      }
      return pill;
    });
    setDayData(newPillRecord);
  };

  const handleDelete = (id) => {
    setDayData(dayData.filter((url) => url.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(title.toLowerCase(), JSON.stringify(dayData));
  }, [dayData, title]);

  return (
    <Container>
      {show && (
        <div
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseStopHover}
          className={`mt-2 p-3 border bg-secondary day_box`}
          style={{ height: "17rem" }}
        >
          <div className="d-flex flex-column">
            <h6
              style={{ fontSize: "1.2rem" }}
              className={currentDay === title ? "green" : ""}
            >
              {title}
            </h6>
            <Form onSubmit={handleSubmit}>
              <InputGroup className=" mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="add new..."
                  value={record.title}
                  onChange={(e) =>
                    setRecord({ ...record, title: e.target.value })
                  }
                  required
                  className="bg-dark text-white"
                />
                <Button type="submit" className="btn-sm btn-light text-white">
                  <GrAdd size={25} />
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "140px",
              overflowX: "hidden",
            }}
          >
            {dayData.map((pill) => (
              <div key={pill.id}>
                <ListOfMeds
                  id={pill.id}
                  title={pill.title}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </div>
            ))}
          </div>
          {isHover && dayData.length !== 0 && (
            <AiOutlineDelete onClick={() => setDayData([])} size={25} />
          )}
        </div>
      )}
    </Container>
  );
};

DayOfWeek.propTypes = {
  currentDay: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default DayOfWeek;
