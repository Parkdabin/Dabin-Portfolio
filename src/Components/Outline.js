import React from 'react';

function Outline(){
    return(
        <div className="projoutline">
            <h1>프로젝트 개요</h1>
            <span>
                &nbsp;이 프로젝트는 Dart 언어를 사용하여 
                안드로이드 앱과 IOS 앱을 동시에 개발할 
                수 있는 크로스 플랫폼을 이용한 앱이다.<br />
                &nbsp;일상생활에서 필요했던 가계부를 주제로
                VS Code를 사용하여 개발하였다. <br />
                &nbsp;Login을 위해 <strong>Firebase Auth</strong>
                를 사용하였고 남은 잔액을 표시하기 위해
                <strong> Firebase DB</strong>를 사용하였다.<br />
                &nbsp;또한 수입내역과 지출내역을 보여주기 위해 
                <strong> SQL Lite</strong>를 사용하여 스마트폰 
                자체적으로 저장할 수 있도록 하였다. <br />
                공부 기간 : 2021-06-01 ~ 2021-06-10 <br />
                개발 기간 : 2021-06-11 ~ 2021-06-30 
            </span>
        </div>
    );
}

export default Outline;