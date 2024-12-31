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

export default function Home() {
  return (
    <div>
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
      </div>
      {/* About Section */}
      <div id="about" className="bg-[#4b4b4b] text-white p-8 mt-8 mb-8">
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
                I'm Evan Janakievski, currently a student at the University of
                Waterloo, majoring in Mechatronics Engineering. It was important
                to me to have an education with a strong interdisciplinary,
                didactic program combined with hands-on learning and it is why I
                selected the University of Waterloo, along with its renowned
                co-op program. As a first-year student, I understand that I have
                a lot to learn, but I believe that my curriculum and
                extracurriculars will prepare me to be an asset in any position
                I hold.
              </p>
              <br />
              <p>
                Technology has always fascinated me, and I'm continually eager
                to broaden my knowledge through different opportunities.
                Mechanical design, robotics, automation, and software captivate
                my interest. While I am not focusing on school, I like to pursue
                personal projects to develop hands-on skills in any field that
                draws my interest!
              </p>
              <br />
              <p>
                My other interests include soccer, tennis, Formula 1, scuba
                diving, and rock climbing! I also enjoy traveling with my
                family, cooking, and baking. Photography is something I am
                slowly getting introduced to, and I love viewing beautiful
                landscapes.
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
