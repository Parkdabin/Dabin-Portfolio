import {Link} from 'react-router-dom';

function EmptyPage(){
    return(
        <div className="Container">
            <div className="Nav">

            </div>
            <div className="Content" style={{flexDirection:'column'}}>
                잘못된 접근입니다.
                <Link to="/" className="link" style={{border:0}}> 돌아가기</Link>
            </div>
        </div>
    );
}

export default EmptyPage;