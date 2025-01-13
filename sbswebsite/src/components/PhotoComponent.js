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
import Champ2024 from '../images/2024champion.webp';
import Conso2024 from '../images/2024consolation.webp';
import Champ2021 from '../images/2021champ.webp';
import Champ2020 from '../images/2020champ.webp';
import Champ2019 from '../images/2019champ.webp';
import Champ2018 from '../images/2018champ.webp';
import Champ2017 from '../images/2017champ.webp';
import Champ2016 from '../images/2016champ.webp';
import Champ2015 from '../images/2015champ.webp';
import Champ2014 from '../images/2014champ.webp';
import Champ2013 from '../images/2013champ.webp';
import Champ2012 from '../images/2012champ.webp';
import Champ2011 from '../images/2011champ.webp';
import Champ2010 from '../images/2010champ.webp';
import Champ2009 from '../images/2009champ.webp';
import Champ2008 from '../images/2008champ.webp';
import Champ2007 from '../images/2007champ.webp';
import Champ2006 from '../images/2006champ.webp';
import Champ2005 from '../images/2005champ.webp';
import Champ2004 from '../images/2004champ.webp';
import Champ2003 from '../images/2003champ.webp';
import Champ2002 from '../images/2002champ.webp';
import Champ2001 from '../images/2001champ.webp';
import Champ2000 from '../images/2000champ.webp';
import Champ1999 from '../images/1999champ.webp';
import Champ1998 from '../images/1998champ.webp';
import Champ1995 from '../images/1995champ.webp';
import Champ1994 from '../images/1994champ.webp';
import Champ1992 from '../images/1992champ.webp';
import Champ1991 from '../images/1991champ.webp';
import Champ1990 from '../images/1990champ.webp';
import Champ1989 from '../images/1989champ.webp';
import Champ1988 from '../images/1988champ.webp';
import Champ1987 from '../images/1987champ.webp';
import Champ1986 from '../images/1986champ.webp';
import Champ1985 from '../images/1985champ.webp';
import Champ1984 from '../images/1984champ.webp';
import Conso2021 from '../images/2021conso.webp';
import Conso2020 from '../images/2020conso.webp';
import Conso2019 from '../images/2019conso.webp';
import Conso2018 from '../images/2018conso.webp';
import Conso2017 from '../images/2017conso.webp';
import Conso2016 from '../images/2016conso.webp';
import Conso2015 from '../images/2015conso.webp';
import Conso2014 from '../images/2014conso.webp';
import Conso2013 from '../images/2013conso.webp';
import Conso2012 from '../images/2012conso.webp';
import Conso2011 from '../images/2011conso.webp';
import Conso2010 from '../images/2010conso.webp';
import Conso2009 from '../images/2009conso.webp';
import Conso2008 from '../images/2008conso.webp';
import Conso2006 from '../images/2006conso.webp';
import Conso2005 from '../images/2005conso.webp';
import Conso2004 from '../images/2004conso.webp';
import Conso2003 from '../images/2003conso.webp';
import Conso2002 from '../images/2002conso.webp';
import Conso2000 from '../images/2000conso.webp';
import Conso1998 from '../images/1998conso.webp';
import Conso1996 from '../images/1996conso.webp';
import Conso1982 from '../images/1982conso.webp';
import Conso1981 from '../images/1981conso.webp';
import Conso1978 from '../images/1978conso.webp';
import Conso1977 from '../images/1977conso.webp';
import Conso1976 from '../images/1976conso.webp';



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
                <div>
                    <h2 style={{ textAlign: 'center' }}>2024 Champions Cup Winners</h2>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img
                            src={Champ2024}
                            alt="champ2024"
                            style={{ maxWidth: '70%', height: 'auto' }}
                        />

                    </div>
                </div>
                <div>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>2024 Consolation Cup Winners</h2>
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={Conso2024}
                                alt="conso2024"
                            // style={{ maxWidth: '100%', height: 'auto' }}
                            />

                        </div>
                    </div>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Past Champions Cup Winners</h2>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2021}
                                alt="champ2021"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2020}
                                alt="champ2020"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2019}
                                alt="champ2019"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2018}
                                alt="champ2018"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2017}
                                alt="champ2017"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2016}
                                alt="champ2016"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2015}
                                alt="champ2015"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2014}
                                alt="champ2014"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2013}
                                alt="champ2013"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2012}
                                alt="champ2012"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2011}
                                alt="champ2011"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2010}
                                alt="champ2010"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2009}
                                alt="champ2009"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2008}
                                alt="champ2008"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2007}
                                alt="champ2007"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2006}
                                alt="champ2006"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2005}
                                alt="champ2005"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2004}
                                alt="champ2004"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2003}
                                alt="champ2003"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2002}
                                alt="champ2002"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ2001}
                                alt="champ2001"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ2000}
                                alt="champ2000"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1999}
                                alt="champ1999"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1998}
                                alt="champ1998"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1995}
                                alt="champ1995"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1994}
                                alt="champ1994"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1992}
                                alt="champ1992"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1991}
                                alt="champ1991"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1990}
                                alt="champ1990"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1989}
                                alt="champ1989"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1988}
                                alt="champ1988"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1987}
                                alt="champ1987"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Champ1986}
                                alt="champ1986"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Champ1985}
                                alt="champ1985"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={Champ1984}
                                alt="champ1984"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />

                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Past Consolation Cup Winners</h2>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2021}
                                alt="conso2021"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2020}
                                alt="conso2020"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2019}
                                alt="conso2019"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2018}
                                alt="conso2018"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2017}
                                alt="conso2017"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2016}
                                alt="conso2016"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2015}
                                alt="conso2015"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2014}
                                alt="conso2014"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2013}
                                alt="conso2013"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2012}
                                alt="conso2012"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2011}
                                alt="conso2011"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2010}
                                alt="conso2010"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2009}
                                alt="conso2009"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2008}
                                alt="conso2008"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2006}
                                alt="conso2006"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2005}
                                alt="conso2005"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2004}
                                alt="conso2004"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2003}
                                alt="conso2003"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso2002}
                                alt="conso2002"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso2000}
                                alt="conso2000"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso1998}
                                alt="conso1998"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso1996}
                                alt="conso1996"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso1982}
                                alt="conso1982"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso1981}
                                alt="conso1981"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img
                                src={Conso1978}
                                alt="conso1978"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <img
                                src={Conso1977}
                                alt="conso1977"
                                style={{ flex: 1, objectFit: 'contain', maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img
                            src={Conso1976}
                            alt="conso1976"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />

                    </div>
                </div>


                <div className='hideInMobile positionRelative'>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Additional</h2>
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