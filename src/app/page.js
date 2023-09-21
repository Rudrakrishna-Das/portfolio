import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import Project from "@/components/Projects/Project";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
      <HomePage />
      <About />
      <Project />
      <Contact />
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  );
}
