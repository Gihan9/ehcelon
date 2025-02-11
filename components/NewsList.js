import { useEffect, useState } from "react";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();

        if (response.ok) {
          setNews(data.articles);
        } else {
          setError(data.message || "Failed to load news");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-md" />
          )}
          <h2 className="text-xl font-bold mt-2">{article.title}</h2>
          <p className="text-gray-500">{article.author || "Unknown Author"}</p>
          <p className="mt-2">{article.description}</p>
        </div>
      ))}
    </div>
  );
}
