import React from "react";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse d-flex justify-content-between align-items-center align-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active fw-semibold" href="/mascotas">Mascotas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fw-semibold" href="/marcas">Marcas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fw-semibold" href="/petgallery">PetGallety</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fw-semibold" href="/farmacia">Farmacia</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fw-semibold" href="/outlet">Outlet</a>
                                    </li>
                                </ul>
                                <div className="d-flex flex-row align-items-center align-content-center">
                                    <img src="images/camion-azul.png" className="m-2" alt="Camion" width="30" height="30" />
                                    <span>Envíos gratis superiores a $599</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default NavBar;