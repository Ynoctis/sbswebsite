import React from 'react';
import Image1 from '../images/p1.webp';
import Image2 from '../images/p2.webp';
import Image3 from '../images/p3.webp';
import Image3M from '../images/p3mobile.webp';
import Image4 from '../images/p4.webp';
import Image5 from '../images/p5.webp';
import Image6 from '../images/p6.webp';
import Image7 from '../images/p7.webp';
import Image8 from '../images/p8.webp';
import Image9 from '../images/p9.webp';
import Image10 from '../images/p10.webp';
import Image11 from '../images/p11.webp';
import Image12 from '../images/p12.webp';
import Image13 from '../images/p13.webp';
import Image14 from '../images/p14.webp';
import Image15 from '../images/p15.webp';
import Image16 from '../images/p16.webp';
import './PhotoComponent.css'


const PhotoComponent = () => {

    return (
        <div>
            <div className='overflowHidden'>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Sunnybrook Soccer league</h1>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2>Established 1973</h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2>(Formerly St. Andrew Soccer Club)</h2>
                    </div>
                </div>
                <div className='hideInMobile positionRelative'>
                    <div >
                        <img
                            src={Image1}
                            alt="p1"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image2}
                            alt="p2"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image3}
                            alt="p3"
                            style={{ flex: 1, objectFit: 'cover' }}
                        />
                        <img
                            src={Image4}
                            alt="p4"
                            style={{ flex: 1, objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image5}
                            alt="p5"
                            style={{ maxWidth: '40%', height: 'auto' }}
                        />
                        <img
                            src={Image6}
                            alt="p6"
                            style={{ flex: 1, objectFit: 'contain', maxWidth: '60%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={Image7}
                            alt="p7"
                        />
                        <img
                            src={Image8}
                            alt="p8"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <img
                            src={Image9}
                            alt="p9"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image10}
                            alt="p10"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <img
                            src={Image11}
                            alt="p11"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image12}
                            alt="p12"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image13}
                            alt="p13"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                        <img
                            src={Image14}
                            alt="p14"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image15}
                            alt="p15"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image16}
                            alt="p16"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                    </div>
                </div>

            </div>
            <div className='hideInDesktop'>
                <img
                    src={Image1}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image2}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image3M}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image4}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image5}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image6}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image7}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image8}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image9}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image10}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image11}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image12}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image13}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image14}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image15}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image16}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>


        // mobile layout

    );
};

export default PhotoComponent;