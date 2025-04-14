import ProjectCard from "@/components/custom/project-card";
import projects from "@/app/projects.json";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  technologies: string;
  icon: string;
  image: string;
  link: string;
}

export const metadata = {
  title: "Evan Janakievski",
  description: "Evan Janakievski Portfolio Site",
};

export default function Home() {
  return (
    <div id="projects">
      {/* Single Column View with Default Project Card*/}
      {/* <div className="flex flex-col items-center justify-center space-y-8">
            {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              technologies={project.technologies}
              icon={project.icon}
              image={project.image}
            />
          ))}
        </div> */}
      {/* Two Column View with Compact Project Card*/}
      <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              technologies={project.technologies}
              icon={project.icon}
              image={project.image}
              link={project.link}
              variant="compact"
            />
          ))}
        </div>
        <br/>
      </div>
      {/*
      <div id="experience" className="p-8 mt-8 mb-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <h2 className="text-xl font-bold">Toyota Motor North America, Inc.</h2>
          <h2>Jan 2025 — Present</h2>
          <h2 className="text-l mb-4">Project Engineer Intern — Body Production Engineering, Underbody Weld</h2>
          <h2 className="text-xl font-bold">Cleveland Range (Welbilt Inc.)</h2>
          <h2>May 2024 — Aug 2024</h2>
          <h2 className="text-l">Mechanical Engineer Intern</h2>
        </div>
      </div>
      */}
      {/* About Section */}
      <div id="about" className="p-8 mt-8 mb-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <Image
              src="/Evan_Headshot.jpg"
              alt="Evan Janakievski"
              width={300}
              height={200}
            />
            <div>
              <p>
                I&apos;m currently an undergraduate student at the University of Waterloo studying 
                mechatronics engineering. I have grown an interest in mechanical design, automation 
                and controls, manufacturing, and electrical engineering. As I have completed co-ops 
                and participated in extracurriculars, I have been exposed to many areas of engineering 
                that have introduced me to many technical disciplines.
              </p>
              <br />
              <p>
                Currently I am trying to push myself to learn more about PCB design and controls through 
                personal projects, taking inspiration with things I see at work or the university.
              </p>
              <br />
              <p>
                Outside of classes, I have grown an interest in rock climbing, photography, and motorsports! 
                I also love to bake and cook for my friends and family. Traveling, soccer, and scuba diving 
                are some of my other favorite things to do.
              </p>
              <br />
              <p>
                I am always open to new opportunities and challenges, so feel
                free to reach out to me at{" "}
                <a
                  href="mailto:evanjanakievski@gmail.com"
                  className="underline"
                >
                  evanjanakievski@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
