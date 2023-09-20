import Link from "next/link";

const HomePage = () => {
  return (
    <section id="home" className="text-center w-full mb-32 pt-32 pb-0">
      <h1 className="text-7xl font-extrabold ">HI, I AM RUDRA KRISHNA DAS</h1>
      <p className="max-w-lg my-8 mx-auto">
        Passionate front-end developer building responsive design and
        pixel-perfect interfaces for better user experiences.
      </p>
      <div className="space-x-2 mt-10">
        <button className="py-3 px-4 border rounded-3xl border-black hover:bg-black hover:text-white transition-all duration-500">
          Hire Me
        </button>
        <button className="p-3 px-4 border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500">
          Download CV
        </button>
      </div>
      <div className="mt-28 mb-0">
        <Link
          href="#project"
          className="py-3 px-8  border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500"
        >
          Projects
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
