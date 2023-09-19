const Contact = () => {
  return (
    <section className="text-right h-[50rem] my-16">
      <h1 className="text-4xl font-extrabold mb-9 text-center">Contact</h1>
      <p className="mb-14  text-center">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="bg-white w-9/12 mx-auto p-10 rounded-md  ">
        <from>
          <div className="flex flex-col text-left text-sm my-3">
            <label htmlFor="name">Name</label>
            <input
              className="bg-gray-200 p-4 my-2 rounded-md outline-none"
              placeholder="Enter Your Name"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col text-left text-sm">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              id="email"
              className="bg-gray-200 p-4 my-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col text-left text-sm">
            <label htmlFor="name">Name</label>
            <textarea
              placeholder="Enter Your Message"
              id="name"
              className="bg-gray-200 w-full h-[20rem] resize-none my-2 rounded-md outline-none p-4"
            />
          </div>
          <button className="py-2 px-8 border rounded-md bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-500">
            Submit
          </button>
        </from>
      </div>
    </section>
  );
};

export default Contact;
