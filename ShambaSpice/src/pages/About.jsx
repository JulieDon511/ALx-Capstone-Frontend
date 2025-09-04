import { ImageCard } from "../components/Card";
import PageHeader from "../components/PageHeader";

function About (){
    return(
        <>
          <div className="justify-items-center relative w-full h-[250px] ">
            
                <ImageCard src="/Frame.png" alt="image" className="object-cover  w-full h-full " />
                                
                <h1 className=" items-center justify-center inset-0 absolute flex text-white text-4xl text-bold ">
                    <PageHeader title= "About Us" />
                </h1> 
            </div>
            {/* middle content */}
           
                <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-3">
                    <div className="images md:col-span-1  relative">
                        <ImageCard src="/milkproduction.jpg" alt=""  className=" h-[350px] object-cover"/>
                        <div>
                            <ImageCard src="/FarmerHavesting.jpg" alt=""  className=" h-[100px] alsolute -bottom-left"/>
                        </div>
                        
                    </div>

                    <div className="content  md:col-span-1"> 
                        <h3 className="">
                            <PageHeader title="Get to know us" />
                        </h3>
                        <h1 className="absolute ml-2">
                            <PageHeader title="The Best Agriculture Market" />
                        </h1>
                        <p className="">
                            There are many variations of passa of lorem available, but
                            the majority have suffered alteration.
                        </p>

                    </div>

             </div>


            

           
             
         
        </>
       
    )
}
 export default About;