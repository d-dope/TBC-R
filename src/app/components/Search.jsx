'use client'
export default function Search() {
    

    return (
        <>
                   <div class="flex items-center justify-center mx-8 mt-4 md:h-32 rounded-3xl bg-indigo-500">
  <div class="flex flex-col md:flex-row">
    <input 
      type="text" 
      placeholder="Search..." 
      class="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <button 
      class="mt-4 md:mt-0 ml-0 md:ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Search
    </button>
  </div>
</div>
        </>
    )
}
