import React, { useState, useEffect } from 'react';
import RecommendCard from '../RecommendCard';
import BeatLoader from '../../Loader';

function RecommendRow() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://6336d6a165d1e8ef26747ec9.mockapi.io/Cars1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  if (loading) return <BeatLoader />;

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-4 w-full min-h-[236px]">
      {cars.length ? (
        cars.map((car) => <RecommendCard key={car.id} car={car} />)
      ) : (
        <h1 className="text-dark-gray">No Cars Founded</h1>
      )}
    </div>
  );
}

export default RecommendRow;
