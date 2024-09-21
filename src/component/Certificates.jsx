import { Link } from "react-router-dom";

function Certificates() {

  const certificates = [
    {
      title: "Cyber Security Experience",
      organizationName: "JP Morgan Chase & Co.",
      url: "/public/assets/images/cyber_security.pdf",
    },
    {
      title: "Celonis Academy Process Automation Bootcamp",
      organizationName: "Celonis",
      url: "/public/assets/images/",
    },
    {
      title: "Coders Cub Arena",
      organizationName: "Coding Club",
      url: "/public/assets/images/",
    },
    {
      title: "Coders Cub Arena (Hackearth)",
      organizationName: "Hackearth",
      url: "/public/assets/images/hackerearth.pdf",
    },
    {
      title: "Javascript (Basic)",
      organizationName: "HackerRank",
      url: "/public/assets/images/javascript_basics.pdf",
    },
    {
      title: "Javascript (Intermediate)",
      organizationName: "HackerRank",
      url: "/public/assets/images/javascript_intermediate.pdf",
    },
    {
      title: "Python",
      organizationName: "HackerRank",
      url: "/public/assets/images/python.pdf",
    },
  ];

  const internships = [
    {
      title: "Software Development Intern",
      companyName: "TATA ADVANCE SYSTEM LIMITED",
      duration: "Sep 2024 - Nov 2024",
      location: "Tata Advanced Systems, Plot #C-01, 4th Floor, World Trade Tower, Sector 16, Noida Uttar Pradesh - 201301 India.",
      role: "Worked in the Software Department, contributing to the development of a project over a two-month internship. This involved being physically present at the office for five days a week to ensure the successful completion of the project. Tasks included following security, IT, and admin guidelines, and collaborating with senior staff on assigned tasks. No stipend was provided for this internship.",
      offerLetterUrl: "/public/assets/images/offer_letter.pdf",
    },
  ];
  

  return (
    <div className="container mx-auto p-6 mt-20">
      {/* Certificates Section */}
      <div className="pt-12">
        <h2 className="text-4xl text-yellow-300 font-bold mb-6 border-b-4 border-yellow-300 pb-2">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl text-white dark:text-black font-bold mb-2">
                {cert.title}
              </h3>
              <p className="text-lg text-gray-300 dark:text-gray-700 font-bold ">{cert.organizationName}</p>
              <Link
                to={cert.url}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300"
              >
                View Certificate
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Section */}
      <div className="pt-12 ">
        <h2 className="text-4xl text-yellow-300 font-bold mb-6 border-b-4 border-yellow-300 pb-2">
          Internship Experience
        </h2>
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-gray-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl text-green-500 dark:text-orange-600 font-semibold mb-2">
              {internship.companyName}
            </h3>
            <p className="text-lg text-white font-bold dark:text-black mb-2">{internship.title}</p>
            <p className="text-md text-gray-400 font-bold dark:text-black mb-4"><span className="text-yellow-200 dark:text-red-600 font-bold">Duration : </span> {internship.duration}</p>
            <p className="text-md dark:text-black font-bold text-gray-400"><span className="text-yellow-300 dark:text-red-600 font-bold">Location : </span>{internship.location}</p>

            <div className="mt-4 text-md font-bold dark:text-black text-gray-400">
              <p>{internship.role}</p>
            </div>

            <Link
              to={internship.offerLetterUrl}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300"
            >
              View Offer Letter
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
