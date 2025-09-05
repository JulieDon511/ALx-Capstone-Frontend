import { ImageCard } from "../components/Card";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import {TestimonialCard} from "../components/FloatingCard";
import { OurFarmers } from "../components/FloatingCard";

function About() {
  const navigate = useNavigate();

  const HandleButtonClick = () => {
    navigate("/services");
  };

  return (
    <>
      {/* Top Banner */}
      <div className="justify-items-center relative w-full h-[250px]">
        <ImageCard
          src="/Frame.png"
          alt="image"
          className="object-cover w-full h-full"
        />
        <h1 className="items-center justify-center inset-0 absolute flex text-white text-4xl font-bold">
          <PageHeader title="About Us" />
        </h1>
      </div>

      {/* Middle Content - Two Column Layout */}
      <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
        
        {/* Image Section */}
        <div className="relative md:col-span-1 mx-4 md:mx-10">
          {/* Main Image */}
          <ImageCard
            src="/milkproduction.jpg"
            alt="Milk Production"
            className="h-[350px] w-full object-cover rounded-lg shadow-lg"
          />

          {/* Smaller Overlapping Image */}
          <ImageCard
            src="/FarmerHavesting.jpg"
            alt="Farmer Harvesting"
            className="absolute -bottom-6 -left-6 h-[150px] w-[200px] object-cover rounded-lg shadow-xl border-4 border-white"
          />
        </div>

        {/* Text Section */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-[#EEC044] font-semibold">
            <PageHeader title="Get to know us" />
          </h3>

          <h1 className="text-3xl font-bold text-black">
            <PageHeader title="Smart Tools for Smarter Farming" />
          </h1>

          <p className="text-[#4BAF47] leading-relaxed">
            We help farmers track crops, manage expenses, and boost productivity — all in one easy‑to‑use platform.
          </p>

          <h2 className="mt-2 font-semibold">Highlights:</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700 font-medium">Crop tracking made simple</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700 font-medium">Clear expense records</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700 font-medium">Performance insights at a glance</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700 font-medium">Works on any device</span>
            </li>
          </ul>

          <button
            onClick={HandleButtonClick}
            className="bg-[#4BAF47] rounded-2xl font-bold text-white px-6 py-3 hover:bg-green-600 transition"
          >
            Discover More
          </button>
        </div>
      </div> {/* ✅ Close grid here */}

      {/* Full-width Responsive Video Section */}
      <section className="w-full mt-16 mx-9 m-9">
        <div className="relative w-full pb-[30%] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/7YrYKL2abhw"
            title="Critically Examining and Improving Farm Management Practices"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* testimonials */}
      <TestimonialCard />
      <OurFarmers />
    </>
  );
}

export default About;
