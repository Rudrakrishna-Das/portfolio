import Amazon from "./Amazon";
import ApnaMeals from "./ApnaMeals";
import ChatGPTClone from "./ChatGPTClone";
import FavMusic from "./FavMusic";
import Netflix from "./Netflix";
import RealEstate from "./RealEstate";
import SafeBank from "./Safe Bank";
import VidiMate from "./VidiMate";

const Project = () => {
  return (
    <section id="project" className="mx-8 my-8 max-w-full py-16">
      <h1 className="text-4xl text-center font-extrabold underline ">
        My Projects
      </h1>
      <p className="text-center mt-4 mb-16 text-xl font-semibold">
        Here you will find my personal projects
      </p>
      <ul className="space-y-16">
        <li>
          <FavMusic />
        </li>
        <li>
          <VidiMate />
        </li>
        <li>
          <SafeBank />
        </li>
        <li>
          <RealEstate />
        </li>
        <li>
          <ChatGPTClone />
        </li>
        <li>
          <Amazon />
        </li>
        <li>
          <Netflix />
        </li>
        <li>
          <ApnaMeals />
        </li>
      </ul>
    </section>
  );
};
export default Project;
