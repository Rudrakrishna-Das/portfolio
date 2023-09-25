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
          href="https://drive.google.com/u/0/uc?id=1oVofD7-koNFaFlq4hKO2f3rtxOeEgrxM&export=download"
          download
          className="animate-pulse p-3 px-4 border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500"
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
      <div className="hidden md:block md:absolute md:top-80 md:left-0">
        <a
          href="https://www.linkedin.com/in/rudra-krishna-das-7408a0234/"
          target="_blank"
        >
          <img
            className="side w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/Rudrakrishna-Das" target="_blank">
          <img
            className="side w-16 object-contain"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </a>
        <a href="https://twitter.com/RK16996" target="_blank">
          <img
            className="side w-16 object-contain"
            src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
            alt="twitter"
          />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
