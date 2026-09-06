import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Aerosol Deposition Modelling",
  description:
    "Aerosol-deposition Computational Fluid Dynamics (CFD) in ANSYS Fluent, with a C implementation of Singh et al.’s drag model and a PyANSYS workflow for HPC simulations.",
};

export default function ColdSprayPage() {
  const project = getProject("cold-spray");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
