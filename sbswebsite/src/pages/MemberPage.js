import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader';
import MemberList from '../components/MemberList';
import JsonToCsv from '../components/jsonToCsv';

const Registration = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <MemberList/>
            <JsonToCsv/>
        </div>
    );
};

export default Registration