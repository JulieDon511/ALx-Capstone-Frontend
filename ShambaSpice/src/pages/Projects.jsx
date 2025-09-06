// src/pages/Projects.jsx
import PageHeader from "../components/PageHeader";
import { projects } from "../Data";
export default function Projects() {


  return (
    <section className="bg-white py-12">
      <div className="text-center mb-10">
        <PageHeader title="Our Projects" />
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Making an Impact in Agriculture
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
