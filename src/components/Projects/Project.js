import Amazon from "./Amazon";
import ApnaMeals from "./ApnaMeals";
import Netflix from "./Netflix";

const Project = () => {
  return (
    <section className="mx-6 my-10 max-w-full">
      <h1 className="text-4xl text-center font-extrabold underline mb-32">
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
