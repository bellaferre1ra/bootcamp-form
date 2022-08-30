const React = require('react');
const { useState, createContext } = React;


const CartContex = createContext();

function CartProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    return (
        <CartContex.Provider value={{ cartList, setCartList }}>
            {children}
        </CartContex.Provider>
    )
}


module.exports = { CartProvider, CartContex }