import React from 'react'
import {Link} from "react-router-dom";

const ToDoItem = ({ToDo, deleteTodo}) => {
    return (
        <tr>
            <td>
                {ToDo.update_at}
            </td>
            <td>
                {ToDo.created_by}
            </td><br></br>
            <td>
                {ToDo.text}
            </td>
            <td>
                <button onClick={()=>deleteTodo(ToDo.uid)} type={"button"}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

const ToDosList = ({ToDos, deleteTodo}) => {
    return (
        <div>
            <table>
                <th>
                    Дата создания
                </th>
                <th>
                    Имя создателя
                </th><br></br>
                <th>
                    Текст
                </th>
                {ToDos.map((ToDo) => <ToDoItem ToDo={ToDo} deleteTodo={deleteTodo}/>)}
            </table>
            <Link to='/ToDos/create'>Создать проект</Link>
    </div>
    )
}

export default ToDosList