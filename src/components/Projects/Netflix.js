const Netflix = () => {
  return (
    <div className="md:flex md:justify-around">
      <div className="mr-2">
        <img
          src="https://github.com/Rudrakrishna-Das/netflix-clone-rudra/blob/master/netflix-clone.png?raw=true"
          alt="Netflix-Clone"
          className="md:w-[40vw] rounded-md mb-4"
        />
      </div>
      <div className="h-60 overflow-y-scroll">
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
