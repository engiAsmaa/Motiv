import React, { useState, useEffect } from 'react';
import RecommendCard from '../RecommendCard';

// const bgColors = ['#E1DFA4', '#E3ECF1', '#F4E3E5'];
function RecommendRow() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://6336d6a165d1e8ef26747ec9.mockapi.io/Cars1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-[30px] w-full">
      {cars.map((car) => (
        <RecommendCard
          key={car.id}
          id={car.id}
          carType={car.carType}
          percent={car.percent}
          img={car.image}
          pricePerHour={car.pricePerHour}
          kilometresCount={car.kilometresCount}
          bgColor="bg-[#E1DFA4]"
        />
      ))}
    </div>
  );
}

export default RecommendRow;
