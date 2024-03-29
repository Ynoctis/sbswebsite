import React from 'react'
import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import LoggedHeader from '../components/LoggedHeader';
import Footer from '../components/Footer';


const HomePage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <HomeComponent/>
            <Footer />
        </div>
    );
};

export default HomePage