import React from 'react';

export default function ContactPage() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Contact Information:</h2>
        <p className="mb-1">Address: Georgia, Tbilisi</p>
        <p className="mb-1">Email: example@example.com</p>
        <p className="mb-1">Phone: +995 555 444 222</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form:</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name:</label>
            <input className="border rounded w-full py-2 px-3" type="text" id="name" name="name" />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email:</label>
            <input className="border rounded w-full py-2 px-3" type="email" id="email" name="email" />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="message">Message:</label>
            <textarea className="border rounded w-full py-2 px-3" id="message" name="message" rows="4" cols="50"></textarea>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

