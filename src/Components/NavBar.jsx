import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="NavBar">
            <ul className="menu">
                <li><NavLink NavLink to="/">Home</NavLink></li>
                <li><NavLink NavLink to="/exercise1">Exercise 1</NavLink></li>
                <li><NavLink NavLink to="/exercise2">Exercise 2</NavLink></li>
                <li><NavLink NavLink to="/exercise3">Exercise 3</NavLink></li>
                <li><NavLink NavLink to="/exercise6">Exercise 6</NavLink></li>

            </ul>
        </nav>
    )
}

export default NavBar;