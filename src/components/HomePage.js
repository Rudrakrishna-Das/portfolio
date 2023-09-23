import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const HomePage = () => {
  return (
    <section id="home" className="text-center w-full mb-32 pt-32 pb-0">
      <h1 className="text-7xl font-extrabold ">HI, I AM RUDRA KRISHNA DAS</h1>
      <p className="max-w-lg my-8 mx-auto text-lg font-medium">
        Passionate front-end developer building responsive design and
        pixel-perfect interfaces for better user experiences.
      </p>
      <div className="space-x-2 mt-10">
        <Link
          href="#contact"
          className="py-3 px-8 border rounded-3xl border-black hover:bg-black hover:text-white transition-all duration-500"
        >
          Hire Me
        </Link>
        <Link
          href="https://drive.google.com/u/0/uc?id=1cvNyRJCx-9LpzE0jW0lTXdPh3a7hAKYE&export=download"
          className="p-3 px-4 border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500"
        >
          Download CV
        </Link>
      </div>
      <div className="mt-28 mb-0">
        <Link
          href="#project"
          className="py-3 px-8  border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500"
        >
          Projects
        </Link>
      </div>
      <ul className="hidden md:block md:absolute md:top-80 md:left-0">
        <li className="side">
          <a
            className="max-w-20"
            href="https://github.com/Rudrakrishna-Das"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          </a>
        </li>
        <li className="side">a</li>
        <li className="side">a</li>
      </ul>
    </section>
  );
};

export default HomePage;
