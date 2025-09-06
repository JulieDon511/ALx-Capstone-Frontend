export default function SummaryCard({ title, items, links }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2 text-green-600">{title}</h2>
      <ul className="space-y-1 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {links && (
          <li className="mt-2 space-x-4">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="text-blue-600 underline">
                {link.label}
              </a>
            ))}
          </li>
        )}
      </ul>
    </div>
  );
}
