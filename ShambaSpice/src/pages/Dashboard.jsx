import { useState } from "react";

export default function Dashboard() {
  // Temporary state for crops and expenses
  const [crops, setCrops] = useState([
    { name: "Maize", planted: "2025-08-01", harvest: "2025-11-15", status: "Growing" },
    { name: "Beans", planted: "2025-07-10", harvest: "2025-10-05", status: "Planted" },
  ]);

  const [expenses, setExpenses] = useState([
    { date: "2025-09-01", category: "Seeds", amount: 2000 },
    { date: "2025-09-03", category: "Fertilizer", amount: 3500 },
  ]);

  const [newCrop, setNewCrop] = useState({ name: "", planted: "", harvest: "" });
  const [newExpense, setNewExpense] = useState({ date: "", category: "", amount: "" });

  // Add crop
  const handleAddCrop = (e) => {
    e.preventDefault();
    setCrops([...crops, { ...newCrop, status: "Planted" }]);
    setNewCrop({ name: "", planted: "", harvest: "" });
  };

  // Add expense
  const handleAddExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
    setNewExpense({ date: "", category: "", amount: "" });
  };

  return (
    <section className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Farm Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <StatCard title="Active Crops" value={crops.length} />
        <StatCard
          title="Total Expenses (This Month)"
          value={`KSh ${expenses.reduce((sum, e) => sum + e.amount, 0)}`}
        />
        <StatCard title="Weather Today" value="🌤 26°C" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* My Crops */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">My Crops</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Planted</th>
                <th>Harvest</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{crop.name}</td>
                  <td>{crop.planted}</td>
                  <td>{crop.harvest}</td>
                  <td>{crop.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Crop Form */}
          <form onSubmit={handleAddCrop} className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Crop Name"
              value={newCrop.name}
              onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <input
              type="date"
              value={newCrop.planted}
              onChange={(e) => setNewCrop({ ...newCrop, planted: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <input
              type="date"
              value={newCrop.harvest}
              onChange={(e) => setNewCrop({ ...newCrop, harvest: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <button className="bg-green-500 text-white rounded px-4 py-1 hover:bg-green-600">
              Add
            </button>
          </form>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Date</th>
                <th>Category</th>
                <th>Amount (KSh)</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{exp.date}</td>
                  <td>{exp.category}</td>
                  <td>{exp.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Expense Form */}
          <form onSubmit={handleAddExpense} className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="date"
              value={newExpense.date}
              onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newExpense.category}
              onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              className="border rounded px-2 py-1"
              required
            />
            <button className="bg-green-500 text-white rounded px-4 py-1 hover:bg-green-600">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Small stat card component
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-green-600">{value}</p>
    </div>
  );
}
