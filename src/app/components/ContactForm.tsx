"use client";

import { useTranslations } from "next-intl";
import { useState, ChangeEvent, FormEvent } from "react";
import { sendContactMessage } from "../../../actions";
import Notification from "./Notification";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactMessage(formData);
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-MainBgColor dark:bg-primaryGray"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-primaryGray dark:text-gray-200"
            >
              {t("Name:")}
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white/5 dark:bg-primaryGray px-3.5 py-2 text-primaryGray dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:focus:ring-primaryColor"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold leading-6 text-primaryGray dark:text-gray-200"
            >
              {t("LastName:")}
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                value={formData.lastname}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white/5 dark:bg-primaryGray px-3.5 py-2 text-primaryGray dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:focus:ring-primaryColor"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-primaryGray dark:text-gray-200"
            >
              {t("Email:")}
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white/5 dark:bg-primaryGray px-3.5 py-2 text-primaryGray dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:focus:ring-primaryColor"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-primaryGray dark:text-gray-200"
            >
              {t("Phone:")}
            </label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white/5 dark:bg-primaryGray px-3.5 py-2 text-primaryGray dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:focus:ring-primaryColor"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-primaryGray dark:text-gray-200"
            >
              {t("Message:")}
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white/5 dark:bg-primaryGray px-3.5 py-2 text-primaryGray dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 dark:focus:ring-primaryColor"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-primaryColor px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor dark:bg-primaryColor dark:hover:bg-primaryColor dark:focus-visible:outline-primaryColor"
          >
            {t("Send:")}
          </button>
        </div>
        {status === "loading" && (
          <p className="mt-4 text-primaryGray dark:text-gray-200">Sending...</p>
        )}
        {status === "success" && <Notification />}
        {status === "error" && (
          <p className="mt-4 text-red-600 dark:text-red-400">
            Error sending message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
