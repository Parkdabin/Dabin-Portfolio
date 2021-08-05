import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function AddProfile() {
    const header1Ref = useRef();
    const header2Ref = useRef();
    const contentRef = useRef();

    function onSubmit(){
        console.log(contentRef.current.value);
    }
    return (
        <div className="Container">
            <div className="Nav">
                <span>Resume</span>
                <Link to="/" className="link">뒤로가기</Link>
            </div>
            <div className="Content">
                <div className="Profile" style={{marginTop:70}}>
                    <div className="headerbox" style={{marginBottom:30}}>
                        <div className="header1">
                            <label> 제목 : </label>
                            <input type="text" ref={header1Ref}/>
                        </div>
                        <div className="header2">
                            <label> 부제목 : </label>
                            <input type="text" ref={header2Ref}/>
                        </div>
                    </div>
                    <div className="content">
                        <div> 내용</div>
                        <textarea rows="10" ref={contentRef}/>
                    </div>
                    <button onClick={onSubmit}> 저장 </button>
                </div>
            </div>
        </div>
    );
}

export default AddProfile;