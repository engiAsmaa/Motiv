import React from 'react';
import compImg from '../../images/dashboard/computer.png';
import EarnedCard from '../EarnedCard';
import badgetImg from '../../images/dashboard/badget.png';
import pointsImg from '../../images/dashboard/points.png';

const earnCards = [
  {
    bgColor: 'bg-dark-green',
    type: 'Badges!',
    number: 20,
    numColor: 'text-dark-orange',
    descrption: 'Hooray! Way to go Mohammed!',
    img: badgetImg,
  },
  {
    bgColor: 'bg-[#6E1946]',
    type: 'Points!',
    number: 1500,
    numColor: 'text-[#FAC39B]',
    descrption: 'Redeem and claim your rewards!',
    img: pointsImg,
  },
];
function EarnedRow() {
  return (
    <div className=" w-full justify-between pt-[30px] pb-[46px] grid grid-cols-2 gap-5">
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
            <EarnedCard
              bgColor={card.bgColor}
              type={card.type}
              number={card.number}
              numColor={card.numColor}
              description={card.descrption}
              img={card.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EarnedRow;
