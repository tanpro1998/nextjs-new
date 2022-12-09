import React from "react";
import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

const NewCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
