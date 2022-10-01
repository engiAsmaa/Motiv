import React from 'react';
import compImg from '../../images/dashboard/computer.png';
import EarnedCard from '../EarnedCard';
import { earnCards } from '../fakeData';

function EarnedRow() {
  return (
    <div className=" w-full justify-between pt-[30px] pb-[46px] grid grid-cols-2 gap-5 min-h-[222px]">
      <div className="flex bg-[#FFE0BA] px-6  justify-between items-center  rounded">
        <div className="flex flex-col justify-center items-start ">
          <h1 className="text-2xl font-bold font-Effra">
            Apply for a car loan !
          </h1>
          <p className="text-base font-normal font-Effra">
            This is a sample of a generated text
          </p>
          <button
            type="button"
            className="bg-dark-green py-3 px-6 font-bold font-Effra text-xs text-white mt-7"
          >
            Discover More
          </button>
        </div>

        <img src={compImg} alt="computer" className="w-56 h-[185px]" />
      </div>

      <div className="grid grid-cols-2 gap-5">
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
