import { Component } from "react";
import { Navigate } from 'react-router-dom';

import "./index.css"

class LoginPage extends Component{
    state = {
        fullName : '',
        password: '',
        errorMsg: false,
        redirectHomePage: false
    }
    changeFullName = (event) => {
        this.setState({fullName: event.target.value})
    }
    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    submitForm = (event) => {
        event.preventDefault()
        if(this.state.fullName === '' || this.state.password === ''){
            this.setState({errorMsg: true})
        }
        else{
            this.props.setIsLoggedIn(true);
            this.setState({ redirectHomePage: true, errorMsg: true });
        }
    }

    render(){
        const {name, password, errorMsg} = this.state
        if (this.state.redirectHomePage) {
            return <Navigate to="/home" />;
          }

        return(
            <div className="login-container">
                <img src="https://i.pinimg.com/564x/d2/62/04/d26204a27a5902717798d297431bbcd0.jpg" alt="logo" className="logo" />
                <h1 className="login-heading">LOGIN IN</h1>
                <form className="login-form" onSubmit={this.submitForm}>
                    <label htmlFor="name" className="input-label">FULL NAME</label>
                    <input id="name" type="text" value={name} onChange={this.changeFullName} placeholder="Full Name" className="input-field" />

                    <label htmlFor="password" className="input-label">PASSWORD</label>
                    <input id="password" type="password" value={password} onChange={this.changePassword} placeholder="Password" className="input-field" />

                    <button type="submit" className="form-button">Sumit</button>
                    {errorMsg && <p className="error-msg">Please fill all the fields</p>}
                </form>
            </div>
        )
    }
}

export default LoginPage