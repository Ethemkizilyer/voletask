import { useState, useEffect } from "react";
import { Accordion, Row, Col, ListGroup } from "react-bootstrap";
import { Box, Slider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getMarketAsync } from "../features/marketSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MarketItem from "./MarketItem";
import { getMyAsync } from "../features/mySlice";

function Market() {
  function valuetext(value) {
    return (
      <Row className="sldr">
        <Col className="text-left">&#x20AC; {value[0]}</Col>
        <Col style={{ textAlign: "right" }}> &#x20AC; {value[1]}</Col>
      </Row>
    );
  }
  const [value, setValue] = useState([0, 100]);
  const [query, setquery] = useState("");
  const [postn, setpostn] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.market);
  const { myCards } = useSelector((state) => state.my);

  const filtered = cards?.filter((item) => {
    return !myCards?.some((card) => item.id === card.id);
  });

  const counts = [];
  filtered?.forEach((x) => {
    counts[x.cardType] = (counts[x.cardType] || 0) + 1;
  });
  const countsPosition = [];
  filtered?.forEach((x) => {
    countsPosition[x.position] = (countsPosition[x.position] || 0) + 1;
  });

  const getCategories = (e) => {
    setquery(e.target.innerText);
    setSelectedCategory(e.target.innerText);

    e.target.innerText == selectedCategory
      ? setSelectedCategory("")
      : setSelectedCategory(e.target.innerText);
    e.target.innerText == query ? setquery("") : setquery(e.target.innerText);
  };
  const getPosition = (e) => {
    e.target.innerText == selectedPosition
      ? setSelectedPosition("")
      : setSelectedPosition(e.target.innerText);
    e.target.innerText == postn ? setpostn("") : setpostn(e.target.innerText);
  };
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(filtered.length / PER_PAGE);

  const handlePagination = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    dispatch(getMarketAsync());
    dispatch(getMyAsync());
  }, [dispatch]);

  return (
    <div>
      <section className="MycardBody" id="section-2">
        <Row>
          <Col xs={12} className="mycardHead">
            <div>MARKET</div>
          </Col>

          <Col className="mb-1 accordGrid" xs={12} sm={6} md={4} lg={3} xxl={2}>
            <div className="accord">
              <Accordion alwaysOpen flush className="accordinside">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Card Type</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listgrp" variant="flush">
                      <ListGroup.Item
                        variant={selectedCategory == "Gold" ? "danger" : ""}
                      >
                        <span onClick={(e) => getCategories(e)}>Gold</span>
                        <span> ({counts.Gold})</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant={selectedCategory == "Silver" ? "danger" : ""}
                      >
                        <span onClick={(e) => getCategories(e)}>Silver</span>
                        <span> ({counts.Silver})</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant={selectedCategory == "Bronze" ? "danger" : ""}
                      >
                        <span onClick={(e) => getCategories(e)}>Bronze</span>
                        <span> ({counts.Bronze})</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Position</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listgrp" variant="flush">
                      <ListGroup.Item
                        variant={
                          selectedPosition == "Goalkeeper" ? "danger" : ""
                        }
                        onClick={(e) => getPosition(e)}
                      >
                        <span>Goalkeeper</span>
                        <span> ({countsPosition.Goalkeeper})</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant={selectedPosition == "Defender" ? "danger" : ""}
                      >
                        <span onClick={getPosition}>Defender</span>
                        <span> ({countsPosition.Defender})</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant={
                          selectedPosition == "Midfielder" ? "danger" : ""
                        }
                      >
                        <span onClick={getPosition}>Midfielder</span>
                        <span> ({countsPosition.Midfielder})</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant={selectedPosition == "Forward" ? "danger" : ""}
                      >
                        <span onClick={getPosition}>Forward</span>
                        <span> ({countsPosition.Forward})</span>
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
          <Col className="mt-1 mb-1" xs={12} sm={6} md={8} lg={9} xxl={10}>
            <Row>
              {filtered
                .filter(
                  (item) =>
                    item.cardType.toLowerCase().includes(query.toLowerCase()) &&
                    item.position.toLowerCase().includes(postn.toLowerCase()) &&
                    item.price >= value[0] &&
                    item.price <= value[1]
                )
                .slice(page * PER_PAGE - PER_PAGE, page * PER_PAGE)

                .map((item) => (
                  <MarketItem
                    key={item.id}
                    id={item.id}
                    photoUrl={item.photoUrl}
                    price={item.price}
                    cardType={item.cardType}
                    name={item.name}
                    position={item.position}
                    team={item.team}
                    attributes={item.attributes}
                  />
                ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-3 text-center">
          <Col>
            <Stack spacing={2}>
              <Pagination
                count={count}
                page={page}
                onChange={handlePagination}
              />
            </Stack>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Market;
