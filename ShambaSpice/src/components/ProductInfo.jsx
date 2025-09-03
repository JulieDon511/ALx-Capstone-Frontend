// import React from 'react'
import PageHeader from "./PageHeader"
import ImageCard from "./ImageCard"
function ProductInfo() {
  return (
    <>
        <div className="text-blue-400 font-stretch-extra-expanded">
            <PageHeader 
             title="Healthy life with
                fresh products  "
             />
        </div>
        

        {/* images */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 ">
             <ImageCard src="/coffeefarming.jpg" alt="coffee" className="rounded-lg shadow-lg object-cover w-301.5 h-[250px]" />
            </div>

            <div className="md:col-span-1 ">
                <ImageCard src="/product1.jpg" alt="tomatoes" className= "rounded-lg shadow-lg object-cover w-301.5 h-[250px]" />
            </div>
            <div className="md:col-span-1 max-w-7xl ">
                <ImageCard src="/milkproduction.jpg" alt="MILK" className="rounded-lg shadow-lg object-cover w-301.5 h-[250px]" />
            </div>
        </div>
       


    </>
  )
}

export default ProductInfo