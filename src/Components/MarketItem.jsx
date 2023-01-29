import { useState } from "react";
import { Card, Button, Col, Modal, Row } from "react-bootstrap";

function MarketItem({
  id,
  photoUrl,
  price,
  cardType,
  name,
  position,
  team,
  attributes,
}) {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showControl, setShowControl] = useState(false);
  const handleCloseshowControl = () => setShowControl(false);
 
  const handleAddClick = () => {
    console.log("bekle");
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
            src={photoUrl}
            onClick={() => setLgShow(true)}
          />
          <Card.Body>
            <span className="priceSell">&#x20AC; {price.toFixed(2)} </span>
            <Button onClick={handleShow} variant="outline-danger">
              Buy
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            Would you like to buy the card for
            <p className="modalPrice">&#x20AC; {price.toFixed(2)}</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Row>
            <Button
              onClick={handleAddClick}
              className="modalbutton"
              variant="danger"
            >
              Buy
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

      <Modal
        show={showControl}
        onHide={handleCloseshowControl}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            You dont have enough money
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Row>
            <Button
              variant="danger"
              className="modalbutton"
              onClick={handleCloseshowControl}
            >
              Back
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MarketItem;
