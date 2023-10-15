"use client";
import { useState } from "react";

import About from "@/components/About";
import BTS from "@/components/BehindTheScenes";
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
        <BTS />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
