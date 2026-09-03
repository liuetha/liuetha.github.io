import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export default function ColdSprayPage() {
  const project = getProject("cold-spray");

  if (!project) return null;

  return <ProjectPage project={project} />;
}