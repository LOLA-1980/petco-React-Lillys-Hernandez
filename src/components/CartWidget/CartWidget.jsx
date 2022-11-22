import React from "react";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            <img src="images/cart-white.svg" alt="Carrito" width="60" />
            <span className="position-absolute notificacion badge rounded-pill bg-danger">1</span>
            <span className="d-flex justify-content-center text-white position-relative bottom-20">Carrito</span>
        </button>
    )
}

export default CartWidget;