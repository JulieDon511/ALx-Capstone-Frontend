export  function FarmSummary() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2 text-green-600">Farm Summary</h2>
      <ul className="space-y-1 text-gray-700">
        <li>Total Land: 5 acres</li>
        <li>Active Crops: Maize, Tomatoes</li>
        <li>Weather: Sunny, 28°C</li>
        <li>Soil Health: Good</li>
      </ul>
    </div>
  );
}
