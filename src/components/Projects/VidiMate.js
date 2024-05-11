import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const VidiMate = () => {
  return (
    <div className="bg-transparent p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold">Vidi Mate</h1>
      <div className="md:flex md:justify-around">
        <div className="h-64 overflow-y-auto space-y-10">
          <ul className="list-disc text-sm ml-12 my-5 space-y-5">
            <li>
              Created the UI using NextJs & TAILWIND CSS, and made it mobile
              responsive.
            </li>
            <li>Created backend with NextJs </li>
            <li>
              Used NextAuth to authenticate users by Signing in with google
              credentials.
            </li>
            <li>Ability to join or create video meetings</li>
          </ul>
          <div className="flex space-x-4">
            <img
              src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo-thumbnail.png"
              alt="NextJs"
              className="h-7"
            />
            <img
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-256x154-bhw4dmbr.png"
              alt="Tailwind"
              className="h-7"
            />
            <img
              src="https://next-auth.js.org/img/logo/logo-sm.png"
              alt="NextAuth"
              className="h-10"
            />
          </div>
        </div>
        <div className="mr-2">
          <img
            src="https://github.com/Rudrakrishna-Das/Meeting-App/blob/master/image.png?raw=true"
            alt="Vidi Mate"
            className="md:w-[40vw] rounded-md mb-4"
          />
          <div className="text-sm mr-0 md:mr-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-end">
            <a
              className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
              href="https://meeting-app-rudra.vercel.app/"
              target="_blank"
            >
              Live Demo
              <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
            </a>
            <a
              className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
              href="https://github.com/Rudrakrishna-Das/Meeting-App"
              target="_blank"
            >
              code
              <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidiMate;
