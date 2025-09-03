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






