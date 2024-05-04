import Link from 'next/link';

interface ArticleProps {
  title: string;
  id: number;
  body?: string;
  key: number;
}

export default function Article({ title, id, body }: ArticleProps) {
  return (
    <Link href={`/blogs/${id}`} className="bg-gray rounded-lg shadow-md hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
}
