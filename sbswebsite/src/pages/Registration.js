import React from 'react'
import UserRegistrationForm from '../components/UserRegistrationForm';
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader'
import Footer from '../components/Footer';

const Registration = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <UserRegistrationForm/>
            <Footer/>
        </div>
    );
};

export default Registration