const HomePage = () => {
  return (
    <section className="text-center w-full mx-auto mt-40 h-[31rem]">
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

      <button className=" mt-24 w-52 p-3  px-4 border rounded-3xl bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500">
        Projects
      </button>
    </section>
  );
};

export default HomePage;
