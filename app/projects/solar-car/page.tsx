import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Solar Car Aerodynamics",
  description:
    "Computational Fluid Dynamics (CFD)-driven solar-car aerodynamic development covering pressure-drag diagnosis, nose geometry redesign, LES, and transient-flow method development.",
};

export default function SolarCarPage() {
  const project = getProject("solar-car");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
