import { TiTick } from "react-icons/ti";
import PageHeader from "./PageHeader";

export default function AboutInfo() {
  const features = [
    {
      title: "Always Fresh",
      text: "Motionless she end literature. Gay direction neglected but supported.",
    },
    {
      title: "All Organic",
      text: "Continued up to zealously necessary breakfast. Surrounded sir motionless she end literature.",
    },
    {
      title: "Eco Friendly",
      text: "Continued up to zealously necessary breakfast. Gay direction neglected but supported yet her.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
        
        {/* Features List */}
        <div className="bg-green-500 text-white p-8 rounded-lg space-y-6">
          {features.map((item, idx) => (
            <div key={idx}>
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <TiTick className="text-white text-3xl" />
                {item.title}
              </h2>
              <p className="text-white/90 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Page Header with Stats */}
        <div className="col-span-1 flex flex-col justify-center">
          <PageHeader
            title="Why Choose Us"
            subtitle="Growing crops and raising livestock."
          >
            <div className="space-y-6 mt-6">
              <div>
                <p className="text-5xl font-bold text-orange-400">38K</p>
                <p className="font-semibold text-gray-700">Trusted Customers</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-orange-400">28M</p>
                <p className="font-semibold text-gray-700">
                  Growth Tonnes of Harvest
                </p>
              </div>
            </div>
          </PageHeader>
        </div>

        {/* Video Embed */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://assets.pinterest.com/ext/embed.html?id=344103227801575231"
            height="520"
            width="236"
            title="Farm video"
            className="w-full h-full"
          ></iframe>

          <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
