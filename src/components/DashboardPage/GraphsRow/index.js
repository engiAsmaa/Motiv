import React from 'react';
import RadialChart from '../RadialChart';
import { charts } from '../../fakeData';

function GraphsRow() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[30px] gap-4 w-full min-h-[266px]">
      {charts.map((item, i) => (
        <div
          key={item.title}
          className={`flex flex-col items-center justify-center ${
            i === 0 ? 'bg-[#A162F7]' : 'bg-white'
          } rounded-[14px] py-[22px]`}
        >
          {item.icon}
          <h1
            className={`font-bold lg:text-2xl text-lg font-DMSans mt-[10px] ${
              i === 0 ? 'text-white' : 'text-black'
            }`}
          >
            {item.title}
          </h1>
          <RadialChart
            data={[
              {
                value: item.value,
              },
            ]}
            arcColor={item.arcColor}
            valueColor={item.valueColor}
            trackColor={item.trackColor}
          />
        </div>
      ))}
    </div>
  );
}

export default GraphsRow;
