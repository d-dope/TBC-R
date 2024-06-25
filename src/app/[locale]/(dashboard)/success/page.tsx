import Link from "next/link";
import EmptyCardOnSuccess from "../../../components/EmptyCardOnSuccess";

export default function SuccessPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-black py-52 h-screen">
        <div className="bg-white dark:bg-primaryGray p-6 md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 dark:text-green-500 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 dark:text-gray-100 font-semibold text-center">
              Payment Done!
            </h3>
            <EmptyCardOnSuccess />
            <p className="text-gray-600 dark:text-gray-400 my-2">
              Thank you for completing your secure online payment.
            </p>
            <div className="flex justify-center mt-5 text-center">
              <Link href="/products">
                <p className="px-12 bg-primaryColor dark:bg-primaryDarkColor hover:opacity-85 dark:hover:opacity-75 text-white font-semibold py-3 rounded-lg">
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
