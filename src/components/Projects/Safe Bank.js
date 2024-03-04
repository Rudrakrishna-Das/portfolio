import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const SafeBank = () => {
  return (
    <div className="bg-transparent md:flex md:justify-around p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold block md:hidden">Safe Bank</h1>
      <div className="mr-2">
        <img
          src="https://github.com/Rudrakrishna-Das/BankingSystem/blob/master/Screenshot%202024-03-03%20231517.png?raw=true"
          alt="Safe Bank"
          className="md:w-[40vw] rounded-md mb-4"
        />
        <div className="text-sm ml-0 md:ml-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-normal">
          <a
            className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
            href="https://safebankrudra.netlify.app/"
            target="_blank"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
          <a
            className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
            href="https://github.com/Rudrakrishna-Das/BankingSystem"
            target="_blank"
          >
            Code
            <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
          </a>
        </div>
      </div>
      <div className="h-72 overflow-y-auto">
        <h1 className="text-2xl font-extrabold hidden md:block">Safe Bank</h1>
        <ul className="list-disc text-sm ml-12 my-5 space-y-3">
          <li>
            Used HTML, CSS, JAVASCRIPT to create the UI, and made it mobile
            responsive.
          </li>
          <li>Sign in and Sign up feature added</li>
          <li>
            Created own Rest Api with
            <a
              className="text-xl font-extrabold cursor-pointer hover:text-gray-600"
              target="_blank"
              href="https://github.com/Rudrakrishna-Das/Banking-System-backend"
            >
              {" "}
              Python
            </a>
          </li>
          <li>Used Mongodb for Store Data</li>
        </ul>
        <div className="flex space-x-4">
          <img
            src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png"
            alt="HTML"
            className="h-10"
          />
          <img
            src="https://e7.pngegg.com/pngimages/188/673/png-clipart-cascading-style-sheets-css3-bootstrap-valid-blue-angle-thumbnail.png"
            alt="CSS"
            className="h-10"
          />
          <img
            src="https://e7.pngegg.com/pngimages/640/199/png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png"
            alt="JavaScript"
            className="h-10"
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

export default SafeBank;
