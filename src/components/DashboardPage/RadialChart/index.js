import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

function RadialChart({
  data, arcColor, valueColor, trackColor, ...props
}) {
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -125,
        endAngle: 125,
        track: {
          startAngle: -125,
          endAngle: 125,
          background: trackColor,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            color: valueColor,
            fontSize: '24px',
            fontWeight: '700',
            offsetY: 5,
          },
        },
        chart: {
          type: 'radialBar',
        },
      },
    },

    colors: [arcColor],
    stroke: {
      lineCap: 'round',
    },
  };

  return !data ? null : (
    <div {...props}>
      <ReactApexChart
        style={{ width: '200px', minHeight: '200px' }}
        options={options}
        series={data?.map((g) => g.value || 0)}
        type="radialBar"
      />
    </div>
  );
}
RadialChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  arcColor: PropTypes.string.isRequired,
  valueColor: PropTypes.string.isRequired,
  trackColor: PropTypes.string.isRequired,
};

export default RadialChart;
