// import PageHeader from '../components/PageHeader'
// import Card from '../components/Card'
import AboutInfo from "../components/AboutInfo"
import { HeroCard } from "../components/Card"
import HeroCardnfo from "../components/HeroCardInfo"
import ProductInfo from "../components/ProductInfo"


export default function Home() {
  
  return (
    <>
    <div className="h-screen ">
      <HeroCard img="/home2.jpg" title="Welcome To ShambaSpice" subtitle="Smart Tools for Smarter Farming"/>
    </div>
     
        {/* card */}
        <HeroCardnfo />
        <AboutInfo />
        <ProductInfo />
    </>
     
  )
}
