import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader'

const PhotosPage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <h2>Under Construction</h2>
        </div>
    );
};

export default PhotosPage