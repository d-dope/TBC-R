export default function Cart() {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          My Cool Ordered List
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="p-2 bg-indigo-100 rounded-lg shadow-sm transition transform hover:scale-105">
            <span className="font-medium text-indigo-800">First Item</span>
            <p className="text-sm text-gray-600">
              This is a description for the first item.
            </p>
          </li>
          <li className="p-2 bg-indigo-200 rounded-lg shadow-sm transition transform hover:scale-105">
            <span className="font-medium text-indigo-800">Second Item</span>
            <p className="text-sm text-gray-600">
              This is a description for the second item.
            </p>
          </li>
          <li className="p-2 bg-indigo-300 rounded-lg shadow-sm transition transform hover:scale-105">
            <span className="font-medium text-indigo-800">Third Item</span>
            <p className="text-sm text-gray-600">
              This is a description for the third item.
            </p>
          </li>
          <li className="p-2 bg-indigo-400 rounded-lg shadow-sm transition transform hover:scale-105">
            <span className="font-medium text-indigo-800">Fourth Item</span>
            <p className="text-sm text-gray-600">
              This is a description for the fourth item.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
