"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface Article {
  category: string;
//   category_url: string;
  image: string;
  paragraph: string;
  title: string;
  title_url: string;
}

export default function NewsCategoryId({
  params,
}: {
  params: { newsCategoryId: string };
}) {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const apiUrl = "http://127.0.0.1:5000/category"; // Replace with your Flask API URL
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?url=${url}`);
        const jsonData = await response.json();
        console.log("Fetched data:", jsonData); // Log the fetched data
        setArticles(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return (
    <>
      <div className="py-28 px-8 lg:px-20">
        <div className="grid justify-center text-center ">
          <h1 className="relative py-4 text-3xl font-bold font-serif tracking-tighter sm:text-4xl text-zinc-100 ">
            {params.newsCategoryId}
          </h1>
          <p className="relative mb-16 text-base font-medium text-cyan-600 dark:text-cyan-400">
            Highlight news - {params.newsCategoryId}.
          </p>
        </div>
      </div>
      {isLoading ? (
        <div className="grid justify-center items-center h-80">
          <ClipLoader color="#36D7B7" loading={isLoading} size={70} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 gap-10 pt-10 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border text-white border-transparent border-t-cyan-500 border-t-2 shadow-md shadow-slate-600 dark:shadow-slate-100 aspect-video"
            >
              <img
                className="object-fill w-full h-full"
                src={article.image}
                alt={article.title}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
