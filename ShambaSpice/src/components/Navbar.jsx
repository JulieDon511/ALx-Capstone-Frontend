import { NavLink, Link } from 'react-router-dom'
import Tractorfarmenr from "../assets/Tractorfarmer.jpg"

const linkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-md text-md font-medium transition-colors ${
    isActive ? 'bg-panel text-white' : 'text-slate-300 hover:text-white hover:bg-panel/60'
  }`

export default function Navbar() {
  return (
    
      

    <header className=" fixed  top-0 left-0 w-full z-50 border-1 rounded-sm p-2 py-2 px-3 bg-green-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-white font-semibold tracking-wide ">
            Shamba Spice
          </Link>
          <nav className="flex gap-1 ">
             <NavLink to="/home" className={linkClasses} end >Home</NavLink>
                <NavLink to="/about" className={linkClasses}>About</NavLink>
                <NavLink to="/services" className={linkClasses}>Services</NavLink>
                 <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
                 <NavLink to="/shop" className={linkClasses}>Shop</NavLink>
                 <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
                 <NavLink to="/grid" className={linkClasses}>Grid</NavLink>
                  <NavLink to="/list" className={linkClasses}>List</NavLink>
            
          </nav>
        </div>
      </div>
    </header>

     
    
  )
}
