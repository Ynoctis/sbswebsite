import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader'
import HistoryComponent from '../components/HistoryComponent';
import Footer from '../components/Footer';

const HistoryPage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <HistoryComponent/>
            <Footer/>
        </div>
    );
};

export default HistoryPage