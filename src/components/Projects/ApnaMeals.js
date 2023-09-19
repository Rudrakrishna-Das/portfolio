const ApnaMeals = () => {
  return (
    <div className="md:flex md:justify-around">
      <div className="h-60 overflow-y-scroll">
        <h1 className="text-2xl font-extrabold">ApnaMeals</h1>
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
          alt="Amazon-Clone"
          className="md:w-[40vw] rounded-md my-4"
        />
      </div>
    </div>
  );
};

export default ApnaMeals;
