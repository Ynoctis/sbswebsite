import React from 'react'
import Header from '../components/Header';
import LoggedHeader from '../components/LoggedHeader'
import Footer from '../components/Footer'
import PhotoComponent from '../components/PhotoComponent'

const PhotosPage = () => {

    const hasAccessToken = !!localStorage.getItem('access_token');

    return (
        <div>
            {hasAccessToken ? <LoggedHeader /> : <Header />}
            <PhotoComponent />
            <Footer />
        </div>
    );
};

export default PhotosPage