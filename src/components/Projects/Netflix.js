import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Netflix = () => {
  return (
    <div className="md:flex md:justify-around p-4 pt-10  rounded-2xl shadow-[inset_2px_2px_40px_6px_black]">
      <div className="mr-2">
        <img
          src="https://github.com/Rudrakrishna-Das/netflix-clone-rudra/blob/master/netflix-clone.png?raw=true"
          alt="Netflix-Clone"
          className="md:w-[40vw] rounded-md mb-4"
        />
        <div className="text-sm ml-0 md:ml-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-normal">
          <a
            className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
            href="https://netflix-clone-rudra.netlify.app/"
            target="_blank"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
          <a
            className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
            href="https://github.com/Rudrakrishna-Das/netflix-clone-rudra"
            target="_blank"
          >
            code
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
        </div>
      </div>
      <div className="h-72 overflow-y-auto">
        <h1 className="text-2xl font-extrabold">Netflix-Clone</h1>
        <ul className="list-disc text-sm ml-12 my-5 space-y-3">
          <li>Used REACT to create the UI, and made it mobile responsive</li>
          <li>Fetched data from TMDB API using Axios. </li>
          <li>Used React Router Dom to route between pages</li>
          <li>Used Firebase to authenticate users by Signing or Logging in.</li>
        </ul>
        <div className="flex">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
            className="h-10"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="Firebase"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Netflix;
