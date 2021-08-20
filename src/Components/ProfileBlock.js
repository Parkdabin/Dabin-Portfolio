import axios from 'axios';
import React, { useState } from 'react';

function ProfileBlock({ profile }) {
    const [profiles,setProfiles] = useState(profile);
    const StrReplace = require('react-string-replace');
    let txt = profile.content;

    function delProfile(e){
        e.preventDefault();
        if(window.confirm('삭제하시겠습니까?')){
            axios.delete(`http://localhost:3001/Profile/${profiles.id}`).then(res =>{
                if(res.statusText==='OK'){
                    alert('삭제가 완료되었습니다.');
                    setProfiles({id:0});
                }
            }).catch(e => {
                alert('권한이 없습니다.');
            });
        }
    }
    if(profiles.id===0){
        return null;
    }
    function recontent() {
        txt = StrReplace(profile.content, '\n', (match,i) => (
            <br key={i}/>
        ));
        return txt;
    }
    return (
        <div className="Profile">
            <div className="headerbox">
                <div className="header1">
                    {profile.header1}
                </div>
                <div className="header2">
                    {profile.header2}
                </div>
                <div className="btn-profiledel">
                    <button onClick={delProfile} className="btn-del">삭제</button>
                </div>
            </div>
            <div className="content"><span>{recontent()}</span></div>
        </div>
    );
}

export default ProfileBlock;