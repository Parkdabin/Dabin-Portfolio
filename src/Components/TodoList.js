import axios from 'axios';
import React, { useState } from 'react'

function TodoList({list}) {
    const [isDone, setIsDone] = useState(list.isDone);
    function toggleDone(){
        axios.put(`http://localhost:3001/Todolist/${list.id}`,{
            ...list,
            isDone: !isDone
        }).then(res => {
            if(res.statusText==='OK'){
                setIsDone(!isDone);
            }
        })
    }
    return (
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone}/>
                </td>
                <td>{list.Todo}</td>
                <td>{list.deadline}</td>
                <td><button className="btn-del">삭제</button></td>
            </tr>        
    );
}

export default TodoList;