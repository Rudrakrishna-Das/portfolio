import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ApnaMeals = () => {
  return (
    <div className="bg-transparent p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold">ApnaMeals</h1>
      <div className="md:flex md:justify-around">
        <div className="h-72 overflow-y-auto">
          <ul className="list-disc text-sm ml-12 my-5 space-y-3">
            <li>Created the UI using REACT, and made it mobile responsive.</li>
            <li>User needs to add Items to Cart for place order</li>
            <li>User have to provide their name and address to place order.</li>
            <li>
              User can see placed order in my orders tab. Data fetching from
              firebase
            </li>
          </ul>
          <div className="flex space-x-2">
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
        <div className="mr-2">
          <img
            src="https://user-images.githubusercontent.com/114521277/269026536-64dc2ad6-5562-42f8-a725-b6beadf59c4a.png"
            alt="ApnaMeals"
            className="md:w-[40vw] rounded-md my-4"
          />
          <div className="text-sm mr-0 md:mr-16  space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-end">
            <a
              className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
              href="https://rudra-fooddeliveryapp.netlify.app/"
              target="_blank"
            >
              Live Demo
              <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
            </a>
            <a
              className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
              href="https://github.com/Rudrakrishna-Das/Food-Delivery-app"
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

export default ApnaMeals;
