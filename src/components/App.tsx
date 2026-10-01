import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import MoreWork from "@/components/MoreWork";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <CaseStudies />
        <MoreWork />
        <Capabilities />
        <Research />
        <Experience />
        <Process />
        <Contact />
      </main>
    </>
  );
}
