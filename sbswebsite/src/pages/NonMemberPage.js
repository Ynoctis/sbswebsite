import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader';
import NonMemberList from '../components/NonMemberList';
import JsonToCsvNM from '../components/jsonToCsv';

const Registration = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <NonMemberList/>
            <JsonToCsvNM/>
        </div>
    );
};

export default Registration