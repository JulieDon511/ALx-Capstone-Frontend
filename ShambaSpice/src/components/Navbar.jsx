import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav className="bg-green-600 text-white p-4 flex justify-between">
            <h1 className="font-bold text-xl">AgroTrack</h1>
            <div className="space-x-4">
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/crops" className="hover:underline">Crops</Link>
                <Link to="/expenses" className="hover:underline">Expenses</Link>
            </div>
        </nav>
    )
}

export default Navbar;