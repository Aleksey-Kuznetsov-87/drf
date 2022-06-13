import React from 'react'

const BookItem = ({item}) => {
    return (
        <tr align="left">
            <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.author.first_name} {item.author.last_name}
            </td>
        </tr>
    )
}

const BookList = ({items}) => {
    return (
        <table cellSpacing="8">
            <th align="left">
                ID
            </th>
            <th align="left">
                Название книги
            </th>
            <th align="left">
                Имя автора
            </th>
            {items.map((item) => <BookItem item={item}/>)}
        </table>
    )
}

export default BookList