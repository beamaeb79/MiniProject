//หากเข้าที่ /foo โดยที่ยังไม่ Login จะ Redirect ไปให้ Login ก่อน แต่ถ้า Login แล้ว ก็จะแสดงข้อความคำว่า  Foo

// import Link from "next/link";

const Navbar = () => (


  // <nav className="Nav">
  //   <div class="container flex flex-wrap justify-between items-center mx-auto">
  //     <a href="/" class="flex items-center">
  //       <span class="selt-right text-xl font-semibold whitespace-nowrap dark:text-white">
  //         DINO CAT
  //       </span>
  //     </a>

  //     <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
  //       <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
  //         <li>
  //           <a
  //             href="/"
  //             class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Home
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="/productII"
  //             class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  //           >
  //             Product
  //           </a>
  //         </li>

  //         <li>
  //           <a
  //             href="/register"
  //             class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Register
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="/login"
  //             class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Login
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="/logout"
  //             class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  <nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-6">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
    >
      <div class="pl-4 flex items-center">
        <a
          class="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <svg
            class="h-6 w-6 inline-block fill-current text-yellow-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
          </svg>
          DINO CAT
        </a>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/"
            >Home</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/productII"
            >Product</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="register"
            >Register</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="login"
            >Login</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="logout"
            >Logout</a
            >
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
);

export default Navbar;