import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Errors and Heartbreaks</h2>
            <p>404</p>
            <p>Page not found</p>
            <Link to="/">Home</Link>
        </div>
    );
}
 
export default NotFound;