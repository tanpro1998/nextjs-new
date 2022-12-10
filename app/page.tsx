import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

const HomePage = async () => {
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));
  console.log(news);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
