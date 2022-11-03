import Link from 'next/link';

type MenuProps = {
  title: string;
  page: string;
};
const menus: MenuProps[] = [
  { title: 'Transaction', page: '/transaction' },
  { title: 'Master', page: '/master' },
  { title: 'Report', page: '/report' },
];

export default function NavBarComponent() {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 shadow-sm bg-opacity-70 backdrop-filter-blur mb-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto md:w-10/12 px-2 md:px-0">
        <div className="flex flex-1 px-2 items-center">
          <a href="https://flowbite.com/" className="flex items-center">
            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-logo text-3xl text-gray-800 dark:text-gray-300">
                A
              </span>
            </div>
          </a>
        </div>

        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 md:mr-5"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.page}
                  className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-gray-700 hover:md:text-primary md:p-0 dark:text-white transition"
                  aria-current="page"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
