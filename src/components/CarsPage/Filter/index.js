import React from 'react';
import PropTypes from 'prop-types';

function Filter({
  options,
  onChange,
  className,
  date,
  selectTypeVal,
  setSelectTypeVal,
}) {
  return (
    <div className="flex items-center">
      <select
        className={`select h-9 pl-5 rounded-[22.5px] ${className} `}
        onChange={onChange}
      >
        {/* <option value="" disabled selected>Select your option</option> */}

        {options.map((op, i) => (
          <option
            disabled={i === 0}
            selected={i === 0 && !selectTypeVal}
            className="text-base font-medium font-Poppins"
          >
            {op.label}
          </option>
        ))}
      </select>
      {!date && selectTypeVal && (
        <button
          type="button"
          className="rounded-full p-2 bg-white ml-2"
          onClick={() => setSelectTypeVal('')}
        >
          <h1 className="text-black">X</h1>
        </button>
      )}
    </div>
  );
}
Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  date: PropTypes.bool,
  selectTypeVal: PropTypes.string.isRequired,
  setSelectTypeVal: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  className: '',
  date: false,
};
export default Filter;
