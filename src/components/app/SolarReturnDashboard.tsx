import React from 'react';
import { InflationProvider } from '../../context/InflationContext';
import SolarReturnChart from './SolarReturnChart';

const SolarReturnDashboard: React.FC = () => {
  return (
    <InflationProvider>
      <div>
        <SolarReturnChart />
      </div>
    </InflationProvider>
  );
};

export default SolarReturnDashboard;
