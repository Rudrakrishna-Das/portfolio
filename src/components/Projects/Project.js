import Amazon from "./Amazon";
import ApnaMeals from "./ApnaMeals";
import Netflix from "./Netflix";

const Project = () => {
  return (
    <section id="project" className="mx-6 my-8 max-w-full py-16">
      <h1 className="text-4xl text-center font-extrabold underline mb-16">
        My Projects
      </h1>
      <ul className="space-y-16">
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
