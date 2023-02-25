import "./styles/navbar.css";
import Logo from "../components/pages/assets/logo512.png"
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <div className="navlinks">
                <NavLink className="navlink-style" to="/" style={({ isActive }) => ({
                    color: isActive ? '#51C8C0' : 'white'
                })}>
                    <img className="nav-icon" src={Logo} alt="logo" />
                </NavLink>
                <NavLink className="navlink-style" to="/blog" style={({ isActive }) => ({
                    color: isActive ? '#51C8C0' : 'white'
                })}>
                    Blog
                </NavLink>
                <NavLink className="navlink-style" to="/zworld" style={({ isActive }) => ({
                    color: isActive ? '#4B3394' : 'white'
                })}>
                    Z-World
                </NavLink>
                <NavLink className="navlink-style" to="/#contact" style={({ isActive }) => ({
                    color: isActive ? '#79D8AB' : 'white'
                })}>
                    Contact
                </NavLink>
            </div>
        </div>

    );
}

export default Navbar;