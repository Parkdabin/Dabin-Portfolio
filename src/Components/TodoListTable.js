import axios from 'axios';
import React, { useState } from 'react'

function TodoList({list}) {
    const [lists, setLists] = useState(list);
    const [isDone, setIsDone] = useState(list.isDone);    
    function toggleDone(){
        axios.put(`http://localhost:3001/Todolist/${lists.id}`,{
            ...lists,
            isDone: !isDone
        }).then(res => {
            if(res.statusText==='OK'){
                setIsDone(!isDone);
            }
        }).catch(e => {
            alert('권한이 없습니다.');
        })
    }
    function delTodoList(){
        if(window.confirm('삭제 하시겠습니까?')){
            axios.delete(`http://localhost:3001/Todolist/${lists.id}`).then(res =>{
                if(res.statusText==='OK'){
                    alert("삭제가 완료되었습니다.");
                    setLists({id:0});
                }
            }).catch(e => {
                alert('권한이 없습니다.');
            })
        }
    }
    if(lists.id===0){
        return null;
    }
    return (
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone}/>
                </td>
                <td>{list.Todo}</td>
                <td>{list.deadline}</td>
                <td><button className="btn-del" onClick={delTodoList}>삭제</button></td>
            </tr>        
    );
}

export default TodoList;