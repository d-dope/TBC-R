import Link from "next/link";

export default function CancelPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-black py-52 h-screen">
        <div className="bg-white dark:bg-primaryGray p-6 md:mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-red-600 dark:text-red-500 w-16 h-16 mx-auto my-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 dark:text-gray-100 font-semibold text-center">
              Payment Cancelled!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              Failed online payment.
            </p>
            <div className="py-10 flex justify-center text-center">
              <Link href="/products">
                <p className="px-12 bg-primaryColor hover:opacity-85 text-white font-semibold py-3 rounded-lg dark:bg-primaryDarkColor dark:hover:opacity-75">
                  BACK TO PRODUCTS
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
