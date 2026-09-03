import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">
            Mechanical Engineering · University of Toronto
          </p>

          <h1 className="hero-title">
            Ethan Liu
          </h1>

          <p className="hero-statement">
            I work on fluid systems, aerodynamics, and
            mechanical design using simulation, physical
            testing, and engineering analysis.
          </p>

          <div className="hero-links">
            <a href="#work" className="button primary-button">
              View selected work
            </a>

            <a
              href="https://www.linkedin.com/in/ethan-yien-liu/"
              target="_blank"
              rel="noreferrer"
              className="button secondary-button"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <div className="section-heading">
            <p className="section-number">01</p>

            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Simulation, aerodynamics, and mechanical
                engineering.
              </h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section alternate-section"
        id="experience"
      >
        <div className="container">
          <div className="section-heading">
            <p className="section-number">02</p>

            <div>
              <p className="eyebrow">Experience</p>
              <h2>Where I’m working.</h2>
            </div>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-date">
                May 2026 – Present
              </div>

              <div className="experience-main">
                <h3>CFD Modelling Researcher</h3>
                <p className="experience-company">
                  Centre for Advanced Coating Technologies
                </p>

                <p>
                  Developing and automating CFD models of
                  aerosol-deposition processes using ANSYS
                  Fluent, discrete-particle modelling,
                  custom C UDFs, PyAnsys, and HPC.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                June 2026 – Present
              </div>

              <div className="experience-main">
                <h3>Aerobody Team Lead</h3>
                <p className="experience-company">
                  Blue Sky Solar Racing
                </p>

                <p>
                  Working on solar-car aerodynamic
                  development through CFD, geometry
                  redesign, LES, and transient-flow
                  modelling.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                September 2025 – Present
              </div>

              <div className="experience-main">
                <h3>Flight Dynamics Team Member</h3>
                <p className="experience-company">
                  University of Toronto Aerospace Team
                </p>

                <p>
                  Analysing aircraft stability and control
                  while supporting aerodynamic and
                  mechanical design of the team’s
                  competition aircraft.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                January 2025 – Present
              </div>

              <div className="experience-main">
                <h3>Hybrid Propulsion Team Member</h3>
                <p className="experience-company">
                  University of Toronto Aerospace Team
                </p>

                <p>
                  Designing and verifying hybrid-rocket
                  mechanical hardware using CAD,
                  structural analysis, and analytical
                  engineering calculations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="section-number">03</p>

            <div>
              <p className="eyebrow">About</p>
              <h2>
                Mechanical systems, fluids, and aerospace.
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I’m a Mechanical Engineering student at
                the University of Toronto interested in
                CFD, aerodynamics, aerospace engineering,
                and thermal-fluid systems.
              </p>

              <p>
                Most of my work sits between numerical
                modelling and physical engineering:
                understanding a system through simulation,
                identifying what needs to change, and then
                validating the result through analysis or
                testing.
              </p>

              <p>
                Outside engineering, I’ve played piano for
                more than 14 years.
              </p>
            </div>

            <div className="skills">
              <div className="skill-group">
                <h3>Simulation</h3>
                <p>
                  ANSYS Fluent · ANSYS Mechanical · XFLR5
                  · Pointwise
                </p>
              </div>

              <div className="skill-group">
                <h3>CAD</h3>
                <p>
                  SolidWorks · CATIA · Onshape
                </p>
              </div>

              <div className="skill-group">
                <h3>Programming</h3>
                <p>
                  Python · PyAnsys · C · MATLAB
                </p>
              </div>

              <div className="skill-group">
                <h3>Technical areas</h3>
                <p>
                  CFD · Aerodynamics · Particle Transport
                  · Aircraft Stability · Structural
                  Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section contact-section"
        id="contact"
      >
        <div className="container">
          <p className="section-number">04</p>

          <p className="eyebrow">Contact</p>

          <h2 className="contact-title">
            Want to talk engineering?
          </h2>

          <div className="contact-links">
            <a href="mailto:liuetha01@gmail.com">
              liuetha01@gmail.com ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ethan-yien-liu/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/liuetha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}