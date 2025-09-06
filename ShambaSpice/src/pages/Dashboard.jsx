import { CropTracker, FarmSummary } from "../components/SummaryCard";
import {ExpenseSummary} from "../components/SummaryCard"

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Farm Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <FarmSummary />
        <CropTracker />
        <ExpenseSummary />
      </div>
    </div>
  );
}
