const Contact = () => {
  return (
    <section className="text-center h-[30rem] my-16">
      <h1 className="text-4xl font-extrabold mb-9">Contact</h1>
      <p className="mb-14 ">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="bg-white w-2/4 mx-auto p-10">
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
              placeholder="Enter Your Name"
              id="name"
              className="bg-gray-200 w-full my-2 rounded-md outline-none"
            />
          </div>
        </from>
      </div>
    </section>
  );
};

export default Contact;
