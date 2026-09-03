import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export default function SolarCarPage() {
  const project = getProject("solar-car");

  if (!project) return null;

  return <ProjectPage project={project} />;
}