import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Hybrid Rocket Mechanical Design",
  description:
    "Mechanical design and structural verification of hybrid-rocket hardware using CAD, ANSYS Mechanical, FEA, and analytical calculations.",
};

export default function RocketryPage() {
  const project = getProject("rocketry");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
