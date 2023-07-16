import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class Login extends Component {
    static contextType = MyContext; // using this.context to access global state
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
        };
    }
    render() {
        if (this.context.token === '') {
            return (
                <div className="login__admin">
                    <div className="align-valign-center login__admin-form">
                        <div className="auth-form__header">
                            <h2 className="auth-form__heading login__admin-heading">ADMIN LOGIN</h2>
                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    type="text"
                                    className="auth-form__input"
                                    placeholder="Username"
                                    value={this.state.txtUsername}
                                    onChange={(e) => {
                                        this.setState({ txtUsername: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Password"
                                    value={this.state.txtPassword}
                                    onChange={(e) => {
                                        this.setState({ txtPassword: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="auth-form__control">
                            <button className="btn btn--primary" type="submit" onClick={(e) => this.btnLoginClick(e)}>
                                LOGIN
                            </button>
                        </div>
                        {/* <form>
                            <table className="align-center">
                                <tbody>
                                    <tr>
                                        <td className="login__admin-label">Username</td>
                                        <td>
                                            <input
                                                className="login__admin-input"
                                                type="text"
                                                value={this.state.txtUsername}
                                                onChange={(e) => {
                                                    this.setState({ txtUsername: e.target.value });
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="login__admin-label">Password</td>
                                        <td>
                                            <input
                                                className="login__admin-input"
                                                type="password"
                                                value={this.state.txtPassword}
                                                onChange={(e) => {
                                                    this.setState({ txtPassword: e.target.value });
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                className="login__admin-btn"
                                                type="submit"
                                                value="LOGIN"
                                                onClick={(e) => this.btnLoginClick(e)}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form> */}
                    </div>
                </div>
            );
        }
        return <div />;
    }
    // event-handlers
    btnLoginClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        if (username && password) {
            const account = { username: username, password: password };
            this.apiLogin(account);
        } else {
            alert('Please input username and password');
        }
    }
    // apis
    apiLogin(account) {
        axios.post('/api/admin/login', account).then((res) => {
            const result = res.data;
            if (result.success === true) {
                this.context.setToken(result.token);
                this.context.setUsername(account.username);
            } else {
                alert(result.message);
            }
        });
    }
}
export default Login;
