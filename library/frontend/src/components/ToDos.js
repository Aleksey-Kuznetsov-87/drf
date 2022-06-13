import React from 'react'

const ToDoItem = ({ToDo}) => {
    return (
        <tr>
            <td>
                {ToDo.username}
            </td>
            <td>
                {ToDo.firstname}
            </td>
            <td>
                {ToDo.lastname}
            </td>
            <td>
                {ToDo.email}
            </td>
        </tr>
    )
}

const ToDosList = ({ToDos}) => {
    return (
        <table>
            <th>
                username
            </th>
            <th>
                firstname
            </th>
            <th>
                lastname
            </th>
            <th>
                email
            </th>
            {ToDos.map((ToDo) => <ToDoItem ToDo={ToDo}/>)}
        </table>
    )
}

export default ToDosList