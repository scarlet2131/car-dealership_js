import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, Table, Button } from "react-bootstrap";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/cars/${id}`);
        const data = await response.json();
        setCar(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <p>Loading car details...</p>;
  if (!car) return <p>Car not found!</p>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <Carousel>
            {car.images.map((image: string, index: number) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Car image ${index + 1}`}
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={4}>
          <h1>{`${car.make} ${car.model}`}</h1>
          <h4 className="text-muted">{`Year: ${car.year}`}</h4>
          <h5 className="text-primary">{`Price: $${car.price}`}</h5>
          <p><strong>Color:</strong> {car.color}</p>
          <p><strong>VIN:</strong> {car.vin}</p>
          <p><strong>Kilometers:</strong> {car.kms} kms</p>
          <Button variant="primary" className="mt-3">
            Contact Seller
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Additional Details</h3>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Make</td>
                <td>{car.make}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{car.model}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{car.year}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{car.color}</td>
              </tr>
              <tr>
                <td>VIN</td>
                <td>{car.vin}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>${car.price}</td>
              </tr>
              <tr>
                <td>Kilometers</td>
                <td>{car.kms} kms</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDetails;
