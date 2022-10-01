import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Like } from '../../../images/cars/like.svg';
import { ReactComponent as Replace } from '../../../images/cars/replace.svg';
import { ReactComponent as User } from '../../../images/cars/user.svg';

function CarCard({
  car: {
    name, viewerCount, type, image, price, drivingType, like,
  },
}) {
  return (
    <div className="flex flex-col items-center  sm:p-6 p-3 rounded-2xl bg-white min-h-[267px]">
      <div className="flex w-full justify-between">
        <h1 className="sm:text-lg text-base font-bold font-DMSans text-light-black">
          {name}
        </h1>
        <Like
          className={`${like ? 'fill-[#F84F56]' : 'stroke-[#A4A5A6]'} mr-3 `}
        />
      </div>
      <h1 className="self-start sm:text-base text-sm font-normal font-DMSans mt-[5px] text-[#72767C]">
        {type}
      </h1>

      <img
        src={image}
        alt="car"
        className="w-[233px] h-[105px] sm:my-[21px] my-4"
      />

      <div className="flex w-full justify-between items-center">
        <div className="flex w-[40%] items-center justify-between">
          <div className="flex sm:flex-row flex-col items-center sm:mr-5 mr-2">
            <User className="sm:mr-[6px]" />
            <p className="font-DMSans sm:text-lg text-base font-normal text-[#72767C]">
              {viewerCount}
            </p>
          </div>
          <div className="flex items-center sm:flex-row flex-col">
            <Replace className="sm:mr-[7px]" />
            <p className="font-DMSans sm:text-base text-sm font-normal text-[#72767C]">
              {drivingType}
            </p>
          </div>
        </div>
        <p className="sm:text-lg text-sm font-medium font-DMSans text-light-black">
          {`$${price}`}
          <span className="text-[#72767C]">/d</span>
        </p>
      </div>
    </div>
  );
}
CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;
