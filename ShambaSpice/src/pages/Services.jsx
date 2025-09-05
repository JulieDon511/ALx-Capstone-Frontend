import { HeroCard } from "../components/Card";

export default function Services() {
    const MyList = [
    {
      title: "Crop & Field Management",
      description:
        "Track planting dates, monitor crop growth, and plan rotations with ease. Keep all your field data in one place.",
      icon: "/icons/crop.svg", // replace with your icon path
    },
    {
      title: "Expense & Income Tracking",
      description:
        "Record farm expenses, track sales, and get simple profit/loss summaries to make informed decisions.",
      icon: "/icons/finance.svg",
    },
    {
      title: "Performance Insights",
      description:
        "View yield trends, analyze productivity, and get recommendations to improve your farm’s output.",
      icon: "/icons/insights.svg",
    },
    {
      title: "Inventory Management",
      description:
        "Monitor stock levels for seeds, fertilizers, and tools. Get alerts when supplies run low.",
      icon: "/icons/inventory.svg",
    },
    {
      title: "Weather & Alerts",
      description:
        "Stay ahead with local forecasts and timely planting or harvest reminders.",
      icon: "/icons/weather.svg",
    },
    {
      title: "Marketplace Integration",
      description:
        "Connect directly with buyers and showcase your produce to a wider market.",
      icon: "/icons/market.svg",
    },
  ];

  return(
    <>
    <div className="">
        <HeroCard img="/Frame.png" title="Our Services"   subtitle="We provide farmers with the tools they need to manage crops, track
          expenses, and grow their businesses sustainably"  heightClass=" h-[250px]"
        />
    </div>
        
    </>
  )
  
}
