import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">Aswin</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
        <Link to="/projects" className="hover:text-purple-600">Projects</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
