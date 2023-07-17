import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
    static contextType = MyContext; // using this.context to access global state
    render() {
        return (
            <div className="home__admin-header">
                <ul className="nav__admin">
                    <li className="nav__admin-menu">
                        <Link to="/admin/home" className="nav__admin-text decorate">
                            Home
                        </Link>
                    </li>
                    <li className="nav__admin-menu">
                        <Link to="/admin/category" className="nav__admin-text decorate">
                            Category
                        </Link>
                    </li>
                    <li className="nav__admin-menu">
                        <Link to="/admin/product" className="nav__admin-text decorate">
                            Product
                        </Link>
                    </li>
                    <li className="nav__admin-menu">
                        <Link to="/admin/order" className="nav__admin-text decorate">
                            Order
                        </Link>
                    </li>
                    <li className="nav__admin-menu">
                        <Link to="/admin/customer" className="nav__admin-text decorate">
                            Customer
                        </Link>
                    </li>
                </ul>

                <div className="nav__admin nav__admin-text">
                    ...{' '}
                    <Link
                        to="/admin/home"
                        className="nav__admin-text absdecorate"
                        onClick={() => this.lnkLogoutClick()}
                    >
                        Logout
                    </Link>
                </div>
                {/* <div className="float-clear" /> */}
            </div>
        );
    }
    // event-handlers
    lnkLogoutClick() {
        this.context.setToken('');
        this.context.setUsername('');
    }
}
export default Menu;
