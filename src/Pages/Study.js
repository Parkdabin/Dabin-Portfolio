import React from 'react';
import StudyList from '../Components/StudyList';
import Data from '../db/data.json';
import { Link } from 'react-router-dom';

function Study() {
    const studylist = Data.StudyList;
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Study List</span>
                    <Link to="/study/addstudylist" className="link"> 추가하기</Link>
                </div>
                <div className="Content" style={{flexDirection:'column', justifyContent:'flex-start', alignItems:'center', overflow:'auto'}}>
                    {studylist.map(lists => (
                        <StudyList lists= {lists} key={lists.id}></StudyList>

                    ))}
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default Study;