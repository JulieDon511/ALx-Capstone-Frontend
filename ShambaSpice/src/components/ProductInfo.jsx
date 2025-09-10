// import React from 'react'
import PageHeader from "./PageHeader"
import { ImageCard, RectangleCard } from "./Card"
import { useNavigate } from "react-router-dom";

function ProductInfo() {
  const Navigate = useNavigate();
  const HandleProductaclick= ()=>{
    Navigate("./projects")
  }
  return (
    <>
      <div onclick={HandleProductaclick} className="bg-[#E9F1EE] py-10 mt-6">
        <div className="text-blue-400 font-stretch-extra-expanded text-center mb-8">
          <PageHeader title="Healthy life with fresh products" />
        </div>

        {/* images */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-25 items-start">
          
          {/* item 1 */}
          <div className="md:col-span-1">
            <div className="relative w-full h-[250px]">
              <ImageCard
                src="/coffeefarming.jpg"
                alt="coffee"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />

              {/* Floating rectangle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-4 w-[220px]">
                <div className="bg-green-700 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow">
                  <ImageCard src="/tea.png" alt="tea" className="w-5 h-5 object-cover" />
                </div>
                <RectangleCard title="Agriculture" subtitle="PRODUCTS" />
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="md:col-span-1">
            <div className="relative w-full h-[250px]">
              <ImageCard
                src="/product1.jpg"
                alt="harvest"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />

              {/* Floating rectangle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-4 w-[220px]">
                <div className="bg-green-700 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow">
                  <ImageCard src="/carrot.png" alt="carrots" className="w-7 h-5 object-cover" />
                </div>
                <RectangleCard title="Fresh" subtitle="Vegetables" />
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className="md:col-span-1">
            <div className="relative w-full h-[250px]">
              <ImageCard
                src="/milkproduction.jpg"
                alt="milk"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />

              {/* Floating rectangle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-4 w-[220px]">
                <div className="bg-green-700 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow">
                  <ImageCard src="/organic.png" alt="organic" className="w-5 h-5 object-contain" />
                </div>
                <RectangleCard title="organic" subtitle="PRODUCTS" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductInfo
