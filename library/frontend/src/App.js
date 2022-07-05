import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import UserList from "./components/User";
import axios from "axios";
// import MenuList from "./components/Menu";
// import FooterList from "./components/Footer";
import AuthorList from "./components/Author";
import {Route, Link, Switch, Redirect, BrowserRouter} from 'react-router-dom';
// import AuthorBookList from "./components/AuthorBook";
import ErrorLogo from './images/Bobby_Chiu.jpg';
import UserList from "./components/User";
import ProjectList from "./components/Projects";
import ToDosList from "./components/ToDos";
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';
import BookList from "./components/books";
import AuthorBookList from "./components/AuthorBook";


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
        this.state = {
            'authors': [],
            'books': [],
            'users': [],
            'projects': [],
            'ToDos': [],
            'token': '',
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            username: username,
            password: password
        })
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    load_data() {
        const headers = this.get_headers()
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

        axios.get('http://127.0.0.1:8000/api/authors/', {headers})
            .then(response => {
                this.setState({authors: response.data})
            }).catch(error => console.log(error));

        axios.get('http://127.0.0.1:8000/api/books/', {headers})
            .then(response => {
                this.setState({books: response.data})
            }).catch(error => {
                console.log(error)
            this.setState({books: []})
        })
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
    }

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
                            <li>
                                {this.is_authenticated() ? <button
                                    onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <AuthorList authors={this.state.authors}/>}/>
                        <Route exact path='/books' component={() => <BookList books={this.state.books}/>}/>
                        <Route exact path="/author/:id" component={() => <AuthorBookList items={this.state.books}/>}/>

                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/ToDos' component={() => <ToDosList ToDos={this.state.ToDos}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>

                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Redirect from='/authors' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
