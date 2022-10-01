import React from 'react';
import {
  EarnedRow,
  RecommendRow,
  GraphsRow,
} from '../../components/DashboardPage';

function Dashboard() {
  return (
    <div className="flex flex-col w-full justify-center items-center xl:px-[34px] md:px-6 px-[15px] xl:py-[27px] py-4">
      <div className="overflow-y-auto overflow-x-hidden pr-2 md:h-[calc(100vh-150px)] h-[calc(100vh-100px)] w-full">
        <GraphsRow />
        <EarnedRow />
        <RecommendRow />
      </div>
    </div>
  );
}

export default Dashboard;
