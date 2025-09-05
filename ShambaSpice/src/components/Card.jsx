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

 

 






