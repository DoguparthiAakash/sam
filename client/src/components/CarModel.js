import React from 'react';
import './CarModel.css';
import VRView from 'web-vr-view';
const CarModel = ({ car }) => {
  return (
    <div className="car-model">
      <h2>{car.name}</h2>
      <VRView
        src={`/models/${car.model}.glb`}
        width="400px"
        height="300px"
      />
    </div>
  );
};
export default CarModel;