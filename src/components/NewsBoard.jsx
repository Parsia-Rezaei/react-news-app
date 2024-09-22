import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

// eslint-disable-next-line react/prop-types
export default function NewsBoard({category}) {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c9df0b3571774b2d98691101accdf0b2`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles))
  }, [category]);

  return (
    <>
        <div className="container p-4 mt-4">
        <h2 className="text-center">
            Latest
            <span className="badge bg-danger mx-2">News</span>
        </h2>
            <div className="row g-4 mt-4">
                {articles.map((news, index) => {
                    return  <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
                })}
            </div>
        </div>

        {/* <Loader></Loader> */}
    </>
  );
}
