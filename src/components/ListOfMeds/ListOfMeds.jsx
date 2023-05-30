import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ListOfMeds = ({ id, title, handleDelete, handleEdit }) => {
  const [newPillName, setNewPillName] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    handleEdit(id, newPillName);
    setNewPillName("");
    setIsEditing(false);
  };

  const editComponent = (
    <Container>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <Form onSubmit={handleSubmitEdit} className="d-flex align-items-center">
          <Form.Control
            type="text"
            value={newPillName}
            onChange={(e) => setNewPillName(e.target.value)}
            min={1}
            required
            style={{
              background: "transparent",
              border: "none",
            }}
          />
          <div>
            <div className="d-flex gap-2">
              <AiOutlineCheck
                onClick={() => {
                  handleEdit(id, newPillName);
                  setIsEditing(false);
                }}
                className="btn-icon"
              />
              <AiOutlineClose
                onClick={() => {
                  setNewPillName(title);
                  setIsEditing(false);
                }}
                className="btn-icon"
              />
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );

  const viewComponent = (
    <Container>
      <div className="mt-2 p-2 d-flex justify-content-between align-items-center">
        {title}
        <div className="d-flex gap-2">
          <AiOutlineEdit onClick={() => setIsEditing(true)} />
          <AiOutlineClose onClick={() => handleDelete(id)} />
        </div>
      </div>
    </Container>
  );

  return isEditing ? editComponent : viewComponent;
};

ListOfMeds.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default ListOfMeds;
