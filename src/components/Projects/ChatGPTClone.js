import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ChatGPTClone = () => {
  return (
    <div className="bg-transparent md:flex md:justify-around p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold block md:hidden">
        Chat-GPT-Clone (Rudra GPT)
      </h1>
      <div className="mr-2">
        <img
          src="https://github.com/Rudrakrishna-Das/chat--gpt-clone-frontend/blob/master/chat-gpt-clone-rudra.png?raw=true"
          alt="Chat-GPT-Clone"
          className="md:w-[40vw] rounded-md mb-4"
        />
        <div className="text-sm ml-0 md:ml-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-normal">
          <a
            className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
            href="https://chat-gpt-clone-rudra.netlify.app/"
            target="_blank"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
          <a
            className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
            href="https://github.com/Rudrakrishna-Das/chat--gpt-clone-frontend"
            target="_blank"
          >
            Code
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
        </div>
      </div>
      <div className="h-72 overflow-y-auto">
        <h1 className="text-2xl font-extrabold hidden md:block">
          Chat-GPT-Clone (Rudra GPT)
        </h1>
        <ul className="list-disc text-sm ml-12 my-5 space-y-3">
          <li>Used REACT to create the UI, and made it mobile responsive</li>
          <li>Fetched data from CHAT GPT OPEN AI API. </li>
          <li>
            Used NODE.JS for
            <a
              className="text-xl font-extrabold cursor-pointer hover:text-gray-600"
              target="_blank"
              href="https://github.com/Rudrakrishna-Das/chat--gpt-clone-backend"
            >
              {" "}
              Backend
            </a>
          </li>
          <li>Used EXPRESS.JS for server</li>
        </ul>
        <div className="flex space-x-4">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
            className="h-10"
          />
          <img
            src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
            alt="Node.js"
            className="h-10"
          />
          <img
            src="https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png"
            alt="Express.js"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatGPTClone;
