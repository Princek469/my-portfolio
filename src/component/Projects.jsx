import { useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        name: "𝐅OOD ORDERING",
        description:
            "A food ordering web app built with React, modern JavaScript, Tailwind CSS, and Redux JS. It includes components for the menu, cart, and order summary. The app manages the state for food items, cart contents, and the total price.",
        skills: "REACT JS, JAVASCRIPT ES6, TAILWIND CSS, REDUX JS",
        projectUrl: "https://github.com/Princek4693/Swiggy-Food-App",
    },
    {
        name: "𝐍ETFLIX-GPT",
        description:
            "Netflix-GPT is a web application that uses Firebase for backend services, including secure authentication and data management. It features a responsive design using React.js and Tailwind CSS. The app also integrates ChatGPT for improved user interaction.",
        skills: "REACT, JAVASCRIPT ES6, TAILWIND CSS, REDUX JS, FIREBASE, FIREBASE HOSTING",
        projectUrl: "https://github.com/Princek4693/Netflix-GPT",
    },
    {
        name: "𝐏ASSWORD GENERATOR",
        description:
            "This Password Generator allows users to create secure passwords with customizable options such as length, uppercase letters, lowercase letters, numbers, and symbols. It includes a copy button, a strength indicator, and a show/hide password option, all designed with a sleek and responsive interface.",
        skills: "HTML, CSS, JAVASCRIPT",
        projectUrl: "https://github.com/Princek4693/Password-Generators",
    },
    {
        name: "MY-PORTFOLIO",
        description:
            "Welcome to my portfolio. I am a Front-End Developer specializing in creating responsive, user-centric web interfaces. This site highlights my key projects, interactive designs, and web applications, reflecting my skills and expertise. Explore my certificates, offer letters, and internship details to understand my professional background. I am eager to collaborate on innovative digital solutions.",
        skills: "REACT JS, JAVASCRIPT, TAILWIND CSS, FIREBASE, HOSTING",
        projectUrl: "https://github.com/Princek232/my-portfolio",
    }
];

function Projects() {
    useEffect(() => {
        // Create script elements
        const moduleScript = document.createElement('script');
        moduleScript.type = 'module';
        moduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

        const nomoduleScript = document.createElement('script');
        nomoduleScript.nomodule = true;
        nomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

        // Append scripts to the head
        document.head.appendChild(moduleScript);
        document.head.appendChild(nomoduleScript);

        // Cleanup function to remove scripts
        return () => {
            document.head.removeChild(moduleScript);
            document.head.removeChild(nomoduleScript);
        };
    }, []);

    return (
        <div className="min-h-screen  text-white  py-10 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-8 cursor-pointer">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 dark:bg-gray-200 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:border-2 hover:border-blue-500 duration-300"
                    >
                        <h2 className="text-3xl font-extrabold mb-4 text-blue-300 dark:text-blue-600">
                            {project.name}
                        </h2>
                        <p className="text-gray-300 dark:text-black mb-4 text-lg leading-relaxed">
                            {project.description}
                        </p>
                        <p className="text-green-400 dark:text-green-500 font-semibold text-md mb-4">
                            Key Skills: <span className="text-yellow-300 dark:text-yellow-500">{project.skills}</span>
                        </p>
                        <Link
                            to={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-gray-200 dark:text-white  bg-blue-500 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-lg flex items-center duration-300"
                        >
                            <ion-icon name="logo-github" size="large" className="mr-2"></ion-icon>
                            View Code on GitHub
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
