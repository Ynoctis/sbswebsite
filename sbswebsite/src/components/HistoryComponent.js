import React from 'react';

const HistoryComponent = () => {

    const openParkAddress = () => {
        const parkLink = 'https://www.google.com/maps/place/Sunnybrook+Park+Sports+Fields/@43.7213163,-79.3619617,15z/data=!4m6!3m5!1s0x89d4cd17a92aad43:0x849aaebfc97ef9aa!8m2!3d43.7244446!4d-79.3553558!16s%2Fg%2F11df52dc89?authuser=0&entry=ttu'
        window.open(parkLink, '_blank')
    }

    return (
        <div style={{ borderWidth: 2, border: 'solid', borderColor: 'red' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
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
            <div style={{ paddingRight: '10vw', paddingLeft: '10vw', paddingTop: '5vh' }}>
                <h2 style={{ textDecoration: 'underline' }}>History</h2>
            </div>
            <div style={{ paddingRight: '10vw', paddingLeft: '10vw', }}>
                <h5>St Andrew Soccer Club was founded in 1973 and has operated consistently since then (except
                    for 2020) with most seasons in recent years being played at <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={openParkAddress}>Sunnybrook Park Sports Fields</span>.
                    At the annual meeting in November 2021 the unanimous decision was made to rename and
                    refresh the club with the changing of the name to Sunnybrook Soccer League. The original
                    name derived from the fact that the original members in 1973 were predominantly Scottish (St
                    Andrew being the patron saint of Scotland). This co-incidentally attracted many Greek members
                    (St Andrew being the patron saint of Patras in Greece). To reflect the changing demographic of
                    the Club (it now has players of a wide variety of heritage and faiths) the name change simplifies
                    the idea that we have many teams (it’s a league with 6-8 teams all part of the club) and that we
                    play at Sunnybrook Park (the club’s home for many years).</h5>
            </div>
        </div>

    );
};

export default HistoryComponent;