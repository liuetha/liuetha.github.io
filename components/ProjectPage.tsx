import Link from "next/link";
import ProjectImageSlot from "@/components/ProjectImageSlot";
import type { Project } from "@/data/projects";

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <main className="project-page page-width" id="main-content" tabIndex={-1}>
      <Link href="/#work" className="back-link">← All work</Link>
      <article>
        <header className="project-header">
          <p className="project-organisation">{project.organization}</p>
          <h1>{project.title}</h1>
          <p className="project-intro">{project.summary}</p>
        </header>

        <p className="project-tools project-tools-top">
          <span>Tools</span> {project.tags.join(" · ")}
        </p>

        {project.coverImage && (
          <div className="project-hero-image">
            <ProjectImageSlot image={project.coverImage} label="Project cover photo" />
          </div>
        )}

        <section className="project-section" aria-labelledby="contribution-heading">
          <h2 id="contribution-heading">My part</h2>
          <p>{project.contribution}</p>
        </section>

        {project.sections.map((section) => (
          <section className="project-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}

            {section.image && (
              <div className="project-section-image">
                <ProjectImageSlot image={section.image} label={`${section.title} image`} />
              </div>
            )}

            {section.images && section.images.length > 0 && (
              <div className="project-image-grid">
                {section.images.map((image) => (
                  <ProjectImageSlot
                    image={image}
                    gallery
                    label={`${section.title} image`}
                    key={image.src}
                  />
                ))}
              </div>
            )}
          </section>
        ))}

        {project.presentation && (
          <section className="project-section project-presentation" aria-labelledby="presentation-heading">
            <h2 id="presentation-heading">Presentation</h2>
            {project.presentation.description && <p>{project.presentation.description}</p>}
            <div className="presentation-frame">
              <iframe
                src={`${project.presentation.src}#view=FitH`}
                title={project.presentation.title}
                loading="lazy"
              />
            </div>
            <div className="presentation-links">
              <a href={project.presentation.src} target="_blank" rel="noreferrer">
                Open presentation ↗
              </a>
              <a href={project.presentation.src} download>
                Download PDF
              </a>
            </div>
          </section>
        )}

      </article>
      <Link href="/#work" className="back-link project-end">← All work</Link>
    </main>
  );
}
