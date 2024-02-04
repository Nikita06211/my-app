import {Link} from "react-router-dom"

export const Navbar = ()=>{
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="about-us">About Us</Link>
            <Link to="vision">Vision</Link>
            <Link to="calculator">Calculator</Link>
        </div>
    )
}