import React from 'react';
import RedComponent from '../../components/RedComponent';
import GreenComponent from '../../components/GreenComponent';
import BlueComponent from '../../components/BlueComponent';
import FadeSeparator from "../../components/app/FadeSeparator";
import FadeSeparatorBottom from '@/components/app/FadeSeparatorBottom';

const TestPage: React.FC = () => {
    return (
      <div style={{ backgroundColor: '#17171c' }}>
        <RedComponent />
        <FadeSeparator endColor='green' />
       
        <GreenComponent />
        <FadeSeparator endColor='green' flip/>
    
        <BlueComponent />
  
      </div>
    );
};

export default TestPage;
