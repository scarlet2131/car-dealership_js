import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddCar = () => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    kms: "",
    vin: "",
    price: "",
    images: "", // We'll input image URLs as a comma-separated string
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Split images string into an array
    const carData = {
      ...car,
      year: parseInt(car.year), // Convert to number
      kms: parseInt(car.kms),   // Convert to number
      price: parseFloat(car.price), // Convert to number
      images: car.images.split(",").map((url) => url.trim()), // Convert to array
    };

    try {
      const response = await fetch("http://localhost:5001/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      if (response.ok) {
        setMessage("Car added successfully!");
        setCar({
          make: "",
          model: "",
          year: "",
          color: "",
          kms: "",
          vin: "",
          price: "",
          images: "",
        }); // Reset form
      } else {
        setMessage("Failed to add car. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while adding the car.");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Add New Car</h1>
      {message && <p className="alert alert-info">{message}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCarMake" className="mb-3">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            name="make"
            placeholder="Enter car make"
            value={car.make}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarModel" className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            placeholder="Enter car model"
            value={car.model}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarYear" className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            name="year"
            placeholder="Enter car year"
            value={car.year}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarColor" className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            placeholder="Enter car color"
            value={car.color}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarKms" className="mb-3">
          <Form.Label>Kilometers</Form.Label>
          <Form.Control
            type="number"
            name="kms"
            placeholder="Enter car kilometers"
            value={car.kms}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarVin" className="mb-3">
          <Form.Label>VIN</Form.Label>
          <Form.Control
            type="text"
            name="vin"
            placeholder="Enter car VIN"
            value={car.vin}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarPrice" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter car price"
            value={car.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCarImages" className="mb-3">
          <Form.Label>Images</Form.Label>
          <Form.Control
            type="text"
            name="images"
            placeholder="Enter image URLs, separated by commas"
            value={car.images}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Car
        </Button>
      </Form>
    </Container>
  );
};

export default AddCar;
