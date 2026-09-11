import ProjectCard from "@/components/ProjectCard";
import Music from "@/components/Music";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="page-width" id="main-content" tabIndex={-1}>
      <section className="home-intro" aria-label="Introduction">
        <h1>
          I’m Ethan Liu, a mechanical engineering student at U of T helping
          research and design teams make better decisions through simulation.
        </h1>
      </section>

      <section className="work" id="work" data-scroll-section aria-labelledby="work-heading">
        <h2 className="section-heading" id="work-heading">Selected work</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="about" data-scroll-section aria-labelledby="about-heading">
        <h2 className="section-heading" id="about-heading">A bit about me</h2>
        <div className="about-copy">
          <p>
            Most of my work is in fluid mechanics and aerodynamics. I research
            aerosol deposition, lead aerodynamics at Blue Sky Solar Racing,
            and work on aircraft stability with U of T’s UAS team.
          </p>
          <p>
            I like using a simulation to figure out what to change, then taking
            that decision back into the design.
          </p>
        </div>
      </section>

      <Music />
    </main>
  );
}
