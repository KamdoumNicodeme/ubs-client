function Navbar() {

    const handleClick = () => {
        menu().classList.toggle("hidden");
    };

    const menu = () => document.querySelector('.mobile-menu')


    return (
        <div>
            <nav className="bg-white my-0">
                <div className="max-w6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <div className="px-4 py-5">
                                <a href="/" className=" flex items-center  py-auto px-2 text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-400"
                                         fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                                    </svg>
                                    <span className="font-bold"> <h1 className="text-2xl">Ubs Shop</h1></span>
                                </a>
                            </div>

                            <div className="hidden md:flex items-center py-auto space-x-1">
                                <a href="#" href="#"
                                   className="py-5 px-2 text-gray-700  hover:text-gray-900">Features</a>
                                <a href to="#" className="py-5 px-2 text-gray-700  hover:text-gray-900">Pricing</a>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center py-auto space-x-1 px-10 ">
                            <a href="/login" className="py-5 px-3 text-xs">REGISTER</a>
                            <a href="/register"
                               className="py-2 px-3  bg-purple-600 text-white rounded hover:bg-purple-400 transition duration-300 text-xs">SIGN
                                IN</a>

                            <span className="relative inline-block">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
  <span
      className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full">10</span>
</span>


                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="menu-mobile-button" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="mobile-menu hidden md:hidden">
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                </div>


            </nav>

        </div>

    );

}

export default Navbar;