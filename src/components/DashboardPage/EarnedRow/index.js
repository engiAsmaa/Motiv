import React from 'react';
import compImg from '../../../images/dashboard/computer.png';
import EarnedCard from '../EarnedCard';
import { earnCards } from '../../fakeData';

function EarnedRow() {
  return (
    <div className="w-full justify-between lg:pt-[30px] sm:pt-5 pt-[15px] sm:pb-[30px] pb-[15px] lg:pb-[46px] grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4 lg:min-h-[222px] min-h-[155px]">
      <div className="flex bg-[#FFE0BA] md:py-[30px] py-4 lg:px-6  px-4 justify-between items-center  rounded">
        <div className="flex flex-col justify-center items-start ">
          <h1 className="xl:text-2xl text-lg font-bold font-Effra">
            Apply for a car loan !
          </h1>
          <p className="xl:text-base text-sm font-normal font-Effra">
            This is a sample of a generated text
          </p>
          <button
            type="button"
            className="hover:scale-110 hover:duration-200 bg-dark-green lg:py-3 lg:px-6 py-1 px-4 font-bold font-Effra lg:text-xs text-[10px] text-white mt-7 rounded"
          >
            Discover More
          </button>
        </div>

        <img
          src={compImg}
          alt="computer"
          className="lg:w-56 lg:h-[185px] w-40 h-28"
        />
      </div>

      <div className="grid grid-cols-2 md:gap-5 gap-4">
        {earnCards.map((card) => (
          <div>
            <EarnedCard key={card.type} card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EarnedRow;
