"use client";

import { useEffect, useState } from "react";

export default function Page({ params: { id } }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const test = await fetch(`https://dummyjson.com/posts/${id}`);
      const res = await test.json();
      setData(res);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className=" rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
          <div className="py-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              {data.title}
            </h5>
            <p className="mb-4 text-base">{data.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
