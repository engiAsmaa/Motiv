import React from 'react';
import RadialChart from '../RadialChart';
import { charts } from '../../fakeData';

function GraphsRow() {
  return (
    <div className="grid grid-cols-4 gap-[30px] w-full min-h-[266px] ">
      {charts.map((item, i) => (
        <div
          key={item.title}
          className={`flex flex-col items-center justify-center ${
            i === 0 ? 'bg-[#A162F7]' : 'bg-white'
          } rounded-[14px] `}
        >
          {item.icon}
          <h1
            className={`font-bold text-2xl font-DMSans mt-[10px] ${
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
