import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const RealEstate = () => {
  return (
    <div className="bg-transparent p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold">RealEstate</h1>
      <div className="md:flex md:justify-around">
        <div className="h-64 overflow-y-auto space-y-10">
          <ul className="list-disc text-sm ml-12 my-5 space-y-5">
            <li>
              Created the UI using ReactJs & TAILWIND CSS, and made it mobile
              responsive.
            </li>
            <li>Created backend with NodeJs and ExpressJs </li>
            <li>Used MongoDb to store Data.</li>
            <li>
              Used FirebaseAuth to authenticate users by Signing in with google
              credentials.
            </li>
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
              src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              alt="Node.js"
              className="h-10"
            />
            <img
              src="https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png"
              alt="Express.js"
              className="h-10"
            />
            <img
              src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              alt="MongoDb"
              className="h-7"
            />

            <img
              src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
              alt="Firebase"
              className="h-7"
            />
          </div>
        </div>
        <div className="mr-2">
          <img
            src="https://github.com/Rudrakrishna-Das/real-estate/assets/114521277/3ad2d126-e80f-4b2c-9f37-211957923252"
            alt="Real-Estate"
            className="md:w-[40vw] rounded-md mb-4"
          />
          <div className="text-sm mr-0 md:mr-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-end">
            <a
              className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
              href="https://real-estate-2pyk.onrender.com/"
              target="_blank"
            >
              Live Demo
              <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
            </a>
            <a
              className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
              href="https://github.com/Rudrakrishna-Das/real-estate"
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

export default RealEstate;
