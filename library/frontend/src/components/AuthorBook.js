import React from 'react'
import {useParams} from 'react-router-dom'


const AuthorBookItem = ({item}) => {
    return (
        <tr align="left">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.author.last_name} {item.author.first_name}</td>
        </tr>
    )
}

const AuthorBookList = ({items}) => {
    let {id} = useParams();
    let filtered_items = items.filter((item) => item.author.id == id)
    return (
        <table cellspacing="8">
            <tr align="left">
                <th>ID</th>
                <th>NAME</th>
                <th>AUTHOR</th>
            </tr>
            {filtered_items.map((item) => <AuthorBookItem item={item}/>)}
        </table>
    )
}

export default AuthorBookList