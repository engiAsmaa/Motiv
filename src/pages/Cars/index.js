import React, { useEffect, useState } from 'react';
import { CarsHeader, CarCard } from '../../components/CarsPage';
import BeatLoader from '../../components/Loader';

function Cars() {
  const [carsReq, setCarsReq] = useState({ cars: [], loading: true });
  const [selectTypeVal, setSelectTypeVal] = useState('');
  // fetch data and filter by car type
  useEffect(() => {
    fetch('https://6336d6a165d1e8ef26747ec9.mockapi.io/cars')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (selectTypeVal) {
          return setCarsReq({
            cars: data.filter(
              (ii) => ii.type.toLowerCase() === selectTypeVal.toLowerCase(),
            ),
            loading: false,
          });
        }
        return setCarsReq({ cars: data, loading: false });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectTypeVal]);
  if (carsReq.loading) return <BeatLoader />;

  return (
    <div className="flex flex-col p-[30px]">
      <h1 className="md:text-3xl text-xl font-bold font-DMSans">Booking</h1>
      <CarsHeader
        setSelectTypeVal={setSelectTypeVal}
        selectTypeVal={selectTypeVal}
      />
      <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 overflow-y-auto h-[calc(100vh-300px)]">
        {carsReq.cars.length ? (
          carsReq.cars.map((car) => (
            <div>
              <CarCard key={car.id} car={car} />
            </div>
          ))
        ) : (
          <h1 className="text-dark-gray">No Cars Founded</h1>
        )}
      </div>
    </div>
  );
}

export default Cars;
