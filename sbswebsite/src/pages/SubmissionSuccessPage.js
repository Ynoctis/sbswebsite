import React from 'react'
import Header from '../components/Header';
// import HomeComponent from '../components/HomeComponent';
import SubmissionSuccessComponent from '../components/SubmissionSuccessComponent';
import LoggedHeader from '../components/LoggedHeader';
import Footer from '../components/Footer';


const SubmissionSuccessPage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            {/* <HomeComponent/> */}
            <SubmissionSuccessComponent />
            <Footer />
        </div>
    );
};

export default SubmissionSuccessPage