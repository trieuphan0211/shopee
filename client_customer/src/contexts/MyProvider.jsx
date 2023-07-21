import React, { useState } from 'react';
import MyContext from './MyContext';

export const MyProvider = (props) => {
    const [token, setToken] = useState('');
    const [customer, setCustomer] = useState(null);
    const [mycart, setMycart] = useState([]);

    // Provide the context value as an object
    const contextValue = {
        token,
        setToken,
        customer,
        setCustomer,
        mycart,
        setMycart,
    };
    // Return the context provider with the provided value and children
    return <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>;
};
