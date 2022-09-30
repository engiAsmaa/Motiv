import React from 'react';
import RadialChart from '../RadialChart';
import { ReactComponent as TireWear } from '../../images/dashboard/tireWear.svg';
import { ReactComponent as Fluid } from '../../images/dashboard/fluid.svg';
import { ReactComponent as Range } from '../../images/dashboard/range.svg';
import { ReactComponent as Energy } from '../../images/dashboard/energy.svg';

const charts = [
  {
    title: 'Energy',
    icon: <Energy />,
    value: '45',
    arcColor: '#FFF',
    valueColor: '#fff',
    trackColor: '#B37EFC',
  },
  {
    title: 'Range',
    icon: <Range />,
    value: '60',
    arcColor: '#FF7E86',
    valueColor: '#000',
    trackColor: '#F4F5F9',
  },
  {
    title: 'Break fluid',
    icon: <Fluid />,
    value: '9',
    arcColor: '#A162F7',
    valueColor: '#000',
    trackColor: '#F4F5F9',
  },
  {
    title: 'Tire Wear',
    icon: <TireWear />,
    value: '25',
    arcColor: '#F6CC0D',
    valueColor: '#000',
    trackColor: '#F4F5F9',
  },
];
function GraphsRow() {
  return (
    <div className="grid grid-cols-4 gap-[30px] w-full ">
      {charts.map((item, i) => (
        <div
          key={item.title}
          className={`flex flex-col items-center justify-center ${
            i === 0 ? 'bg-[#A162F7]' : 'bg-white'
          }  h-[266px] rounded-[14px] `}
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
