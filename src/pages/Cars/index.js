import React, { useEffect, useState } from 'react';
import { CarsHeader, CarCard } from '../../components/CarsPage';
import BeatLoader from '../../components/Loader';
import { useSearchContext } from '../../layout';

function Cars() {
  const [carsReq, setCarsReq] = useState({ cars: [], loading: true });
  const [selectTypeVal, setSelectTypeVal] = useState('');
  const searchTxt = useSearchContext();
  console.log(searchTxt);
  console.log(selectTypeVal);

  // fetch data with filter and search by car type
  useEffect(() => {
    fetch('https://6336d6a165d1e8ef26747ec9.mockapi.io/cars')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (searchTxt || selectTypeVal) {
          return setCarsReq({
            cars: data
              .filter((it) => it.name.toLowerCase().includes(searchTxt.toLowerCase()))
              .filter((ii) => ii.type.toLowerCase().includes(selectTypeVal.toLowerCase())),
            loading: false,
          });
        }

        return setCarsReq({ cars: data, loading: false });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectTypeVal, searchTxt]);
  if (carsReq.loading) return <BeatLoader />;

  return (
    <div className="flex flex-col sm:p-[30px] p-[15px]">
      <h1 className="md:text-3xl text-xl font-bold font-DMSans sm:mb-0 mb-2">
        Booking
      </h1>
      <CarsHeader
        setSelectTypeVal={setSelectTypeVal}
        selectTypeVal={selectTypeVal}
      />
      <div className="grid xl:grid-cols-3 pr-2  md:grid-cols-2 grid-cols-1 gap-6 overflow-y-auto h-[calc(100vh-280px)] sm:h-[calc(100vh-300px)]">
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
