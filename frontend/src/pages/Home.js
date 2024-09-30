import React from 'react';
import ReportPollution from '../components/pollution/ReportPollution';
import PollutionMap from '../components/pollution/PollutionMap';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Marine Pollution Reporting System</h2>
            <ReportPollution />
            <PollutionMap />
        </div>
    );
};

export default Home;
