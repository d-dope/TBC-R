"use client";

import { useEffect, useState } from "react";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  params: {
    id: number;
  };
}

const Page: React.FC<PageProps> = ({ params: { id } }) => {
  const [data, setData] = useState<Post>({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const postData: Post = await response.json();
        setData(postData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
        <div className="py-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">{data.title}</h5>
          <p className="mb-4 text-base">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
