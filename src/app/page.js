import About from "@/components/About";
import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import Project from "@/components/Projects/Project";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomePage />
      <About />
      <h1 className="text-4xl text-center font-extrabold underline mb-28">
        My Projects
      </h1>
      <Project />
      <Contact />
    </>
  );
}
