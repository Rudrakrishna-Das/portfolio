const Footer = () => {
  return (
    <section className="text-white bg-black p-10">
      <div className="md:flex md:justify-between">
        <div className="space-y-1">
          <h1 className="mb-5">RUDRA KRISHNA DAS</h1>
          <p className="text-xs">
            Passionate frontend developer with a flair for creating elegant user
            interfaces
          </p>
          <p className="text-xs">
            Dedicated to delivering exceptional user experiences through
            clean,efficient code and pixel-perfect designs.
          </p>
        </div>
        <div className="mt-2">
          <h1>SOCIAL</h1>
          <div></div>
        </div>
      </div>
      <div className="border-b-[1px] border-[rgba(255,255,255,0.2)] py-5"></div>
      <p className="text-center text-xs mt-5">
        &copy; Copyright 2023. Made by Rudra Krishna Das
      </p>
    </section>
  );
};

export default Footer;
