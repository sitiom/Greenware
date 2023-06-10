import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="sticky bg-slate-100 shadow-sm dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
            <h2 className="text-xl font-bold">Sign up for our newsletter</h2>
            <form className="mt-6 sm:flex">
              <div>
                <Input
                  name="email-address"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                <Button type="button" className="w-full px-6">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-white">
              Resources
            </p>
            <div className="mt-5 flex flex-col items-start space-y-4">
              <Link
                href="/get-started"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Get started
              </Link>
              <Link
                href="/templates"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Templates
              </Link>
              <Link
                href="/tutorial"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Tutorial
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-white">
              Community
            </p>
            <div className="mt-5 flex flex-col items-start space-y-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Facebook
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-white">
              Sponsor us
            </p>
            <div className="mt-5 flex flex-col items-start space-y-4">
              <a
                href="https://www.paypal.me/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                PayPal
              </a>
              <a
                href="https://patreon.com/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Patreon
              </a>
              <a
                href="https://www.buymeacoffee.com/"
                target="_blank"
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
              >
                Buy me a Coffee
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100 dark:border-gray-700 md:my-8 2xl:my-10" />
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <Link href="/">
            <img
              className="h-6 w-auto lg:h-7"
              src="/images/logo-banner.png"
              alt="Logo"
            />
          </Link>
          <p className="text-center text-sm text-gray-500">© 2023 Greenware.</p>
        </div>
      </div>
    </footer>
  );
}
