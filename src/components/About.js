const About = () => {
  return (
    <section className="max-h-[20rem] mx-8 lg:flex  lg:justify-between m-3 space-x-4">
      <div className=" w-full h-60 overflow-y-auto mb-10">
        <h1 className="text-center lg:text-left text-2xl font-extrabold mb-3">
          Discover Me!
        </h1>
        <p>
          I'm a{" "}
          <span className="text-gray-600 font-extrabold">
            FRONT-END WEB DEVELOPER
          </span>
          , building websites. Feel free to check out some of my works in{" "}
          <span className="text-gray-600 font-extrabold">Project</span> section.
        </p>
        <br />
        <p>
          I'm open to <span className="text-gray-600 font-extrabold">Job</span>{" "}
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills feel free to{" "}
          <span className="text-gray-600 font-extrabold">contact</span> with me.
        </p>
      </div>
      <div>
        <h1 className="text-center text-2xl font-extrabold mb-3">My Skills</h1>
        <ul className="overflow-y-auto h-44 flex flex-wrap w-full">
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">Tailwind Css</li>
          <li className="skill">JavaSscript</li>
          <li className="skill">React</li>
          <li className="skill">Next.js</li>
          <li className="skill">GitHub</li>
          <li className="skill">Resposive Design</li>
        </ul>
      </div>
    </section>
  );
};
export default About;
