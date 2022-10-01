import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../Filter';
import { ReactComponent as Grid } from '../../../images/cars/grid.svg';
import { ReactComponent as FilterIcon } from '../../../images/cars/filter.svg';
import { dateOptions, typeOptions } from '../../fakeData';

function CarsHeader({ setSelectTypeVal, selectTypeVal }) {
  return (
    <div className="flex sm:flex-row flex-col  w-full justify-between sm:items-center items-start sm:py-[34px] sm:p-5 p-0">
      <div className="flex items-center sm:flex-row flex-col ">
        <Filter
          options={dateOptions}
          onChange={() => {}}
          className="sm:mr-4 mr-0 mb-2 sm:mb-0 sm:w-[122px] w-[143px]"
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
        <Grid className="mr-4 mt-2 sm:mt-0" />
        <FilterIcon className="sm:mb-1.5 mb-0" />
      </div>
    </div>
  );
}
CarsHeader.propTypes = {
  setSelectTypeVal: PropTypes.func.isRequired,
  selectTypeVal: PropTypes.string.isRequired,
};
export default CarsHeader;
