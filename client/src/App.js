import React, { useState, useEffect } from 'react';
import './App.css';
import CarModel from './components/CarModel';
function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('/api/cars')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);
  return (
    <div className="App">
      <h1>Old Sports Cars</h1>
      {cars.map(car => (
        <CarModel key={car.id} car={car} />
      ))}
    </div>
  );
}
export default App;