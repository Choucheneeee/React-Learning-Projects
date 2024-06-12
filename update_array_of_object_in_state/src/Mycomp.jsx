import React, { useState } from "react";

function Mycomp() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  function handleAddCar() {
    const newCar = { Year: carYear, Make: carMake, Model: carModel };
    setCar((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleYearChange(event) {
    setCarYear((c) => event.target.value);
  }
  function handleRemoveCar(index) {
    setCar((c) => c.filter((_, i) => i !== index));
  }
  function handleMakeChange(event) {
    setCarMake((c) => event.target.value);
  }
  function handleModelChange(event) {
    setCarModel((c) => event.target.value);
  }
  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {car.map((cars, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {cars.Year} {cars.Make} {cars.Model}
          </li>
        ))}
      </ul>
      <input type="number" onChange={handleYearChange} value={carYear} />
      <br />
      <input
        type="text"
        onChange={handleMakeChange}
        value={carMake}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        onChange={handleModelChange}
        value={carModel}
        placeholder="Enter Car Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default Mycomp;
