import { skills } from "../utility/constant";

function Skills() {
  return (
    <div className="py-16">
      <div className="container py-28 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="bg-gray-700 dark:bg-white  rounded-lg shadow-lg p-8 cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105  hover:shadow-2xl duration-300 ease-in-out"
            >
              {/* <Link to={`/skills/topic/${skill.id}`}> */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-2 mx-auto animate-bounce"
                />
                <h2 className="text-lg text-center dark:text-black font-semibold text-white">
                  {skill.name}
                </h2>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
