

const AboutMe = ({ darkMode }) => {

  return (
    <div className="container mx-auto pt-14 md:p-6 lg:p-12">
      <div className="flex pt-20 gap-3 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <img
            src="/public/prince-logo.jpg"
            alt="About Me Image"
            className="rounded-full p-8 h-[375px] w-[375px] shadow-md mt-16 mx-auto border-4 border-green-500 animate-slow-bounce"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4">
          <p className={`text-lg font-bold dark:text-white leading-relaxed py-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            As a highly motivated and dedicated individual, I am passionate about building innovative solutions that drive positive change. With a strong foundation in computer science, I have developed a unique blend of technical and creative skills that enable me to approach complex problems from multiple angles.
          </p>
          <p className={`text-lg font-bold dark:text-white leading-relaxed py-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            Throughout my academic and professional journey, I have consistently demonstrated my ability to work effectively in fast-paced environments, prioritizing tasks and managing multiple projects simultaneously. My strong work ethic and attention to detail have earned me a reputation as a reliable and efficient team player.
          </p>
          <p className={`text-lg font-bold dark:text-white leading-relaxed py-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            I am currently seeking opportunities to leverage my skills and experience to drive growth and innovation in a dynamic and forward-thinking organization. With a strong passion for learning and a keen eye for detail, I am confident in my ability to make a meaningful contribution to any team.
          </p>
        </div>
      </div>

      <div className="flex justify-between p-6">
        <div className="pt-12 w-[500px]">
          <h2 className="text-4xl text-yellow-300 font-bold mb-6 border-b-4 border-black dark:border-white pb-2">
            Education
          </h2>
          <div className={`p-6 bg-gray-600 dark:bg-white rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className={`mb-6 border-b pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <h3 className="text-xl text-yellow-300 font-semibold mb-2">𝙂𝙖𝙡𝙜𝙤𝙩𝙞𝙖𝙨 𝙐𝙣𝗶𝙫𝙚𝙧𝙨𝗶𝙩𝙮</h3>
              <p className={`text-lg text-white font-bold dark:text-black ${darkMode ? 'text-white' : 'text-black'}`}>
                𝘊𝘶𝘳𝘳𝗲𝗻𝘁𝗹𝘆 𝘱𝘶𝘳𝘴𝘶𝘪𝘯𝗴 𝘉.𝘛𝘦𝘤𝗵 𝘐𝗻 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘚𝘤𝗶𝘦𝗻𝗰𝘦 𝘌𝗻𝗴𝗂𝗻𝗲𝗲𝗿𝗂𝗻𝗴. 𝘌𝘹𝘱𝘦𝘤𝘵𝗲𝘵 𝘁𝗼 𝘨𝘳𝘢𝘥𝘶𝘢𝘵𝗲 𝘪𝘯 2025.
              </p>
            </div>
            <div className={`mb-6 border-b pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <h3 className="text-xl text-yellow-300 font-semibold mb-2">𝙉𝙞𝙡𝙡 𝙂𝙞𝙧𝙞 𝙃𝙞𝙡𝙡𝙨 𝙋𝙪𝙗𝗅𝗂𝙘 𝙎𝙘𝙝𝙤𝙤𝙡</h3>
              <p className={`text-lg text-white font-bold dark:text-black ${darkMode ? 'text-white' : 'text-black'}`}>
                𝘊𝘰𝘮𝘱𝘭𝘦𝘵𝗲𝘥 12𝘁𝗵 𝘎𝘳𝘢𝘥𝗲 𝘄𝗂𝘵𝗵 𝘢 𝘱𝘦𝘳𝘤𝗲𝗻𝘁𝗮𝗴𝗘 85% 𝘐𝘯 2021.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-yellow-300 font-semibold mb-2">𝙎. 𝙂𝙮𝙖𝙣 𝘽𝙝𝙖𝙧𝙩𝗂 𝙋𝙪𝙗𝗅𝗶𝙘 𝙎𝙘𝙝𝙤𝙤𝙡</h3>
              <p className={`text-lg text-white font-bold dark:text-black ${darkMode ? 'text-white' : 'text-black'}`}>
                𝘊𝘰𝘮𝘱𝘭𝘦𝘵𝗲𝘴 10𝘵𝗵 𝘎𝘳𝘢𝘥𝗲 𝘄𝗂𝘵𝗵 𝘢 𝘱𝘦𝘳𝘤𝗲𝗻𝘁𝗮𝗴𝗘 75% 𝘐𝘯 2019.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
