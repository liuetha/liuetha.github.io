export type ProjectImage = {
  // Put image files in /public/images/projects/ and reference them like:
  // src: "/images/projects/aerosol-cover.jpg"
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ProjectImage;
  images?: ProjectImage[];
};

export type ProjectPresentation = {
  title: string;
  src: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  organization: string;
  role: string;
  summary: string;
  contribution: string;
  tags: string[];
  coverImage?: ProjectImage;
  sections: ProjectSection[];
  presentation?: ProjectPresentation;
};

export const projects: Project[] = [
  {
    slug: "cold-spray",
    title: "Aerosol Deposition Modelling",
    shortTitle: "Aerosol Deposition",
    organization: "Centre for Advanced Coating Technologies",
    role: "CFD Modelling Researcher",
    summary:
      "Computational Fluid Dynamics (CFD) modelling of gas flow and particle impact in aerosol deposition, with an automated workflow for comparing operating conditions.",
    contribution:
      "I modelled aerosol deposition using Ansys Fluent and High Performance Computing, studying how gas flow, particle properties, and nozzle conditions affect deposition results. I also ran a large parametric study and implemented a literature-based drag model in ANSYS Fluent to improve particle tracking accuracy.",
    tags: ["ANSYS Fluent", "PyANSYS", "C", "HPC"],
    coverImage: {
      src: "/images/projects/aerosol-system-schematic.png",
      alt: "Three-dimensional schematic of the vacuum deposition chamber, powder feeder, gas supply, filter, and pump unit",
      fit: "contain",
    },
    sections: [
      {
        title: "Flow and particles",
        paragraphs: [
          "The models cover slit and round nozzles, combining compressible gas flow with discrete particle tracking. I compared gas velocities with benchmark data and examined how the setup affected particle trajectories and impact locations.",
        ],
        images: [
          {
            src: "/images/projects/aerosol-cover.jpg",
            alt: "CFD velocity field and particle tracks at the vacuum cold spray nozzle and substrate",
            caption: "CFD gas-velocity field with particle tracks through the nozzle and toward the substrate.",
            fit: "contain",
          },
          {
            src: "/images/projects/real-deposition.png",
            alt: "Experimental deposition footprint with its measured profile outlined",
            caption: "An experimental deposition footprint used as a comparison target for the particle model.",
            fit: "contain",
          },
        ],
      },
      {
        title: "Model validation",
        paragraphs: [
          "I validated the particle model against measured copper deposition patterns for three nozzle geometries: converging-barrel slit, converging-diverging slit, and converging-diverging round. The comparisons use simulated particle-impact locations and probability distributions alongside experimental deposition footprints, surface profiles, and cross-sections to check whether the model reproduces the shape and spread of the deposited material.",
        ],
        images: [
          {
            src: "/images/projects/aerosol-validation-cb-slit.png",
            alt: "Validation comparison for the copper converging-barrel slit nozzle showing simulated particle scatter and KDE beside the measured deposition footprint and three-dimensional profile",
            caption: "CB-slit validation: simulated particle scatter and KDE compared with the measured 10 s copper deposition footprint and 3D surface profile.",
            fit: "contain",
          },
          {
            src: "/images/projects/aerosol-validation-cd-slit.png",
            alt: "Validation comparison for the copper converging-diverging slit nozzle showing simulated particle locations and KDE beside the measured deposition footprint and cross-section",
            caption: "CD-slit validation: predicted particle distribution compared with the measured 10 s copper footprint and deposition cross-section.",
            fit: "contain",
          },
          {
            src: "/images/projects/aerosol-validation-cd-round.png",
            alt: "Validation comparison for the copper converging-diverging round nozzle showing simulated particle scatter and KDE beside the measured circular deposition footprint",
            caption: "CD-round validation: simulated particle scatter and KDE compared with the measured 10 s copper deposition footprint.",
            fit: "contain",
          },
        ],
      },
      {
        title: "Fixing the injection",
        paragraphs: [
          "Results from past literature had unrealistically uniform particle deposition patterns. I traced this behaviour to the injection setup and introduced particle spread to better represent the trajectories and impact locations.",
        ],
        images: [
          {
            src: "/images/projects/deposition-pattern-before.png",
            alt: "Particle impact scatter before correcting the injection setup",
            caption: "Before: the original setup produced an unrealistically uniform particle pattern.",
            fit: "contain",
          },
          {
            src: "/images/projects/deposition-pattern-fixed.png",
            alt: "Particle impact scatter after correcting the injection setup",
            caption: "After: revised injection conditions produced a broader particle distribution.",
            fit: "contain",
          },
        ],
      },
      {
        title: "Drag model comparison",
        paragraphs: [
          "I implemented Singh et al.’s particle-drag correlation as a Fluent user-defined function and compared its predicted particle behaviour with established Loth and Crowe drag models. In the validation case used for this work, the Singh-based model produced 7.6% error, compared with 12.1–15.8% error reported for the established drag models.",
          "The comparison below shows how the predicted particle-impact distributions change with the drag formulation, with the Singh model producing a tighter distribution than the Loth and Crowe cases.",
        ],
        image: {
          src: "/images/projects/aerosol-drag-model-comparison.png",
          alt: "Side-by-side comparison of particle impact locations predicted with Loth, Crowe, and Singh drag models",
          caption: "Particle-impact distributions for Loth, Crowe, and Singh drag formulations. The Singh-based model used in this work produced 7.6% error in the validation case, compared with 12.1–15.8% reported for the established models.",
          fit: "contain",
        },
      },
      {
        title: "Automating the study",
        paragraphs: [
          "I reduced months of manual setup and computational time to days by using PyAnsys/PyFluent to automate large batches of CFD simulations, including geometry/parameter sweeps, solver setup, execution, and result extraction. This let me run and compare 500+ aerosol-deposition cases efficiently instead of configuring each simulation manually.",
        ],
      },
    ],
    presentation: {
      title: "Computational Fluid Dynamics Modelling of Vacuum Cold Spray for In-Space Surface Repair",
      src: "/files/vacuum-cold-spray-presentation.pdf",
      description:
        "The presentation was presented at the University of Toronto’s Undergraduate Engineering Conference. It covers the CFD setup, validation, automated parametric study, and particle-model work from the project.",
    },
  },
  {
    slug: "solar-car",
    title: "Solar Car Aerodynamics",
    shortTitle: "Solar Car Aerodynamics",
    organization: "Blue Sky Solar Racing",
    role: "Aerobody Team Lead",
    summary:
      "Redesigning a solar-car nose using surface-pressure data, then checking the revised shape with Computational Fluid Dynamics (CFD).",
    contribution:
      "I lead the aerobody team. My work includes reviewing CFD results, redesigning the nose geometry, and developing simulation methods for the team’s next aerodynamic studies.",
    tags: ["CFD", "CATIA", "LES", "Transient CFD"],
    coverImage: {
      src: "/images/projects/solar-car-cover.jpg",
      alt: "Blue Sky Solar Racing solar car on track",
    },
    sections: [
      {
        title: "Nose redesign",
        paragraphs: [
          "In the previous CFD results, I identified a steep surface-pressure gradient around the nose associated with pressure drag. I used this to guide a geometry change in CAD, then evaluated the revised shape with steady-state simulations.",
        ],
      },
      {
        title: "Ongoing work",
        paragraphs: [
          "I’m evaluating vortex-generator concepts with large-eddy simulation to study flow separation around the canopy. I’m also developing transient CFD methods for later vehicle-validation work.",
        ],
      },
    ],
  },
  {
    slug: "flight-dynamics",
    title: "Aircraft Stability and Tail Design",
    shortTitle: "Aircraft Stability & Design",
    organization: "U of T Aerospace Team · UAS",
    role: "Flight Dynamics Team Member",
    summary:
      "Sizing an aircraft tail for stability and manufacturing, then designing its servo mount and mechanical adapter.",
    contribution:
      "I worked on horizontal-tail sizing and stability analysis, then carried the design into actuator checks, CAD, and printed prototypes.",
    tags: ["XFLR5", "MATLAB", "SolidWorks"],
    coverImage: {
      src: "/images/projects/uas-cover.jpg",
      alt: "U of T Aerospace Team fixed-wing UAS on the ground",
    },
    sections: [
      {
        title: "Tail sizing",
        paragraphs: [
          "The tail needed to maintain stability and control across the expected centre-of-gravity range. I combined analytical sizing, parametric studies, XFLR5 simulations, and scissor plots to compare configurations.",
          "We replaced the original airfoil section with a flat plate to simplify manufacturing. I re-optimised the geometry and checked its stability and control margins after the change.",
        ],
        image: {
          src: "/images/projects/uas-tail-sizing.png",
          alt: "Linear horizontal-tail sizing plot showing stability and trim constraints",
          caption: "Tail sizing across stability and worst-case trim constraints.",
          fit: "contain",
        },
      },
      {
        title: "Servo checks",
        paragraphs: [
          "I calculated stabilizer hinge moments in XFLR5 at the limiting analysed flight condition and checked the actuator requirements in MATLAB to verify the selected servo’s capacity.",
        ],
      },
      {
        title: "Mechanical adapter",
        paragraphs: [
          "I designed a printable stabilizer adapter in SolidWorks with integrated servo mounts. Prototype printing and testing informed changes to its strength, weight, and assembly.",
        ],
        images: [
          {
            src: "/images/projects/uas-hstab-mount.png",
            alt: "CAD model of the horizontal stabilizer servo mount",
            caption: "CAD model of the stabilizer adapter and integrated servo mount.",
            fit: "contain",
          },
          {
            src: "/images/projects/uas-hstab-mount-real.jpg",
            alt: "Physical horizontal stabilizer mount installed on the aircraft",
            caption: "The mount installed on the aircraft during prototype testing.",
            fit: "cover",
          },
        ],
      },
    ],
  },
  {
    slug: "rocketry",
    title: "Hybrid Propulsion",
    shortTitle: "Hybrid Propulsion",
    organization: "U of T Aerospace Team · Rocketry",
    role: "Hybrid Propulsion Team Member",
    summary:
      "Designing oxidizer-tank hardware and checking test-stand components with structural analysis and hand calculations.",
    contribution:
      "I designed oxidizer-tank hardware in Onshape and prepared drawings for fabrication. I also redesigned a test-stand plate after structural analysis showed it did not meet the required margin.",
    tags: ["Onshape", "ANSYS Mechanical", "FEA"],
    coverImage: {
      src: "/images/projects/rocketry-cover.webp",
      alt: "Hybrid rocket test setup at an outdoor test site",
    },
    sections: [
      {
        title: "Tank and test-stand redesign",
        paragraphs: [
          "The tank work covered a multi-part assembly and drawing changes for fabrication and integration.",
          "Designed the part with clear design intent, allowing major dimensions to be updated without rebuilding the model.",
        ],
        image: {
          src: "/images/projects/oxidizer-tank-cad.png",
          alt: "CAD model of the rocket oxidizer tank assembly",
          caption: "CAD model of the oxidizer-tank assembly.",
          fit: "contain",
        },
      },
      {
        title: "Analytical checks",
        paragraphs: [
          "I performed stress analysis on the test stand plate in ANSYS Mechanical and identified the support orientation as a key source of high loading. By modifying the support orientation and validating the revised design through FEA, I increased the factor of safety from 0.89 to 2.49.",
          "For the combustion chamber, I verified that the existing wall design could meet a factor of safety of 2 under the expected internal pressure. I used analytical stress calculations and physics-based modelling to determine the minimum required wall thickness and compare it against the current geometry.",
          "For the static test stand, I checked the fasteners under the expected loading to confirm they also met a factor of safety of 2. This involved calculating the resulting bolt stresses and comparing them against allowable material limits to make sure the joint would remain within the required structural margin.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
