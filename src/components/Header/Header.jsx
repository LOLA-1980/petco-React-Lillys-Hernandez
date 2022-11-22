import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Header.css';

const NavBar = () => {
    return (
        <div className="container-fluid rectangleBlue header-fixed">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid d-flex justify-content-between">
                            <a className="navbar-brand" href="/"><img src="images/Petco-brand-logo-prd.svg" alt="Petco" width="150" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            <div>
                                <CartWidget />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;