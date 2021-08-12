import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function AddProfile() {
    const history = useHistory();
    const header1Ref = useRef();
    const header2Ref = useRef();
    const contentRef = useRef();

    function onSubmit() {
        console.log(contentRef.current.value);
        axios.post("http://localhost:3001/Profile", {
            header1 : header1Ref.current.value,
            header2 : header2Ref.current.value,
            content : contentRef.current.value
        }).then(res => {
            if(res.statusText==='Created'){
                alert('생성이 완료되었습니다.');
                history.push('/');
            }
        }).catch(e =>{
            alert('권한이 없습니다.');
            history.push('/');
        })
    }
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Resume</span>
                    <Link to="/" className="link">뒤로가기</Link>
                </div>
                <div className="Content">
                    <div className="Profile" style={{ marginTop: 70 }}>
                        <div className="headerbox" style={{ marginBottom: 30 }}>
                            <div className="header1">
                                <label> 제목 : </label>
                                <input type="text" ref={header1Ref} />
                            </div>
                            <div className="header2">
                                <label> 부제목 : </label>
                                <input type="text" ref={header2Ref} />
                            </div>
                        </div>
                        <div className="content">
                            <div> 내용</div>
                            <textarea rows="10" ref={contentRef} />
                        </div>
                        <button onClick={onSubmit} className = "btn-profileadd"> 저장 </button>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default AddProfile;