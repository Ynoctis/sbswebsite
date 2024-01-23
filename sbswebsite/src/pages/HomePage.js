import React from 'react'
import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import LoggedHeader from '../components/LoggedHeader';


const HomePage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <HomeComponent/>
        </div>
    );
};

export default HomePage