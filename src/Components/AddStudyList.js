import React, { useRef } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

function AddStudyList() {
    const titleRef = useRef();
    const contentRef = useRef();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const history = useHistory();
    function onSave(){
        axios.post("http://localhost:3001/StudyList", {
            title: titleRef.current.value,
            date: year+'/'+ month + '/'+ day,
            content : contentRef.current.value
        }).then(res => {
            if(res.statusText==="Created"){
                alert("저장되었습니다.");
                history.push('/study');
            }
        }).catch(e => {
            alert("권한이 없습니다.");
            history.push('/study');
        })
    }
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Add List</span>
                    <Link to="/study" className="link"> 뒤로가기</Link>
                </div>
                <div className="Content" style={{flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                    <form className="addstudylist">
                        <label>제목</label>
                        <input type="text" ref={titleRef}/>
                        <label> 내용</label>
                        <textarea rows="15" ref={contentRef}/>
                    </form>
                    <button className="btn-save" onClick={onSave}>저장</button>
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default AddStudyList;