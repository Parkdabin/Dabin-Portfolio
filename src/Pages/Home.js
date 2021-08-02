import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../Components/TodoList';
import useGet from '../Hooks/useGet';

function Home() {

    const lists = useGet("http://localhost:3001/Todolist");
    return (
        <div className="Container">
            <div className="Nav">
                <span>Todo List</span>
                <Link to="/add_todolist" className="link">추가하기</Link>
            </div>
            <div className="Content">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>상태</th>
                                <th>할 일</th>
                                <th>기한</th>
                                <th></th>
                            </tr>
                            {lists.map(list => (
                                <TodoList list={list} key={list.id} />
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Home;