import React from 'react';
import { Link } from 'react-router-dom';

function AddTodoList(){
    return(
        <div className="Container">
            <div className="Nav">
                <span>Todo List</span>
                <Link to="/" className="link"> 뒤로가기</Link>
            </div>
            <div className="Content">
                <form>
                    <div>
                        <label>할일</label>
                        <input type="text" placeholder="운동" />
                    </div>
                    <div>
                        <label>기한</label>
                        <input type="date" placeholder="2021-08-01" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTodoList;