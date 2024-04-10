
import Link from 'next/link';

export default function Article({ title, id, body }) {
  return (
    <Link href={`/blogs/${id}`} className="bg-gray rounded-lg shadow-md hover:shadow-lg">

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{body}</p>

      </div>
    </Link>
  );
}