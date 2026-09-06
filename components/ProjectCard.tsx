import Link from "next/link";
import ProjectImageSlot from "@/components/ProjectImageSlot";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="project-link"
      data-project={project.slug}
      aria-labelledby={`${project.slug}-title`}
      aria-describedby={`${project.slug}-summary`}
    >
      <ProjectImageSlot image={project.coverImage} label="Cover photo" compact placeholder />
      <div className="project-copy">
        <p className="project-organisation">{project.organization}</p>
        <h3 id={`${project.slug}-title`}>{project.shortTitle}</h3>
        <p id={`${project.slug}-summary`}>{project.summary}</p>
      </div>
    </Link>
  );
}
