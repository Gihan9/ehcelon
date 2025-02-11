export default async function handler(req, res) {
    try {
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  