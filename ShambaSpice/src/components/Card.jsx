// import React from 'react'

// import PageHeader from "./PageHeader"

export function ImageCard({src, alt,className}) {
  return (
    
        <img src={src} alt={alt} className={className}/>
    
  )
}

export function RectangleCard({title, subtitle}) {
  return (
    <>
     <div className="flex flex-col items-center justify-center h-full p-4">
        <h2 className="text-green-700 font-bold text-lg">{title}</h2>
        <p className="text-gray-500 text-sm uppercase tracking-wide">{subtitle}</p>
      </div>
     
    </>

  )
}

// herosection card
export function HeroCard({img,title,subtitle, heightClass = "h-screen"} ) {
  return (

   <>
      <section
        className={`relative ${heightClass} bg-cover bg-center`} >
                
        <div
          className="absolute inset-0 bg-cover bg-center blur-none "
          style={{ backgroundImage: `url(${img})` }} >
        </div>
                
        {/* <div className="absolute inset-0 bg-black/40"></div>  */}
    
        <div className="relative z-10"></div> 

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          {title && <h1 className="text-4xl md:text-7xl font-extrabold">{title}</h1>}
          {subtitle && <p className="mt-4 text-lg md:text-2xl text-green-100">{subtitle}</p>}
        </div>
      </section>
    </>
  )
}



export function ButtonCard() {
  return (
    <div>Card</div>
  )
}

 
export function FarmStatsPanel() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-700 font-medium bg-orange-300">
        <div>🌱 Active Crops: <span className="font-bold">2</span></div>
        <div>💰 Total Expenses (This Month): <span className="font-bold">KSH 5500</span></div>
        <div>☀️ Weather Today: <span className="font-bold">28°C</span></div>
      </div>

      {/* My Crops Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-2">My Crops</h2>
        <table className="w-full text-left border-collapse mb-2">
          <thead>
            <tr className="text-gray-600">
              <th>Crop Name</th>
              <th>Planted</th>
              <th>Harvest</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>Maize</td>
              <td>2023-09-01</td>
              <td>2023-11-01</td>
              <td>Growing</td>
            </tr>
            <tr className="border-t">
              <td>Beans</td>
              <td>2023-08-01</td>
              <td>2023-10-01</td>
              <td>Planted</td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-4 gap-2">
          <input type="text" placeholder="Crop Name" className="border p-2 rounded" />
          <input type="date" placeholder="Planted" className="border p-2 rounded" />
          <input type="date" placeholder="Harvest" className="border p-2 rounded" />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add</button>
        </div>
      </div>

      {/* Expenses Section */}
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Expenses</h2>
        <table className="w-full text-left border-collapse mb-2">
          <thead>
            <tr className="text-gray-600">
              <th>Date</th>
              <th>Category</th>
              <th>Amount (KSH)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>2023-09-01</td>
              <td>Seeds</td>
              <td>2000</td>
            </tr>
            <tr className="border-t">
              <td>2023-09-01</td>
              <td>Fertilizer</td>
              <td>3500</td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-3 gap-2">
          <input type="date" placeholder="Date" className="border p-2 rounded" />
          <input type="text" placeholder="Category" className="border p-2 rounded" />
          <input type="number" placeholder="Amount" className="border p-2 rounded" />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 col-span-3">Add</button>
        </div>
      </div>
    </div>
  );
}

 






