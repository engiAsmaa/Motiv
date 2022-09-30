import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Motiv } from '../../images/dashboard/motiv.svg';
import { ReactComponent as Replace } from '../../images/dashboard/replace.svg';
import { ReactComponent as Settings } from '../../images/dashboard/setting.svg';
import { ReactComponent as Energy } from '../../images/dashboard/energyIcon.svg';

function RecommendCard({
  id,
  carType,
  percent,
  img,
  pricePerHour,
  kilometresCount,
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
      <div className="flex items-center mb-[12.5px]">
        <Motiv className="mr-3" />
        <h1 className="text-base font-bold font-DMSans">
          {`${percent}% Recommend`}
        </h1>
      </div>
      <img src={img} alt="car" className="w-64 h-[106px] self-center" />
      <h1 className="text-xl font-bold font-DMSans my-[11px]">{carType}</h1>
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
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  pricePerHour: PropTypes.number.isRequired,
  kilometresCount: PropTypes.number.isRequired,
  carType: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default RecommendCard;
