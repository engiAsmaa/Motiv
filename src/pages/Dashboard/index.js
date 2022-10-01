import React from 'react';
import {
  EarnedRow,
  RecommendRow,
  GraphsRow,
} from '../../components/DashboardPage';

function Dashboard() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-[34px] py-[27px]">
      <div className="overflow-y-auto h-[calc(100vh-150px)] w-full">
        <GraphsRow />
        <EarnedRow />
        <RecommendRow />
      </div>
    </div>
  );
}

export default Dashboard;
