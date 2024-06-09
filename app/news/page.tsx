"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface Article {
  news_category: string;
  news_category_url: string;
  news_image: string;
  news_time: string;
  news_title: string;
  news_title_url: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://scraper-u7wz.onrender.com/latest_news"
        );
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
        <div className="relative flex flex-col items-center mt-10 md:my-1 ">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm md:text-md font-bold text-slate-900 dark:text-slate-200 ">
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Fintech?url=https://techcrunch.com/category/fintech/"
              >
                Fintech{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Hardware?url=https://techcrunch.com/category/hardware/"
              >
                Hardware{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Startups?url=https://techcrunch.com/category/startups/"
              >
                Startups{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Venture?url=https://techcrunch.com/category/venture/"
              >
                Venture{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/security?url=https://techcrunch.com/category/security/"
              >
                Security{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Artificial-Intelligence?url=https://techcrunch.com/category/artificial-intelligence/"
              >
                AI{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Crypto-Currency?url=https://techcrunch.com/category/cryptocurrency/"
              >
                Crypto{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Apps?url=https://techcrunch.com/category/apps/"
              >
                Apps{" "}
              </Link>
            </li>
            <li className="">
              <Link
                className=" hover:text-cyan-600 hover:dark:text-cyan-400"
                href="news/newsCategory/Events?url=https://techcrunch.com/category/events/"
              >
                Events
              </Link>
            </li>
          </ul>
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
              <Image
                className="object-fill w-full h-full"
                src={article.news_image}
                width="400"
                height="10"
                alt={article.news_title}
              />
              <div className="absolute inset-0 flex flex-col justify-between md:px-4 px-10 py-2 bg-slate-900 bg-opacity-0 hover:bg-opacity-90 text-opacity-0 hover:text-opacity-90 transition duration-300">
                <div className="flex justify-between ">
                  <p className=" text-sm text-start ">{article.news_time}</p>
                  <p className=" text-sm text-end ">
                    <Link
                      href={`news/newsCategory/${article.news_category}?url=${article.news_category_url}`}
                    >
                      {article.news_category}
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center hover:scale-110 transition duration-1000">
                  <Link
                    href={`news/${article.news_title}?url=${article.news_title_url}`}
                  >
                    <h2 className="text-xl font-serif font-semibold">
                      {article.news_title}
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
        </div>
      )}
    </div>
  );
}
