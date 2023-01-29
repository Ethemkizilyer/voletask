import { useState } from "react";
import { Card, Button, Col, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/mySlice";



function MyCardItem({
  id,
  photoUrl,
  price,
  cardType,
  name,
  position,
  team,
  attributes,
}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));

  };

  return (
    <>
     
      <Col
        className="mt-1 mb-1 gridCol"
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={3}
        xxl={2}
      >
        <Card>
          <Card.Img
            variant="top"
            onClick={() => setLgShow(true)}
            src={photoUrl}
          />
          <Card.Body>
            <span className="priceSell">&#x20AC; {price.toFixed(2)} </span>
            <Button onClick={handleShow} variant="outline-danger">
              Sell
            </Button>{" "}
          </Card.Body>
        </Card>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>
              Would you like to sell the card for
              <p className="modalPrice">&#x20AC; {price.toFixed(2)}</p>
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Row>
              <Button
                onClick={handleDeleteClick}
                className="modalbutton"
                variant="danger"
              >
                Sell
              </Button>
            </Row>
            <Row>
              <Button
                variant="danger"
                className="modalbuttonRefuse"
                onClick={handleClose}
              >
                Close
              </Button>
            </Row>
          </Modal.Footer>
        </Modal>
      </Col>
    </>
  );
}

export default MyCardItem;
