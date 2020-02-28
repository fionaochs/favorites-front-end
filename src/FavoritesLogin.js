import React, { Component } from 'react'
import request from 'superagent';

export default class FavoritesLogin extends Component {
    state = {
        usernameSignIn: '',
        usernameSignUp: '',
        passwordSignIn: '',
        passwordSignUp: '',
        // signedUp: false
    }
    handleSignIn = async () => {
        const signIn = await request.post(`https://radiant-river-59929.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        })

        localStorage.setItem('user', JSON.stringify(signIn.body));
        this.props.history.push('/');
        //works because specifying it in route on App.js

        // this.props.setUser(user);
    }
    
    handleSignUp = async () => {
        const signUp = await request.post(`https://radiant-river-59929.herokuapp.com/api/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        })
        
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/');

        // this.setState({ signedUp: true });
        // const user = JSON.parse(localStorage.getItem('user'));
        // console.log(user);

        // this.props.setUser(user);


    }
    render() {
        return (
            <div id="userlogin">
                <form id="singup" onSubmit={ this.handleSignUp }>
                <input id="signupinput" value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value})} />
                <input value={ this.state.passwordSignUp} onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />

                <button id="signupinputbutton" >Sign up</button>  
                </form>
                <br/>

                <form id="signin" onSubmit={this.handleSignIn}>
                <input id="signininput" value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                <input value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />

                <button id="signupinputbutton" >Sign in</button>
                </form>
            </div>
        )
    }
}