import Link from "next/link";

const About = () => {
  return (
    <>
      <section id="about">
        <h1 className="text-center text-4xl mb-2 font-extrabold underline pt-20">
          Want To Know About Me!
        </h1>
        <p className="text-center mb-10 text-xl font-semibold">
          Here you will find more information about me like what I do or about
          my skills.
        </p>
        <div className="pl-12 bg-transparent md:flex md:justify-around p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray] mx-6">
          <div className=" w-full h-60 overflow-y-auto mb-6">
            <h1 className="-ml-4 md:ml-0 text-center lg:text-left text-2xl font-extrabold mb-3">
              Discover Me!
            </h1>
            <p>
              I'm a{" "}
              <span className="text-gray-600 font-extrabold">
                FRONT-END WEB DEVELOPER
              </span>
              , building websites. Feel free to check out some of my works in{" "}
              <span className="text-gray-600 font-extrabold">Project</span>{" "}
              section.
            </p>
            <br />
            <p>
              I'm open to{" "}
              <span className="text-gray-600 font-extrabold">Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills feel free to{" "}
              <Link
                href="#contact"
                className="text-gray-600 font-extrabold text-xl hover:text-black hover:text-2xl transition-all duration-700 "
              >
                contact
              </Link>{" "}
              with me.
            </p>
          </div>
          <div>
            <h1 className="-ml-4 md:ml-0 text-center text-2xl font-extrabold mb-3">
              My Skills
            </h1>
            <ul className="overflow-y-auto h-25 flex flex-wrap">
              <li className="skill">HTML</li>
              <li className="skill">CSS</li>
              <li className="skill">Tailwind Css</li>
              <li className="skill">JavaSscript</li>
              <li className="skill">React</li>
              <li className="skill">Next.js</li>
              <li className="skill">GitHub</li>
              <li className="skill">Node.js</li>
              <li className="skill">Express.js</li>
              <li className="skill">RestAPI</li>
              <li className="skill">MongoDB</li>
              <li className="skill">Mongoose</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
