import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Motiv } from '../../images/dashboard/motiv.svg';
import { ReactComponent as Replace } from '../../images/dashboard/replace.svg';
import { ReactComponent as Settings } from '../../images/dashboard/setting.svg';
import { ReactComponent as Energy } from '../../images/dashboard/energyIcon.svg';

function RecommendCard({
  car: {
    id, percent, image, carType, kilometresCount, pricePerHour,
  },
}) {
  return (
    <div
      className={`${
        id === '1'
          ? 'bg-[#E1DFA4]'
          : id === '2'
            ? 'bg-[#E3ECF1]'
            : 'bg-[#F4E3E5]'
      } flex flex-col items-start  px-[29px] py-[17px] rounded-[14px] `}
    >
      <div className="flex items-center">
        <Motiv className="mr-3" />
        <h1 className="text-base font-bold font-DMSans text-light-black">
          {`${percent}% Recommend`}
        </h1>
      </div>
      <img src={image} alt="car" className="w-64 h-[106px] self-center my-[11px]" />
      <h1 className="text-xl font-bold font-DMSans mb-[9px] text-dark-black">
        {carType}
      </h1>
      <div className="flex w-full justify-between items-center">
        <div className="flex w-[40%] items-center justify-between">
          <Replace />
          <p className="text-sm font-DMSans font-medium text-[#72767C]">
            {`${kilometresCount}K`}
          </p>
          <Settings />
          <Energy />
        </div>
        <p className="text-sm font-medium font-DMSans text-[#72767C]">
          {`$${pricePerHour}/h`}
        </p>
      </div>
    </div>
  );
}
RecommendCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default RecommendCard;
