import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navbar bg-gray-800 text-white flex justify-between items-center p-4">
            <div className="navbar-brand ">
                <Link to="/">Movie App</Link>
            </div>
            <div className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </nav>
    )
}

export default NavBar;