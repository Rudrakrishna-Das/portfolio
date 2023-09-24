import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="text-white bg-black p-10 py-12">
      <div className="md:flex md:justify-between mt-9 mx-16">
        <div className="space-y-1">
          <h1 className="mb-5 text-3xl font-extrabold">RUDRA KRISHNA DAS</h1>
          <p className="text-sm">
            Passionate frontend developer with a flair for creating elegant user
            interfaces
          </p>
          <p className="text-xs">
            Dedicated to delivering exceptional user experiences through
            clean,efficient code and pixel-perfect designs.
          </p>
        </div>
        <div className="text-center lg:text-left font-extrabold text-lg mt-2">
          <h1>SOCIAL</h1>
          <div className="flex space-x-4 mt-2 justify-center">
            <div className="w-6 animate-pulse hover:w-8 transition-all duration-500">
              <a href="https://github.com/Rudrakrishna-Das" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
              </a>
            </div>
            <div className="w-6 animate-pulse hover:w-8 transition-all duration-500">
              <a
                href="https://www.linkedin.com/in/rudra-krishna-das-7408a0234/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </div>
            <div className="w-6 animate-pulse hover:w-8 transition-all duration-500">
              <a href="https://twitter.com/RK16996" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-[rgba(255,255,255,0.2)] py-10"></div>
      <p className="text-center text-xs mt-5">
        &copy; Copyright 2023. Made by Rudra Krishna Das
      </p>
    </section>
  );
};

export default Footer;
