import React from 'react'

const BookItem = ({book}) => {
    return (
        <tr align="left">
            <td>
                {book.uid}
            </td>
            <td>
                {book.name}
            </td>
            <td>
                {book.authors.first_name}
            </td>
        </tr>
    )
}

const BookList = ({books}) => {
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
            {books.map((book) => <BookItem book={book}/>)}
        </table>
    )
}

export default BookList