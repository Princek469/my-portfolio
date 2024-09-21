import  { useState, useEffect } from 'react';

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white p-2 rounded"
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Mode;
