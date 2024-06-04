import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech-News Category",
  description: "~ by itzz rio",
};

export default function NewsCategory() {
  return (
    <>
      <div className=" mx-auto w-full py-32 lg:px-60">
        <i>
          <b>
            <q>News Category page</q>
          </b>
        </i>
      </div>
    </>
  );
}
