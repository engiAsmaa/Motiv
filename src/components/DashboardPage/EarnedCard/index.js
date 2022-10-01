import React from 'react';
import PropTypes from 'prop-types';

function EarnedCard({
  card: {
    bgColor, type, descrption, img, number, numColor,
  },
}) {
  return (
    <div className={`${bgColor} flex flex-col lg:py-[29px] py-4 lg:px-6 px-3 rounded `}>
      <div className="flex justify-between">
        <div className=" max-w-[76px]">
          <h1 className="xl:text-2xl sm:text-lg text-base font-bold font-Effra text-white">
            You have earned
          </h1>
          <p
            className={`xl:text-[40px] sm:text-3xl text-xl sm:leading-9 leading-5 font-Effra font-bold ${numColor}`}
          >
            {number}
          </p>
          <h1 className="lg:text-2xl sm:text-lg text-base font-bold font-Effra text-white">{type}</h1>
        </div>
        <img src={img} alt="vector" className="lg:w-[110px] lg:h-[110px] sm:w-16 sm:h-16 w-12 h-12" />
      </div>
      <p className={`sm:text-xs text-[10px] font-normal font-Effra ${numColor}`}>
        {descrption}
      </p>
    </div>
  );
}
EarnedCard.propTypes = {
  card: PropTypes.object.isRequired,
};
// EarnedCard.defaultProps = {
//   bgColor: "bg-dark-green",
//   numColor: "text-dark-orange",
// };
export default EarnedCard;
