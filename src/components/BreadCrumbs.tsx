import Link from "next/link";

export default function BreadCrumbs() {
  return (
    <div>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex">
          <li>
            <Link
              href="/home"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary transition duration-150 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
              /
            </span>
          </li>
          <li>
            <Link
              href="/home"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary transition duration-150 ease-in-out"
            >
              Product
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
