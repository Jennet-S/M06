import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="pagenotfound">
        <h1>Page Not Found</h1>
        <p>Go back to <Link to="/">Home</Link></p>
        </div>
    )
}

export default PageNotFound;