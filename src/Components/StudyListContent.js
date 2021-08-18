import React from 'react';
import { useParams } from 'react-router';
import Data from '../db/data.json';
import { Link } from 'react-router-dom';
import StrReplace from 'react-string-replace';

function StudyListContent() {
    const { contentid } = useParams();
    const studylists = Data.StudyList;
    function isTitleContent(element) {
        if (element.id === Number(contentid)) {
            return true;
        }
    }
    const showTitleContent = studylists.find(isTitleContent);
    function recontent(){
        showTitleContent.content = StrReplace(showTitleContent.content, '\n', (match)=> (
            <br />
        ))
        return showTitleContent.content
    }
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Study Content</span>
                    <Link to="/study" className="link">뒤로가기</Link>
                </div>
                <div className="Content" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div className="studycontent">
                        <h1>{showTitleContent.title}</h1>
                        <span>{recontent()}</span>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default StudyListContent;