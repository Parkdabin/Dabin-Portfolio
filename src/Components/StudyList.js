import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function StudyList({ lists }) {
    const [list, setList] = useState(lists);
    function deleteList(e){
        e.preventDefault();
        if(window.confirm('삭제하시겠습니까?')){
            axios.delete(`http://localhost:3001/StudyList/${lists.id}`).then(res => {
                if(res.statusText==='OK'){
                    alert('삭제가 완료되었습니다.');
                    setList({id:0});
                }
            }).catch(e => {
                alert('권한이 없습니다.');
            })
            
        }
    }
    if(list.id===0){
        return null;
    }
    return (
        <div className="studylist">
            <Link to={`/study/studylist/${lists.id}`} className="studycontentlink">
                <h2>{lists.title}</h2>
                <h3>{lists.date}</h3>
            </Link>
            <button className="btn-studylistdel" onClick={deleteList}> 삭제</button>
        </div>

    );
}

export default StudyList;