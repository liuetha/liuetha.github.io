import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="project-card"
    >
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div>
        <p className="project-organization">
          {project.organization}
        </p>

        <h3>{project.title}</h3>

        <p className="project-summary">
          {project.summary}
        </p>
      </div>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}