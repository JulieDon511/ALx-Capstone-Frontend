import { ImageCard } from "../components/Card";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

function About (){
    const navigate = useNavigate();
    const HandleButtonClick = ()=>{
        navigate("/services");
    }
    return(
        <>
          <div className="justify-items-center relative w-full h-[250px] ">
            
                <ImageCard src="/Frame.png" alt="image" className="object-cover  w-full h-full " />
                                
                <h1 className=" items-center justify-center inset-0 absolute flex text-white text-4xl text-bold ">
                    <PageHeader title= "About Us" />
                </h1> 
            </div>
            {/* middle content */}
           
               <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
  
                    {/* Image Section */}
                    <div className="relative md:col-span-1 mx-10">
                        {/* Main Image */}
                        <ImageCard 
                        src="/milkproduction.jpg" 
                        alt="Milk Production"  
                        className="h-[350px] w-full object-cover rounded-lg shadow-lg"
                        />

                        {/* Smaller Overlapping Image */}
                        <ImageCard 
                        src="/FarmerHavesting.jpg" 
                        alt="Farmer Harvesting"  
                        className="absolute -bottom-6 -left-9 h-[150px] w-[200px] object-cover rounded-lg shadow-xl border-4 border-white"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:col-span-1 space-y-2">
                        <h3 className="text-[#EEC044]  relative bottom-1 -left-15 font-stretch-125%">
                        <PageHeader title="Get to know us" />
                        </h3>
                        <h1 className="text-3xl font-bold  text-black">
                        <PageHeader title="Smart Tools for Smarter Farming" />
                        </h1>
                        <p className="text-[#4BAF47] leading-relaxed">
                        We help farmers track crops, manage expenses, and boost productivity — all in one easy‑to‑use platform. </p>
                        <h2 className="mt-2">
                            Highlights:
                            <ul className="space-y-3 mb-6">
                    <li className="flex items-center mt-3"> 
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Crop tracking made simple</span>

                    </li>
                    <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Clear expense records</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Performance insights at a glance</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">Works on any device</span>
                    </li>
                </ul>
                        </h2>
                        <button onClick={HandleButtonClick} className="bg-[#4BAF47] rounded-2xl text-bold text-white  items-center p-4 mb-5">Discover More</button>
                    </div>

                </div>

            

           
             
         
        </>
       
    )
}
 export default About;