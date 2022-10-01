import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../Filter';
import { ReactComponent as Grid } from '../../images/cars/grid.svg';
import { ReactComponent as FilterIcon } from '../../images/cars/filter.svg';

const dateOptions = [
  {
    label: 'New',
    value: 'new',
  },
  {
    label: 'Old',
    value: 'old',
  },
];

const typeOptions = [
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
function CarsHeader({ setSelectTypeVal, selectTypeVal }) {
  return (
    <div className="flex w-full justify-between items-center py-[34px]">
      <div className="flex items-center">
        <Filter
          options={dateOptions}
          onChange={() => {}}
          className="mr-4 w-[122px]"
          date
        />
        <Filter
          options={typeOptions}
          onChange={(e) => setSelectTypeVal(e.target.value)}
          className="w-[143px]"
          selectTypeVal={selectTypeVal}
          setSelectTypeVal={setSelectTypeVal}
        />
      </div>
      <div className="flex items-center">
        <Grid className="mr-4" />
        <FilterIcon />
      </div>
    </div>
  );
}
CarsHeader.propTypes = {
  setSelectTypeVal: PropTypes.func.isRequired,
  selectTypeVal: PropTypes.string.isRequired,
};
export default CarsHeader;
