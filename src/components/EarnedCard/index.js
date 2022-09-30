import React from 'react';
import PropTypes from 'prop-types';

function EarnedCard({
  bgColor, type, description, img, number, numColor,
}) {
  return (
    <div className={`${bgColor} flex flex-col py-[29px] px-6 rounded `}>
      <div className="flex justify-between">
        <div className=" max-w-[76px]">
          <h1 className="text-2xl font-bold font-Effra text-white">
            You have earned
          </h1>
          <p className={`text-[40px] leading-9 font-Effra font-bold ${numColor}`}>
            {number}
          </p>
          <h1 className="text-2xl font-bold font-Effra text-white">{type}</h1>
        </div>
        <img src={img} alt="vector" className="w-[110px] h-[110px]" />
      </div>
      <p className={`text-xs font-normal font-Effra ${numColor}`}>
        {description}
      </p>
    </div>
  );
}
EarnedCard.propTypes = {
  bgColor: PropTypes.string,
  numColor: PropTypes.string,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
EarnedCard.defaultProps = {
  bgColor: 'bg-dark-green',
  numColor: 'text-dark-orange',
};
export default EarnedCard;
