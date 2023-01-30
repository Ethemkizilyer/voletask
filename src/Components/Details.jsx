import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../features/mySlice";
import { incrementByAmount } from "../features/cardSlice";
function Details({
  lgShow,
  setLgShow,
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
  const cardslice = useSelector((state) => state.counter);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteClick = () => {
    dispatch(deleteCard({ id }));
    dispatch(incrementByAmount(price));
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          className="modalFirstGrid"
          closeButton
          closeVariant="white"
        >
          <img className="detailImage" src={photoUrl} alt="" />
        </Modal.Header>
        <Modal.Body className="modalSecondGrid">
          <Row>
            <Col>
              {" "}
              <div className="modalSecondGridName ">{name}</div>
              <div>{position}</div>
            </Col>
            <Col>
              {" "}
              <div className="modalsell">
                <p>&#x20AC; {price.toFixed(2)}</p>
                <Button
                  onClick={handleShow}
                  variant="danger"
                  className="modalsellbtn"
                >
                  Sell
                </Button>{" "}
              </div>
            </Col>
          </Row>
          <Row className="modalThirdGrid mt-4">
            <h4>ATTRIBUTES</h4>

            {Object.entries(attributes).map(([key, value]) => (
              <Col key={key} xs={12} lg={4} xxl={2} className="attrBox">
                <p className="keyHead">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
                <p className="valuePoint">
                  {" "}
                  {value}
                  <span className="degree">/100</span>
                </p>
              </Col>
            ))}
          </Row>
          <Row className="mt-2 modalFourth">
            <Col xs={12} sm={6} className="modalFooter">
              <p className="keyHead">Team</p>
              <p className="valuePoint">{team} </p>
            </Col>
            <Col xs={12} sm={6} className="modalFooter">
              <p className="keyHead">Card Type</p>
              <p className="valuePoint">{cardType} </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
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
    </>
  );
}

export default Details;
