import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Amazon = () => {
  return (
    <div className="bg-transparent  p-4 pt-10 rounded-2xl shadow-[inset_2px_2px_40px_6px_gray]">
      <h1 className="text-2xl font-extrabold">Amazon-Clone</h1>
      <div className="md:flex md:justify-around">
        <div className="h-72 overflow-y-auto">
          <ul className="list-disc text-sm ml-12 my-5 space-y-3">
            <li>
              Created the UI using NEXT.JS & TAILWIND CSS, and made it mobile
              responsive.
            </li>
            <li>Fetched data from FAKE STORE API. </li>
            <li>
              Used STRIPE for payment, and stored data in FIREBASE using WEBHOOK
            </li>
            <li>
              Used NEXTAUTH to authenticate users by Signing in with google
              credentials.
            </li>
          </ul>
          <div className="flex space-x-4">
            <img
              src="https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png"
              alt="Next.js"
              className="h-7"
            />
            <img
              src="https://next-auth.js.org/img/logo/logo-sm.png"
              alt="NextAuth"
              className="h-7"
            />
            <img
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-256x154-bhw4dmbr.png"
              alt="Tailwind"
              className="h-7"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe"
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
            src="https://user-images.githubusercontent.com/114521277/269026810-f43bce10-6250-4ecd-9b52-1adaf609331f.png"
            alt="Amazon-Clone"
            className="md:w-[40vw] rounded-md mb-4"
          />
          <div className="text-sm mr-0 md:mr-16 space-x-3 font-serif font-extrabold md:text-left mb-10 flex justify-center md:justify-end">
            <a
              className="hover:text-gray-500 hover:underline transition-all ease-out duration-700 flex"
              href="https://amazon-clone-rudra.vercel.app/"
              target="_blank"
            >
              Live Demo
              <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
            </a>
            <a
              className="hover:text-gray-500 hover:underline transition-all duration-700 flex"
              href="https://github.com/Rudrakrishna-Das/amazon-clone-rudra"
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

export default Amazon;
