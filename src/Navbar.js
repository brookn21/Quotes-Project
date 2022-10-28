import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Say What
            </Link>
            <ul>
                <CustomLink to="/quotes">Quotes</CustomLink>
                <CustomLink to="/favorites">Favorites</CustomLink>
                <CustomLink to="/addQuote">Add A Quote</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    // const path = window.location.pathname
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}
