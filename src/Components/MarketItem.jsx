import { useState } from "react";
import { Card, Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/mySlice";
import { decrementByAmount } from "../features/cardSlice";
import DetailsMarket from "./DetailsMarket";
import { toast } from "react-toastify";

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
  const dispatch = useDispatch();
  const cardslice = useSelector((state) => state.counter);
  const { myCards } = useSelector((state) => state.my);
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showControl, setShowControl] = useState(false);
  const handleCloseshowControl = () => setShowControl(false);
  const handleShowshowControl = () => setShowControl(true);

  const filter = myCards.find((item) => item.id == id);

  const handleAddClick = () => {
    if (cardslice.value >= price && !filter) {
      dispatch(decrementByAmount(price));
      handleClose();
      dispatch(
        addCard({
          id,
          photoUrl,
          price,
          cardType,
          name,
          position,
          team,
          attributes,
        })
      );
    } else if (filter) {
      toast.error("This player already has it in his basket");
      return handleClose();
    } else {
      handleShowshowControl();
      return handleClose();
    }
  };

  return (
    <>
      <DetailsMarket
        lgShow={lgShow}
        setLgShow={setLgShow}
        key={id}
        id={id}
        photoUrl={photoUrl}
        price={price}
        cardType={cardType}
        name={name}
        position={position}
        team={team}
        attributes={attributes}
      />
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
