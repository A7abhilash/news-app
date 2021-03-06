import { useState } from "react";

export default function useFetch(urlDetails) {
  console.log(urlDetails);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const { category, query } = urlDetails;

  let BASEURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=264566d820904491b7a1bcc3c3659cb9`;

  if (query) {
    BASEURL = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=264566d820904491b7a1bcc3c3659cb9`;
  }
  if (category) {
    BASEURL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=264566d820904491b7a1bcc3c3659cb9`;
  }

  //   setLoading(true);
  //   setError(false);
  //   setResults([]);
  fetch(BASEURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  return [loading, error, results];
}
