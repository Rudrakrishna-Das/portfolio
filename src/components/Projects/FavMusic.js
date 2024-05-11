import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const FavMusic = () => {
  return (
    <div className="bg-transparent md:flex md:justify-around p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold block md:hidden">Fav Music</h1>
      <div className="mr-2">
        <img
          src="https://github.com/Rudrakrishna-Das/favMusicfront/blob/master/public/icons/Screenshot%202024-05-11%20084737.png?raw=true"
          alt="Fav Music"
          className="md:w-[40vw] rounded-md mb-4"
        />
        <div className="text-sm ml-0 md:ml-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-normal">
          <a
            className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
            href="https://fav-music-rudra.netlify.app/"
            target="_blank"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
          <a
            className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
            href="https://github.com/Rudrakrishna-Das/favMusicfront"
            target="_blank"
          >
            Code
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
        </div>
      </div>
      <div className="h-72 overflow-y-auto">
        <h1 className="text-2xl font-extrabold hidden md:block">Fav Music</h1>
        <ul className="list-disc text-sm ml-12 my-5 space-y-3">
          <li>
            Used React with TailwindCss to create the UI, and made it mobile
            responsive.
          </li>
          <li>
            Sign in and Sign up feature added, also google OAuth added using
            firebase
          </li>
          <li>
            Created own Rest Api with
            <a
              className="text-xl font-extrabold cursor-pointer hover:text-gray-600"
              target="_blank"
              href="https://github.com/Rudrakrishna-Das/favmusicback"
            >
              {" "}
              Python
            </a>
          </li>
          <li>Used Mongodb for Store Data</li>
        </ul>
        <div className="flex space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="ReactJs"
            className="h-7"
          />
          <img
            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-256x154-bhw4dmbr.png"
            alt="Tailwind"
            className="h-7"
          />
          <img
            src="https://e7.pngegg.com/pngimages/140/948/png-clipart-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-thumbnail.png"
            alt="Python"
            className="h-10"
          />
          <img
            src="https://e7.pngegg.com/pngimages/628/415/png-clipart-mongodb-inc-database-nosql-logo-mysql-text-logo-thumbnail.png"
            alt="Mongodb"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default FavMusic;
