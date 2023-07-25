import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

export const MyProvider = (props) => {
    const [token, setToken] = useState('');
    const [numberProduct, setNumberProduct] = useState(0);
    const [customer, setCustomer] = useState(null);
    const [mycart, setMycart] = useState([]);
    const contextValue = {
        token,
        setToken,
        customer,
        setCustomer,
        mycart,
        setMycart,
        numberProduct,
        setNumberProduct,
    };
    console.log(contextValue);
    // Provide the context value as an object

    // Return the context provider with the provided value and children
    return <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>;
};
