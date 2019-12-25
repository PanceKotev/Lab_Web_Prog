import React from 'react';
import {Link} from 'react-router-dom'
const Header = (props) => {
    return (
    <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
            <Link className="nav-link" to={"/"}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/pizzas"}>Pizzas</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/ingredients"}>Ingredients</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Header;