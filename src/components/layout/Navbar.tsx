import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-200 dark:bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Brand Logo or Name */}
                    <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-white">Home</Link>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <Link to="/alpha" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">Alpha</Link>
                        <Link to="/beta" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">Beta</Link>
                        <Link to="/gamma" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">Gamma</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;