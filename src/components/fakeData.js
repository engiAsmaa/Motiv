import { ReactComponent as TireWear } from '../images/dashboard/tireWear.svg';
import { ReactComponent as Fluid } from '../images/dashboard/fluid.svg';
import { ReactComponent as Range } from '../images/dashboard/range.svg';
import { ReactComponent as Energy } from '../images/dashboard/energy.svg';
import badgetImg from '../images/dashboard/badget.png';
import pointsImg from '../images/dashboard/points.png';
// charts in dashboard
export const charts = [
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
// earnd cards data in dashboard
export const earnCards = [
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
// earnd filter options  in cars page

export const dateOptions = [
  {
    label: 'New',
    value: 'new',
  },
  {
    label: 'Old',
    value: 'old',
  },
];

export const typeOptions = [
  {
    label: 'Type',
    value: '',
  },
  {
    label: 'Toyota',
    value: 'toyota',
  },
  {
    label: 'Coupe',
    value: 'coupe',
  },
  {
    label: 'Sedan',
    value: 'sedan',
  },
  {
    label: 'Targa',
    value: 'targa',
  },
];
