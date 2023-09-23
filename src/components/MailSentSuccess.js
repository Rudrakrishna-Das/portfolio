import Link from "next/link";

const MailSentSuccess = () => {
  return (
    <section className="bg-slate-400 text-center w-[36rem] mx-auto my-[9rem] p-6 space-y-4">
      <h1 className="text-4xl font-extrabold">Thank You</h1>
      <h4 className="text-lg font-semibold">
        Thank you for your mail. I'll reply you as soon as possible.
      </h4>
      <div>
        <Link
          href="/"
          className=" text-white bg-red-600 py-2 px-8 rounded-xl hover:bg-red-800 transition-all duration-500"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default MailSentSuccess;
