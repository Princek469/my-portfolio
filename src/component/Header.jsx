import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const text = "MY-PORTFOLIO";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State to handle dark mode

  useEffect(() => {
    let timeout;

    // Handle the typing effect
    if (!isErasing && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 500);
    } else if (isErasing && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 500);
    } else if (index === text.length) {
      setTimeout(() => setIsErasing(true), 1000);
    } else if (index === 0 && isErasing) {
      setIsErasing(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isErasing, text]);

  // Set up dark mode by toggling between classes on the root document element
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    // Change background color of body based on dark mode state
    if (darkMode) {
      document.body.style.backgroundColor = "#1A202C"; // dark background
    } else {
      document.body.style.backgroundColor = "#F7FAFC"; // light background
    }
  }, [darkMode]);

 

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav
        className={`border-gray-200 px-4 py-5 lg:px-6 transition-colors duration-300 ease-in-out ${
          darkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a to="/" className="flex items-center">
            <h1
              className="text-5xl tracking-wider font-Suse relative right-28 font-bold text-transparent
              bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-900 
              dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 animate-gradient-slow drop-shadow-lg"
            >
              {displayedText}
            </h1>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center ml-6 lg:w-auto lg:order-1">
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 dark:text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 dark:text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 dark:text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/certificates"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 dark:text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 font-Suse font-bold text-xl border-b-2 border-transparent lg:border-none duration-200 ${
                      isActive
                        ? "text-red-600 dark:text-red-600 border-lightBlue-400"
                        : "text-black dark:text-white hover:text-red-600 hover:underline hover:border-lightBlue-400"
                    }`
                  }
                >
                  Contacts
                </NavLink>
              </li>
              {/* Repeat for other nav links */}
            </ul>

           

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 relative   left-24  rounded-full shadow-lg transition duration-300"
            >
              <img
                src={
                  darkMode
                    ? "/public/assets/images/light.webp"
                    : "/public/assets/images/dark.png"
                }
                alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="h-12 w-12  rounded-full" // Adjust the size as needed
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
