import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "~ by itzz rio",
};

export default function Articles() {
  return (
    <div className="mx-auto w-full py-32 lg:px-60">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-7xl text-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute object-center h-1/4 w-full right-0 object-cover "
              src={require("/public/videos/blog_tech.mp4")}
            />
            <h1 className="relative py-4 text-3xl font-bold font-serif tracking-tight md:text-4xl text-slate-200">
              Articles on software design, AI tools, and all related Tech.
            </h1>
            <p className="relative text-base font-medium text-cyan-600 dark:text-cyan-400">
              All of my long-form thoughts on programming, leadership, product
              design, and more, collected in chronological order.
            </p>
          </div>
          <div className="pt-28">
            <div className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex flex-col px-3 space-y-16">
                <article className="grid md:grid-cols-4 md:items-baseline">
                  <div className="md:col-span-3 lg:ms-6 group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                      <div className="absolute -inset-x-6 -inset-y-6  scale-95 bg-slate-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl dark:bg-slate-800/50"></div>

                      {/* <span className="  sm:rounded-2xl"></span> */}
                      <span className="relative z-10">
                        Crafting a design system for a multiplanetary future
                      </span>
                    </h2>
                    <time
                      className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-09-05"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>{" "}
                      </span>{" "}
                      "September 5, 2022"
                    </time>
                    <p className=" z-10 mt-2 text-justify text-sm text-zinc-600 dark:text-zinc-400">
                      "Most companies try to stay ahead of the curve when it
                      comes to visual design, but for Planetaria we needed to
                      create a brand that would still inspire us 100 years from
                      now when humanity has spread across our entire solar
                      system."
                    </p>
                    <div
                      aria-hidden="true"
                      className=" z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      <a href="/articles" className="flex items-center">
                        Read article
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <time
                    className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500"
                    dateTime="2022-09-05"
                  >
                    September 5, 2022
                  </time>
                </article>
                <article className="md:grid md:grid-cols-4 md:items-baseline">
                  <div className="md:col-span-3 group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-slate-800/50"></div>
                      <a href="/articles">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Introducing Animaginary: High performance web
                          animations
                        </span>
                      </a>
                    </h2>
                    <time
                      className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-09-02"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      "September 2, 2022"
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      "When you’re building a website for a company as ambitious
                      as Planetaria, you need to make an impression. I wanted
                      people to visit our website and see animations that looked
                      more realistic than reality itself."
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      "Read article"
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <time
                    className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                    dateTime="2022-09-02"
                  >
                    September 2, 2022
                  </time>
                </article>
                <article className="md:grid md:grid-cols-4 md:items-baseline">
                  <div className="md:col-span-3 group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-slate-800/50"></div>
                      <a href="/articles">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Rewriting the cosmOS kernel in Rust
                        </span>
                      </a>
                    </h2>
                    <time
                      className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-07-14"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      "July 14, 2022"
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      "When we released the first version of cosmOS last year,
                      it was written in Go. Go is a wonderful programming
                      language, but it’s been a while since I’ve seen an article
                      on the front page of Hacker News about rewriting some
                      important tool in Go and I see articles on there about
                      rewriting things in Rust every single week."
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <time
                    className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                    dateTime="2022-07-14"
                  >
                    July 14, 2022
                  </time>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
