import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>GreenGrape</h1>
            {/* <Link to="/"><h1>GreenGrape</h1></Link> */}
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/sample">Sample</Link>
            </div>
        </div>
     );
}
 
export default Navbar;