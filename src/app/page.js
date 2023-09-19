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
      <Project />
      <Contact />
    </>
  );
}
