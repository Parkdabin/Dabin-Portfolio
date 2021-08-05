import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function AddTodoList() {
    const [isLoading, setIsLoading] = useState(false);
    const todoRef = useRef(null);
    const dateRef = useRef(null);
    const history = useHistory();
    function onSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        if (!isLoading) {
            axios.post("http://localhost:3001/Todolist", {
                Todo: todoRef.current.value,
                deadline: dateRef.current.value,
                isDone: false
            }).then(res => {
                if (res.statusText === 'Created') {
                    alert('생성이 완료되었습니다.');
                    history.push('/todolist');
                    setIsLoading(false);
                }
            }).catch(e => {
                alert('권한이 없습니다.');
                history.push('/todolist');
            })
        }

    }
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>Todo List</span>
                    <Link to="/todolist" className="link"> 뒤로가기</Link>
                </div>
                <div className="Content">
                    <form>
                        <h1 style={{ color: 'khaki' }}>List 추가</h1>
                        <div className="input-area">
                            <label>할 일</label>
                            <input type="text" placeholder="운동" ref={todoRef} />
                        </div>
                        <div className="input-area">
                            <label>기한</label>
                            <input type="date" ref={dateRef} />
                        </div>
                        <div>
                            <button
                                className="btn-add"
                                onClick={onSubmit}
                                style={{ opacity: isLoading ? 0.3 : 1 }}>
                                {isLoading ? "저장중." : "추가하기"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default AddTodoList;