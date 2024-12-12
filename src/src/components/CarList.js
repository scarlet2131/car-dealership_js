import React, { useState, useEffect } from 'react';
import { fetchCars } from '../services/CarService'; // Import the car service

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCars = async () => {
            setLoading(true);
            const result = await fetchCars();
            setCars(result.data);
            setLoading(false);
        };
        loadCars();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.brand} {car.model} - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
