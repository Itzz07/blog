import Link from "next/link";

export default function Footer() {
  let year = new Date();
  let newYear = year.getUTCFullYear();

  return (
    <footer className="flex-none ">
      <div className="px-8 ">
        <div className="mx-auto w-full max-w-7xl">
          <div className="border-t border-slate-300 pb-16 pt-10 dark:border-slate-800">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-slate-900 dark:text-slate-200">
                    <Link
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/articles"
                    >
                      Articles
                    </Link>
                    <Link
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/news"
                    >
                      News
                    </Link>
                    {/* <Link
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/uses"
                    >
                      Uses
                    </Link> */}
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-500">
                    © {newYear} Itzz Rio. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
