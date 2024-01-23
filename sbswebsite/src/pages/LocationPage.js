import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader';
import LocationComponent from '../components/LocationComponent';


const LocationPage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <LocationComponent/>
        </div>
    );
};

export default LocationPage