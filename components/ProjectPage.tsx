import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectPageProps = {
  project: Project;
};

export default function ProjectPage({
  project,
}: ProjectPageProps) {
  return (
    <main>
      <section className="project-hero">
        <div className="container">
          <Link href="/#work" className="back-link">
            ← Selected work
          </Link>

          <div className="project-heading">
            <p className="eyebrow">
              {project.organization}
            </p>

            <h1>{project.title}</h1>

            <p className="project-date">
              {project.dates}
            </p>

            <p className="project-intro">
              {project.summary}
            </p>

            <div className="tag-list project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="metrics-grid">
            {project.metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-body">
        <div className="project-content">
          {project.sections.map((section) => (
            <div
              className="project-section"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <div className="project-section-content">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="next-project">
        <div className="container">
          <Link href="/#work">
            ← View all selected work
          </Link>
        </div>
      </section>
    </main>
  );
}