import React from 'react';
import { Link } from 'react-router-dom';
import TodoListTable from '../Components/TodoListTable';
import useGet from '../Hooks/useGet';
import data from '../db/data.json';

function TodoList() {
    const lists = data.Todolist;
    
    return (
        <div className="Container">
            <div className="Nav">
                <span>Todo List</span>
                <Link to="/todolist/add_todolist" className="link">추가하기</Link>
            </div>
            <div className="Content">
                <div className="overflow">
                    <table>
                        <tbody>
                            <tr>
                                <th>상태</th>
                                <th>할 일</th>
                                <th>기한</th>
                                <th></th>
                            </tr>
                            {lists.map(list => (
                                <TodoListTable list={list} key={list.id} />
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default TodoList;