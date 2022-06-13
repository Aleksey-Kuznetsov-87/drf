import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import UserList from "./components/User";
import axios from "axios";
// import MenuList from "./components/Menu";
// import FooterList from "./components/Footer";
import BookList from "./components/books";
import AuthorList from "./components/Author";
import {Route, Link, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import AuthorBookList from "./components/AuthorBook";
import ErrorLogo from './images/Bobby_Chiu.jpg';
import UserList from "./components/User";
import ProjectList from "./components/Projects";
import ToDosList from "./components/ToDos";


const NotFound404 = ({location}) => {
    return (
        <div>
            <div>
                <img src={ErrorLogo}
                     alt={'отчаяние'} width="450" height="300"></img>
            </div>
            <div>
                <h1>"Страница по адресу '{location.pathname}' не найдена"</h1>
            </div>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        const author1 = {id: 1, last_name: 'Александр', first_name: 'Грин', birthday_year: 1880}
        const author2 = {id: 2, last_name: 'Александр', first_name: 'Пушкин', birthday_year: 1799}
        const authors = [author1, author2]
        const book1 = {id: 1, name: 'Алые паруса', author: author1}
        const book2 = {id: 2, name: 'Золотая цепь', author: author1}
        const book3 = {id: 3, name: 'Пиковая дама', author: author2}
        const book4 = {id: 4, name: 'Руслан и Людмила', author: author2}
        const books = [book1, book2, book3, book4]
        this.state = {
            'authors': authors,
            'books': books,
            'users': [],
            'projects': [],
            'ToDos': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error));

        axios.get('http://127.0.0.1:8000/api/project/')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error));

         axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const ToDos = response.data
                this.setState(
                    {
                        'ToDos': ToDos
                    }
                )
            }).catch(error => console.log(error));
        }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         'authors': [],
    //         'users': [],
    //         'menus': [],
    //         'footers': [],
    //         'books': [],
    //     }
    // }

    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/authors/')
    //         .then(response => {
    //             const authors = response.data
    //             this.setState(
    //                 {
    //                     'authors': authors
    //                 }
    //             )
    //         }).catch(error => console.log(error));
    //
    //     axios.get('http://127.0.0.1:8000/api/users/')
    //         .then(response => {
    //             const users = response.data
    //             this.setState(
    //                 {
    //                     'users': users
    //                 }
    //             )
    //         }).catch(error => console.log(error));
    //
    //     axios.get('http://127.0.0.1:8000/api/footers/')
    //         .then(response => {
    //             const footers = response.data
    //             this.setState(
    //                 {
    //                     'footers': footers
    //                 }
    //             )
    //         }).catch(error => console.log(error));
    //
    //     axios.get('http://127.0.0.1:8000/api/menus/')
    //         .then(response => {
    //             const menus = response.data
    //             this.setState(
    //                 {
    //                     'menus': menus
    //                 }
    //             )
    //         }).catch(error => console.log(error));
    //
    //     axios.get('http://127.0.0.1:8000/api/books/')
    //         .then(response => {
    //             const books = response.data
    //             this.setState(
    //                 {
    //                     'books': books
    //                 }
    //             )
    //         }).catch(error => console.log(error));
    //
    // }


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Authors</Link>
                            </li>
                            <li>
                                <Link to='/books'>Books</Link>
                            </li>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/ToDos'>ToDos</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <AuthorList authors={this.state.authors}/>}/>
                        <Route exact path='/books' component={() => <BookList items={this.state.books}/>}/>
                        <Route exact path="/author/:id" component={() => <AuthorBookList items={this.state.books}/>}/>

                        <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/ToDos' component={() => <ToDosList ToDos={this.state.ToDos}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>

                        <Redirect from='/authors' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
