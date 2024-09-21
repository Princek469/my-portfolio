import { useParams } from "react-router-dom";
import { skills } from "../utility/constant";

function SkillsTopics() {
  const { id } = useParams();
  const skill = skills.find((skill) => skill.id.toString() === id);

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen mt-10 px-4">
      {skill ? (
        <div className="bg-gray-300 text-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out max-w-xl w-full p-6">
          <div className="flex flex-col mt-5 items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-20 mb-6 animate-bounce"
            />
            <h2 className="text-4xl font-bold text-black mb-4 text-center">
              {skill.name}
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {skill.topics.map((topic, index) => (
              <li
                key={index}
                className="text-black hover:text-blue-600 transform hover:translate-x-1 transition-all duration-200 ease-in-out"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-red-500 text-lg">Skill not found!</p>
      )}
    </div>
  );
}

export default SkillsTopics;
