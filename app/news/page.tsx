"use client";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface Article {
  title: string;
  category: string;
  paragraph: string;
  image: string;
}
export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/scrape");
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
  }, []);

  return (
    <div className="py-28 px-8 lg:px-20">
      <div className="grid justify-center text-center ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-center h-1/4 w-full right-0 object-cover "
          src={require("/public/videos/blog_tech.mp4")}
        />
        <h1 className="relative py-4 text-3xl font-bold font-serif tracking-tighter sm:text-4xl text-zinc-100 ">
          News Feed
        </h1>
        <p className="relative mb-16 text-base font-medium text-cyan-600 dark:text-cyan-400">
          All the latest Tech news, trends of different categories, covering
          from cyber security, AI all to the way to software development.
        </p>
      </div>
      {isLoading ? (
        <div className="grid justify-center items-center h-80">
          <ClipLoader color="#36D7B7" loading={isLoading} size={70} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 gap-10 ">
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
              <div className="absolute inset-0 flex flex-col justify-between md:px-4 px-10 py-2 bg-slate-900 bg-opacity-0 hover:bg-opacity-90 text-opacity-0 hover:text-opacity-90 transition duration-300">
                <div className="flex justify-end ">
                  <p className=" text-sm text-end w-5/6">{article.category}</p>
                </div>
                <div className="flex justify-center hover:scale-110 transition duration-1000">
                  <h2 className="text-xl font-serif font-semibold">
                    {article.title}
                  </h2>
                </div>
                <div className="flex justify-start opacity-0 md:opacity-100 hover:scale-105 transition duration-500">
                  <p className=" text-xs text-justify w-5/6 0">
                    {article.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
