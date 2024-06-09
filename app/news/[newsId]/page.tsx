"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  news_category: string;
  news_category_url: string;
  news_date: string;
  news_image: string;
  news_title: string;
  paragraphs: { paragraph: string }[]; // Updated to match the structure of the data
}

export default function NewsId({ params }: { params: { newsId: string } }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // State to store error message

  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const apiUrl = "https://scraper-u7wz.onrender.com/articles";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?url=${url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data"); // Throw an error if response is not ok
        }
        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);
        if ("error" in jsonData) {
          throw new Error(jsonData.error); // Throw an error if API response contains an error message
        }
        if (Array.isArray(jsonData)) {
          setArticles(jsonData);
        } else {
          setArticles([jsonData]);
        }
        setIsLoading(false);
        setError(null); // Reset error state if data fetching is successful
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError((error as any).message); // Set error message state
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div className="py-28 px-8  relative">
        <div className="grid grid-cols-1 ">
          {/* <div className="flex flex-col justify-center text-center text-wrap">
            {params.newsId}
            {}
          </div> */}
          <div className="grid grid-cols-1 px-1 md:px-30 xl:px-60 ">
            {error ? (
              <div>
                <p>Error: {error}</p>
              </div>
            ) : (
              articles.map((article, index) => (
                <div
                  key={index}
                  className="relative p-4 overflow-hidden rounded-lg shadow-md shadow-slate-600 dark:shadow-slate-100"
                >
                  <div className="flex flex-col px-1 md:px-20">
                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-serif font-semibold text-center  px-4 py-2 md:py-0 ">
                      {article.news_title}
                    </h2>
                    {/* News Category and Date */}
                    <div className="flex flex-row justify-between items-center py-5">
                      <p className="text-sm text-start ">
                        <Link
                          href={`newsCategory/${article.news_category}?url=${article.news_category_url}`}
                          className="text-cyan-500 hover:text-cyan-700"
                        >
                          {article.news_category}
                        </Link>
                      </p>
                      <p className="text-sm text-end ">{article.news_date}</p>
                    </div>
                  </div>
                  {/* News Image */}
                  <div className="px-2 md:px-20 mb-4">
                    <Image
                      className="object-cover w-full h-64 md:h-auto shadow-md shadow-cyan-600 dark:shadow-cyan-100"
                      src={article.news_image}
                      alt={article.news_title}
                      width="800"
                      height="100"
                    />
                  </div>
                  {/* Paragraphs */}
                  <div className="px-1 md:px-14 py-2">
                    {article.paragraphs.map((para, index) => (
                      <p key={index} className="text-sm text-justify mb-4 ">
                        {para.paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))
            )}
            {typeof articles === "object" && !Array.isArray(articles) && (
              <div>
                <p>The data is not an array.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
