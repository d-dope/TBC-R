import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getSession();
  return (
    <div className="bg-MainBgColor dark:bg-black">
      <div className="sm:flex sm:p-6 sm:mx-auto sm:max-w-7xl sm:justify-center gap-x-32 flex items-center">
        <div className="sm:rounded-full hidden sm:flex items-center justify-center py-44">
          <div className="rounded-full overflow-hidden object-cover mb-32">
            <Image
              src={session?.user.picture}
              alt=""
              height={300}
              width={200}
            />
          </div>
        </div>
        <form className="p-3">
          <div className="space-y-12 p-3">
            <div className="border-b border-white/10 mt-20 sm:mt-0 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-700 dark:text-gray-200">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-200"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={session?.user.given_name}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border px-3.5 py-2 text-gray-700 dark:text-gray-200 bg-white/5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:bg-primaryGray"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-200"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={session?.user.family_name}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border px-3.5 py-2 text-gray-700 dark:text-gray-200 bg-white/5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:bg-primaryGray"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-200"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={session?.user.email}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border px-3.5 py-2 text-gray-700 dark:text-gray-200 bg-white/5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:bg-primaryGray"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor dark:bg-primaryColor dark:hover:bg-primaryColor dark:focus-visible:outline-primaryColor"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
