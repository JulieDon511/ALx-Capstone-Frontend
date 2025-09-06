import { GiRaspberry, GiStrawberry, GiCorn, GiPeach } from "react-icons/gi";
import { ImageCard, RectangleCard } from "./Card";
import PageHeader from "./PageHeader";
export function FloatingCard (){
    return(
        <>
            <div className="relative md:col-span-1"> 
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto h-[300px]">
                    <ul className="space-y-4 text-gray-700 font-medium">
                        <li className="flex items-center  gap-2">
                            <GiRaspberry size={48} className="text-blue-500 text-xl  mt-3" /> Raspberry
                         </li>
                        <li className="flex items-center gap-2">
                            <GiStrawberry size={48} className="text-red-500 text-xl mt-3" /> Strawberry
                        </li>
                         <li className="flex items-center gap-2">
                            <GiCorn size={48} className="text-yellow-500 text-xl  mt-3" /> Maize
                        </li>
                        <li className="flex items-center gap-2">
                            <GiPeach  size={48} className="text-green-500 text-xl  mt-3" /> Apricots
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}



export function TestimonialCard() {
  return (
    <section className="bg-white py-12">
      
      <div className="text-center mb-10">
        <RectangleCard title="Our Testimonials" subtitle="What They Say" />
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-">
        
        {/* Testimonial 1 */}
        <div className="bg-gray-50 rounded-lg shadow-md p-9 flex flex-col justify-between">
          {/* Top Row: Image + Text */}
          <div className="flex items-start gap-2 relative">
            {/* Profile Image */}
            <div className="relative group">
              <ImageCard src="/profileman.jpg" alt="mansprofile" className="w-full  rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110 border-4 border-white shadow-md "
                />
              
              {/* Floating Green Circle */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed m-9">
              "Before ShambaSpice, I relied on guesswork. Now I can track every crop stage and know exactly when to plant, water, and harvest. My yields have never been better."
            </p>
          </div>

          {/* Name & Role at Bottom Right */}
          <div className="mt-4 flex justify-end text-right text-blue-600">
            <PageHeader title="Peter Mwangi" subtitle="Coffee Farmer" />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-50 rounded-lg shadow-md p-9 flex flex-col justify-between">
          {/* Top Row: Image + Text */}
          <div className="flex items-start gap-4 relative">
            {/* Profile Image */}
            <div className="relative group">
              <ImageCard src="/profilelady.jpg" alt="ladysprofile" className="w-full  rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110 border-4 border-white shadow-md "
                />
              {/* Floating Green Circle */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed my-9">
              "The expense tracking feature has changed how I run my farm. I finally understand where my money goes and how to save more."
            </p>
          </div>

          {/* Name & Role at Bottom Right */}
          <div className="mt-4 flex justify-end text-right text-blue-600">
            <PageHeader title="Grace Njeri" subtitle="Dairy Farmer" />
          </div>
        </div>

      </div>
    </section>
  );
}

export function OurFarmers() {
  return (
    <>
      <div className="ourfarmerscontainer bg-white">
        {/* Section Heading */}
        <div className="text-[#EEC044] justify-items-center">
          <PageHeader title=" Team Members " />
          <div className="text-black text-semibold text-3xl">
            <PageHeader title=" Meet Our Farmers " />
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-">
          
          {/* Farmer 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-5 flex flex-col justify-between">
            {/* Top Row: Image + Text */}
            <div className="flex items-start gap-2 relative">
              {/* Profile Image */}
              <div className="relative group">
                <ImageCard src="/profileman.jpg" alt="mansprofile" className="w-full h-[300px] rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110 border-4 border-white shadow-md "
                />
               
              </div>
                            
            </div>

            {/* Name & Role */}
            <div className="flex justify-end text-right text-blue-600 bg-orange-200 w-[200px] h-[78px] rounded-3xl">
              <PageHeader title="Peter Mwangi" subtitle="Coffee Farmer" />
            </div>
          </div>

          {/* Farmer 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-5 flex flex-col justify-between mt-7">
            {/* Top Row: Image + Text */}
            <div className="flex items-start  relative">
              {/* Profile Image */}
              <div className="relative group">
                <ImageCard src="/profilelady.jpg" alt="ladysprofile" className="w-full h-[250px] rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110 border-4 border-white shadow-md "
                />
              </div>

             
            </div>

            {/* Name & Role */}
            <div className="mt-4 flex justify-end text-right text-blue-600 bg-orange-200 w-[200px] h-[78px] rounded-3xl">
              <PageHeader title="Grace Njeri" subtitle="Dairy Farmer" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
