// import PageHeader from '../components/PageHeader'
// import Card from '../components/Card'
import Tractorfarmenr from "../assets/Tractorfarmer.jpg"
import HeroCardnfo from "../components/HeroCardInfo"


export default function Home() {
  return (
    <>
     <section
            className="relative h-screen bg-cover bg-center">
        
            <div
                className="absolute inset-0 bg-cover bg-center blur-none"
                style={{ backgroundImage: `url(${Tractorfarmenr})` }} >
            </div>
        
            {/* <div className="absolute inset-0 bg-black/40"></div>  */}
        
            <div className="relative z-10"></div> 

               < div className="relative z-10 flex items-center justify-center h-full text-green-500"> 
             <h1 className="text-7xl font-bold ">Welcome to Shamba Spice</h1>
            </div>
        </section>
        {/* card */}
        <HeroCardnfo />

    </>
     
  )
}
