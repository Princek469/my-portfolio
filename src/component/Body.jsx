import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Body() {
  const roles = ["Frontend Developer", "Software Developer", "React Developer"];

  const [displayedText, setDisplayedText] = useState(""); // State to track displayed text
  const [index, setIndex] = useState(0); // State to track current index
  const [currentRole, setCurrentRole] = useState(roles[0]); // State for the current role
  const [roleIndex, setRoleIndex] = useState(0); // State to track the current role index

  useEffect(() => {
    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentRole[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }

    const roleTimeout = setTimeout(() => {
      const nextRoleIndex = (roleIndex + 1) % roles.length;
      setCurrentRole(roles[nextRoleIndex]);
      setDisplayedText("");
      setIndex(0);
      setRoleIndex(nextRoleIndex);
    }, 2000);

    return () => clearTimeout(roleTimeout);
  }, [index, roleIndex, currentRole, roles]);

  return (
    <div className="pt-[120px] bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Updated background color class with light (gray-100) and dark mode (gray-900) */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-5 sm:flex-row items-center justify-between">
          <div className="max-w-xl space-y-5 text-center sm:text-left sm:mr-10">
            <h2 className="text-5xl tracking-wide font-Suse text-gray-900 dark:text-white font-bold leading-tight">
              Prince Kumar Jha
            </h2>
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:tracking-wider leading-tight">
              <span className="text-blue-500 dark:text-blue-400 font-semibold">
                I Am A
              </span>{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500">
                {displayedText}
              </span>
            </h3>

            <p className="text-lg sm:text-xl text-gray-900 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">I am a Dedicated</span> Front-End
              Developer with a passion for crafting responsive and user-friendly
              interfaces.{" "}
              <span className="text-red-500 dark:text-red-400 font-semibold">
                I strive to create seamless and engaging experiences.
              </span>{" "}
              Let's create something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <a
                href="/certificates"
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-600 dark:to-yellow-600 rounded-lg hover:opacity-75 mb-3 sm:mb-0"
              >
                Achievements
              </a>
              <a
                href="/images/prince_resumes.pdf"
                target="_blank"
                className="inline-flex cursor-pointer text-white items-center px-6 py-3 font-medium bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-600 dark:to-yellow-600 rounded-lg hover:opacity-75"
              >
                𝙍𝙚𝙨𝙪𝙢𝙚
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <img
              src="/images/home-main.svg"
              alt="Profile Illustration"
              className="w-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
