// import React from 'react'
import { useState } from "react"
import { toast } from 'react-toastify';

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
const [crops, setCrops] = useState([
    { name: 'Maize', planted: '2023-09-01', harvest: '2023-11-01', status: 'Growing' },
    { name: 'Beans', planted: '2023-08-01', harvest: '2023-10-01', status: 'Planted' }
  ]);

  const [expenses, setExpenses] = useState([
    { date: '2023-09-01', category: 'Seeds', amount: 2000 },
    { date: '2023-09-01', category: 'Fertilizer', amount: 3500 }
  ]);

  const [newCrop, setNewCrop] = useState({ name: '', planted: '', harvest: '' });
  const [newExpense, setNewExpense] = useState({ date: '', category: '', amount: '' });

  const handleAddCrop = () => {
    if (!newCrop.name || !newCrop.planted || !newCrop.harvest) {
      toast.error('Please fill all crop fields');
      return;
    }
    setCrops([...crops, { ...newCrop, status: 'Planted' }]);
    setNewCrop({ name: '', planted: '', harvest: '' });
    toast.success('Crop added successfully');
  };

  const handleAddExpense = () => {
    if (!newExpense.date || !newExpense.category || !newExpense.amount) {
      toast.error('Please fill all expense fields');
      return;
    }
    setExpenses([...expenses, { ...newExpense, amount: parseInt(newExpense.amount) }]);
    setNewExpense({ date: '', category: '', amount: '' });
    toast.success('Expense added successfully');
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-700 font-medium">
        <div>🌱 Active Crops: <span className="font-bold">{crops.length}</span></div>
        <div>💰 Total Expenses (This Month): <span className="font-bold">KSH {totalExpenses}</span></div>
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
            {crops.map((crop, index) => (
              <tr key={index} className="border-t">
                <td>{crop.name}</td>
                <td>{crop.planted}</td>
                <td>{crop.harvest}</td>
                <td>{crop.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid grid-cols-4 gap-2">
          <input type="text" placeholder="Crop Name" className="border p-2 rounded"
            value={newCrop.name} onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })} />
          <input type="date" className="border p-2 rounded"
            value={newCrop.planted} onChange={(e) => setNewCrop({ ...newCrop, planted: e.target.value })} />
          <input type="date" className="border p-2 rounded"
            value={newCrop.harvest} onChange={(e) => setNewCrop({ ...newCrop, harvest: e.target.value })} />
          <button onClick={handleAddCrop} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add</button>
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
            {expenses.map((expense, index) => (
              <tr key={index} className="border-t">
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid grid-cols-4 gap-2">
          <input type="date" className="border p-2 rounded"
            value={newExpense.date} onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })} />
          <input type="text" placeholder="Category" className="border p-2 rounded"
            value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })} />
          <input type="number" placeholder="Amount" className="border p-2 rounded"
            value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} />
          <button onClick={handleAddExpense} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ">Add</button>
        </div>
      </div>
    </div>
  );
}

 






