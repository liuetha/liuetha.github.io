import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export default function RocketryPage() {
  const project = getProject("rocketry");

  if (!project) return null;

  return <ProjectPage project={project} />;
}