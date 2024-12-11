import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Form, Container } from "react-bootstrap"; // Importing Bootstrap components
import { Link } from "react-router-dom";

const App = () => {
  const [vehicles, setVehicles] = useState<any>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      await fetch("http://localhost:5001/api/cars").then(async (res) => {
        const data = await res.json();
        setVehicles(data);
        setFilteredVehicles(data);
      });
    };

    fetchVehicles();
  }, []);

  // State to manage filters
  const [price, setPrice] = useState<number>(0);
  const [kms, setKms] = useState<number>(0);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleKmsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKms(Number(event.target.value));
  };

  const applyFilters = () => {
    let priceFiltered;
    let kmsFiltered;

    if (price > 0) {
      priceFiltered = vehicles.filter((car) => car.price <= price);
    }
    if (kms > 0) {
      kmsFiltered = priceFiltered.filter((car) => car.kms <= kms);
    } else {
      kmsFiltered = priceFiltered;
    }
    console.log("Filtered Vehicles:", kmsFiltered); // Debugging
    setFilteredVehicles(kmsFiltered);
  };

  return (
    <div>
      {/* Filter Section */}
      <Container className="mt-4">
        <Row>
          <Col>
            <Form.Group controlId="priceFilter">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter max price"
                value={price}
                onChange={handlePriceChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="kmsFilter">
              <Form.Label>Kilometers</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter max kilometers"
                value={kms}
                onChange={handleKmsChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              variant="primary"
              className="mt-4 w-100"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Cards Section */}
      <Container className="mt-5">
        <Row>
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((car: any, index: any) => (
              <Col sm={6} md={4} lg={3} key={car.id}>
                <Card
                  className="mb-4"
                  style={{
                    backgroundColor:
                      index % 4 === 0
                        ? "#f8d7da"
                        : index % 4 === 1
                        ? "#d1ecf1"
                        : index % 4 === 2
                        ? "#d4edda"
                        : "#fff3cd",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={car.images[0]}
                    alt={`Image of ${car.name}`}
                  />
                  <Card.Body>
                    <Card.Title>{car.make}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${car.price} | {car.kms}kms
                    </Card.Subtitle>
                    <Button variant="primary" as={Link} to={`/car/${car._id}`}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>No cars available</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default App;
