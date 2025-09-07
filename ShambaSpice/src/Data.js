// dashboard
import { GiRaspberry, GiStrawberry, GiCorn, GiPeach } from "react-icons/gi";


export const summaries = [
  {
    title: 'Farm Summary',
    items: ['Total Land: 5 acres', 'Active Crops: Maize, Tomatoes', 'Weather: Sunny, 28°C', 'Soil Health: Good']
  },
  {
    title: 'Crop Tracker',
    items: ['Maize – 60% grown', 'Tomatoes – Pest alert: Aphids', 'Harvest Dates: Maize (Sept 20), Tomatoes (Sept 10)']
  },
  {
    title: 'Expenses & Revenue',
    items: ['Expenses (Aug): KSh 12,000', 'Revenue (Aug): KSh 18,500', 'Profit: KSh 6,500']
  },
  {
    title: 'To-Do List',
    items: ['✅ Water tomatoes', '🕒 Spray maize (due tomorrow)', '📦 Buy fertilizer', '👨‍🌾 Assign harvesting to workers']
  },
  {
    title: 'Inventory',
    items: ['Seeds: Maize (20kg), Tomatoes (10kg)', 'Fertilizer: 5 bags (2 expiring soon)', 'Tools: 3 hoes, 2 sprayers', 'Low Stock Alert: Tomato seeds']
  },
  {
    title: 'Shop & Market Info',
    items: ['Maize Price: KSh 45/kg', 'Tomatoes Price: KSh 80/kg', 'Order Status: 2 pending deliveries'],
    links: [
      { label: 'Buy Inputs', href: '#' },
      { label: 'Sell Produce', href: '#' }
    ]
  },
  {
    title: 'Health & Food Tips',
    items: ['Maize: High in fiber, good for digestion', 'Tomatoes: Rich in Vitamin C and antioxidants', 'Recipe Idea: Tomato stew with maize ugali', 'Community Impact: Better nutrition for families']
  }
];

// dashboard floatingmenu dahsboard

export const menuItems = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Services' },
  { label: 'Health-Food' },
  { label: 'Contact' },
  { label: 'Shop' }
];

//   homepage but rendered or to be imported to the herocard
  export const projects = [
    {
      title: "Smart Irrigation System",
      description: "Automated water scheduling to save resources and boost yields.",
      image: "/projects/irrigation.jpg",
    },
    {
      title: "Organic Farming Pilot",
      description: "Helping farmers transition to sustainable, chemical-free farming.",
      image: "/projects/organic.jpg",
    },
    {
      title: "Farmer Marketplace",
      description: "Connecting farmers directly to buyers for better prices.",
      image: "/projects/marketplace.jpg",
    },
  ];

//   this one is for the herocard on the floating icon homepage
export const fruitItems = [
  { label: 'Raspberry', icon: GiRaspberry },
  { label: 'Strawberry', icon: GiStrawberry },
  { label: 'Maize', icon: GiCorn },
  { label: 'Apricots', icon: GiPeach }
];
//Services
export const MyList = [
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


