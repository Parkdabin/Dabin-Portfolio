import React from 'react';
import { Link } from 'react-router-dom';

function StudyList({ lists }) {
    return (
        <div className="studylist">
            <Link to={`/study/${lists.id}`} className="studycontentlink">
                <h1>{lists.title}</h1>
                <h3>{lists.date}</h3>
            </Link>
            <button className="btn-studylistdel"> 삭제</button>
        </div>

    );
}

export default StudyList;