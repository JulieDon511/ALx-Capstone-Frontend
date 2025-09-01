import { NavLink, Link } from 'react-router-dom'

const linkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-panel text-white' : 'text-slate-300 hover:text-white hover:bg-panel/60'
  }`

export default function Navbar() {
  return (
    <header className="  bg-green-600 sticky top-0 z-50 backdrop-blur bg-surface/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-white font-semibold tracking-wide">
            Shamba Spice
          </Link>
          <nav className="flex gap-1">
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
