import { useEffect, useState } from "react";
import { API_KEY } from "../api";

export default function FetchNews(urlDetails) {
  // console.log(urlDetails);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const { category, query } = urlDetails;

  let BASEURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

  if (query) {
    BASEURL = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`;
  }
  if (category) {
    BASEURL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;
  }

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResults([]);

    fetch(BASEURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === "ok") {
          setResults(data.articles);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [category, query]);
  return [loading, error, results];
}
