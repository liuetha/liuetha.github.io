import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Aircraft Flight Dynamics",
  description:
    "Aircraft stability, control, tail sizing, actuator verification, and physical stabilizer design for a competition UAS.",
};

export default function FlightDynamicsPage() {
  const project = getProject("flight-dynamics");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
