import SummaryCard from '../components/SummaryCard';
import { FloatingCards } from '../components/FloatingCard';
import { summaries } from '../Data';
import { menuItems } from '../Data';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Menu */}
        <div className="md:w-1/4 mt-20 py-4 mx-0" >
          <FloatingCards title="My Dashboard" items={menuItems} showIcons={false} />
        </div>

        {/* Main Dashboard Content */}
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-6 text-green-700">Farm Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {summaries.map((summary, index) => (
              <SummaryCard
                key={index}
                title={summary.title}
                items={summary.items}
                links={summary.links}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
