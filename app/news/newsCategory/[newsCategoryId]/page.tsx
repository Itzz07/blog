'use client'

import Link from "next/link";
import Image from "next/image";
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
  const apiUrl = "https://scraper-u7wz.onrender.com/category"; // Replace with your Flask API URL
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
          <p className="relative text-base font-medium text-cyan-600 dark:text-cyan-400">
            Highlight news - {params.newsCategoryId}.
          </p>
        </div>
      </div>
      {isLoading ? (
        <div className="grid justify-center items-center h-80">
          <ClipLoader color="#36D7B7" loading={isLoading} size={70} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 gap-10 px-10 xl:px-40">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border text-white border-transparent border-t-cyan-500 border-t-2 shadow-md shadow-slate-600 dark:shadow-slate-100 aspect-video"
            >
              <Image
                className="object-fill w-full h-full"
                src={article.image}
                alt={article.title}
              />
              <div className="absolute inset-0 flex flex-col justify-between md:px-4 px-10 py-2 bg-slate-900 bg-opacity-0 hover:bg-opacity-90 text-opacity-0 hover:text-opacity-90 transition duration-300">
                <div className="flex justify-between ">
                  {/* <p className=" text-sm text-start ">{article.time}</p> */}
                  <p className=" text-sm text-end ">{article.category}</p>
                </div>
                <div className="flex justify-center hover:scale-110 transition duration-1000">
                  <Link
                    href={`../../news/${article.title}?url=${article.title_url}`}
                  >
                    <h2 className="text-xl font-serif font-semibold">
                      {article.title}
                    </h2>
                  </Link>
                </div>
                {/* <div className="flex justify-start opacity-0 md:opacity-100 hover:scale-105 transition duration-500">
                  <p className=" text-xs text-justify w-5/6 0">
                    {article.paragraph}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
          {typeof articles === "object" && !Array.isArray(articles) && (
            <div>
              <p>The data is not an array.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
