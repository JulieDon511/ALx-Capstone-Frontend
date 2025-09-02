// import PageHeader from "./PageHeader";
import FloatingCard from "../components/FloatingCard";
import { useNavigate } from "react-router-dom";
function HeroCardnfo (){
    const navigate =useNavigate();
    const HandleNavigate= () =>{
        navigate("/projects");
    }
    

    return(
        <>
        <section className=" cardcontainer bg-white mt-4" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center" >
                {/* image */}
                <div className="leftImage md:col-span-1">
                <img src="/FarmerHavesting.jpg" alt="FarmerImage" className="rounded-lg shadow-lg object-cover w-301.5 h-[350px]" />
            </div>

            <div className="middleContent md:col-span-1">
                <h2 className="text-bold text-black text-5xl   mb-4">Best Organic Firms</h2>
                <p className="text-gray-600 mb-6">Give lady of they such they sure it. Me contained explained my education.
                Vulgar as hearts by garret. Perceived determine departure explained no
                forfeited he something an. Contrasted dissimilar get joy you instrument out
                reasonably. Again keeps at no meant stuff.</p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-center"> 
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Best Quality Standards</span>

                    </li>
                    <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Natural Healthy Products</span>
                    </li>
                </ul>
                <button  onClick ={HandleNavigate} className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">Discover More</button>

            </div>

             <FloatingCard />

             <div className="">
                <img src="/greenLeaf.jpg" alt="leaf" className="absolute -bottom-69 -right-1 w-30 opacity-80" />
             </div>

            </div>

            
        </section>
        </>
    )
}
 export default HeroCardnfo;