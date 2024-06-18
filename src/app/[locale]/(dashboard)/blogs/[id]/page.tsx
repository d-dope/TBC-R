"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogById } from "../../../../../../api";
import SingleBlogView from "../../../../components/SingleBlogView";

interface Blog {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  // Add other fields if necessary
}

const BlogDetail = () => {
  const params = useParams();
  const { id } = params as { id: string }; // Type assertion for id
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const data = await getBlogById(id);
          if (data) {
            setBlog(data);
          } else {
            setError("Blog not found");
          }
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch blog");
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <SingleBlogView blog={blog} />;
};

export default BlogDetail;
