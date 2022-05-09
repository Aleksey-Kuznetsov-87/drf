import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AuthorList from "./components/Author";
import UserList from "./components/User";
import axios from "axios";
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'users': [],
            'menus': [],
            'footers': [],
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

        // axios.get('http://127.0.0.1:8000/api/authors/')
        //     .then(response => {
        //         const authors = response.data
        //         this.setState(
        //             {
        //                 'authors': authors
        //             }
        //         )
        //     }).catch(error => console.log(error));

        axios.get('http://127.0.0.1:8000/api/footers/')
            .then(response => {
                const footers = response.data
                this.setState(
                    {
                        'footers': footers
                    }
                )
            }).catch(error => console.log(error));

        axios.get('http://127.0.0.1:8000/api/menus/')
            .then(response => {
                const menus = response.data
                this.setState(
                    {
                        'menus': menus
                    }
                )
            }).catch(error => console.log(error));

    }

    render() {
        return (
            <div>
                {/*<AuthorList authors={this.state.authors}/>*/}
                <UserList users={this.state.users}/>
                <MenuList menus={this.state.menus}/>
                <FooterList footers={this.state.footers}/>
            </div>
        )
    }
}

export default App;

