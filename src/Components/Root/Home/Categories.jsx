import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <span className="loading loading-infinity loading-xl"></span>;

  const trending = [...apps].sort((a, b) => b.rating - a.rating).slice(0, 4);

  const categories = ['Education', 'Healthcare', 'Productivity', 'Gaming'];

//   show download
const formatDownloads = (num) => {
    return num >= 1_000_000
      ? (num / 1_000_000).toFixed(1) + 'M+'
      : (num / 1_000).toFixed(1) + 'K+';
  };

  const renderApps = (apps) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {apps.map(app => (
        <div key={app.id} className="border-blue-500 border-1 p-4 rounded shadow">
          <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover rounded" />
          <div className='flex justify-between items-center'>
          <h3 className="text-lg font-bold mt-2">{app.name}</h3>
          <p className="text-sm mt-2 text-gray-600">⭐ {app.rating}</p>
          </div>
          <p> {formatDownloads(app.downloads)}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-10 space-y-10">
      {/* Trending Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Trending Apps</h2>
        {renderApps(trending)}
      </section>

      {/* Category Sections */}
      {categories.map(category => (
        <section key={category}>
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          {renderApps(apps.filter(app => app.category === category))}
        </section>
      ))}

    </div>
  );
};


export default Categories;
