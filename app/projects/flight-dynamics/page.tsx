import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export default function FlightDynamicsPage() {
  const project = getProject("flight-dynamics");

  if (!project) return null;

  return <ProjectPage project={project} />;
}