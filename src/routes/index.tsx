import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arooj Ashfaq — Full Stack Developer & Cybersecurity Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Arooj Ashfaq — Certified Full Stack Web Developer and Graphic Designer, exploring cybersecurity. View projects, skills and certifications.",
      },
      { property: "og:title", content: "Arooj Ashfaq — Full Stack Developer & Graphic Designer" },
      {
        property: "og:description",
        content:
          "Certified Full Stack Developer & Graphic Designer building scalable web apps and striking visuals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
