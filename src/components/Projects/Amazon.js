const Amazon = () => {
  return (
    <div className="md:flex md:justify-around">
      <div className="h-60 overflow-y-scroll">
        <h1 className="text-2xl font-extrabold">Amazon-Clone</h1>
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
          className="h-auto w-[40vw] rounded-md mb-4"
        />
      </div>
    </div>
  );
};

export default Amazon;
