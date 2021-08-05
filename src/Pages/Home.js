import React from 'react';
import ProfileBlock from '../Components/ProfileBlock';
import data from '../db/data.json';
import { Link } from 'react-router-dom';

function Home() {
    const datas = data.Profile;
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Resume</span>
                    <Link to="/add_profile" className="link">추가하기</Link>
                </div>
                <div className="Content" style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <div className="overflow">
                        {datas.map(profile => (
                            <ProfileBlock
                                header1={profile.header1}
                                header2={profile.header2}
                                content={profile.content}
                                key={profile.id} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default Home;