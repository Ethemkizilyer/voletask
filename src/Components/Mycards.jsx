import { useState} from "react";
import { Accordion, Row, Col, ListGroup } from "react-bootstrap";
import { Box, Slider } from "@mui/material";

function Mycards() {
  function valuetext(value) {
    return (
      <Row className="sldr">
        <Col className="text-left">&#x20AC; {value[0]}</Col>
        <Col style={{ textAlign: "right" }}> &#x20AC;{value[1]}</Col>
      </Row>
    );
  }
  const [value, setValue] = useState([0, 100]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getCategories = (e) => {
    setquery(e.target.innerText);
  };
  const getPosition = (e) => {
    setpostn(e.target.innerText);
  };

  return (
    <div>
      <section className="MycardBody" id="section-1">
        <Row>
          <Col xs={12} className="mycardHead">
            <div>MY CARDS</div>
          </Col>
          <Col className="mb-1 accordGrid" xs={12} sm={6} md={4} lg={3} xxl={2}>
            <div className="accord">
              <Accordion alwaysOpen flush className="accordinside">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Card Type</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listgrp" variant="flush">
                      <ListGroup.Item>
                        <span onClick={getCategories}>Gold</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span onClick={getCategories}>Silver</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span onClick={getCategories}>Bronze</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Position</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listgrp" variant="flush">
                      <ListGroup.Item>
                        <span onClick={getPosition}>Goalkeeper</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span onClick={getPosition}>Defender</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span onClick={getPosition}>Midfielder</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span onClick={getPosition}>Forward</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <Box sx={{ width: 130 }}>
                      {valuetext(value)}
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Mycards;
