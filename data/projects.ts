export type Project = {
    slug: string;
    number: string;
    title: string;
    organization: string;
    dates: string;
    summary: string;
    tags: string[];
    metrics: {
        value: string;
        label: string;
    }[];
    sections: {
        title: string;
        paragraphs?: string[];
        bullets?: string[];
    }[];
};

export const projects: Project[] = [
    {
        slug: "cold-spray",
        number: "01",
        title: "Aerosol Deposition CFD",
        organization: "Centre for Advanced Coating Technologies",
        dates: "May 2026 – Present",
        summary:
            "Developing CFD models of gas flow, particle transport, impact velocity, and deposition behaviour across multiple aerosol-deposition nozzle configurations.",
        tags: [
            "ANSYS Fluent",
            "CFD",
            "DPM",
            "PyAnsys",
            "C",
            "HPC",
        ],
        metrics: [
            {
                value: "500+",
                label: "simulation cases automated",
            },
            {
                value: "24+",
                label: "CFD models developed and validated",
            },
            {
                value: "≤5 m/s",
                label: "benchmark gas-velocity agreement",
            },
        ],
        sections: [
            {
                title: "Problem",
                paragraphs: [
                    "The research examines gas flow and particle behaviour in aerosol-deposition systems, where nozzle geometry, gas conditions, particle properties, and standoff distance affect particle acceleration and impact.",
                    "My work has focused on building numerical models that can reproduce benchmark behaviour and then using those models to study a much larger process-parameter space.",
                ],
            },
            {
                title: "CFD modelling",
                bullets: [
                    "Built aerosol-deposition models from scratch in ANSYS Fluent for converging-diverging slit, converging-barrel slit, and converging-diverging round nozzles.",
                    "Modelled compressible gas flow together with discrete particle trajectories, impact velocity, impact location, and deposition behaviour.",
                    "Developed and validated more than 24 models across nozzle geometry, gas type, and standoff distance.",
                    "Matched benchmark gas velocities within 5 m/s during model validation.",
                ],
            },
            {
                title: "Particle modelling",
                bullets: [
                    "Diagnosed unrealistically uniform particle injection behaviour in the initial discrete-phase models.",
                    "Introduced particle spread to produce more representative trajectories, impact locations, and deposition patterns.",
                    "Implemented a generalized spherical-particle drag formulation as a custom C user-defined function.",
                    "Validated the UDF behaviour against independently developed generalized-drag implementations.",
                ],
            },
            {
                title: "Automation",
                paragraphs: [
                    "Running hundreds of CFD configurations manually would require repetitive geometry, solver, material, injection, and boundary-condition setup. I developed a PyAnsys workflow to generate, configure, and execute the cases programmatically.",
                ],
                bullets: [
                    "Automated more than 500 engineering simulation cases.",
                    "Used high-performance computing resources to execute the parameter study.",
                    "Created a simulation database for later engineering analysis and data-driven modelling.",
                ],
            },
        ],
    },

    {
        slug: "solar-car",
        number: "02",
        title: "Solar Car Aerodynamics",
        organization: "Blue Sky Solar Racing",
        dates: "June 2026 – Present",
        summary:
            "Aerodynamic development of a solar race car using CFD, geometry redesign, flow diagnostics, and higher-fidelity simulation methods.",
        tags: [
            "Aerodynamics",
            "CFD",
            "CATIA",
            "LES",
            "Geometry Design",
        ],
        metrics: [
            {
                value: "CFD",
                label: "geometry-driven aerodynamic development",
            },
            {
                value: "LES",
                label: "vortex-generator evaluation",
            },
            {
                value: "Transient",
                label: "method development",
            },
        ],
        sections: [
            {
                title: "Aerobody development",
                paragraphs: [
                    "My work on the aerobody team focuses on identifying aerodynamic losses in existing designs and using simulation results to guide geometry changes.",
                ],
            },
            {
                title: "Nose redesign",
                bullets: [
                    "Identified a steep surface-pressure gradient in previous CFD results as a source of pressure drag.",
                    "Redesigned the solar-car nose geometry in CAD to improve the pressure distribution.",
                    "Validated the revised geometry through steady-state CFD simulations.",
                ],
            },
            {
                title: "Higher-fidelity CFD",
                bullets: [
                    "Evaluating vortex-generator concepts using large-eddy simulation to study their effect on canopy flow separation.",
                    "Developing transient CFD methods for future vehicle-validation cycles.",
                    "Comparing transient behaviour against the team's existing steady-state modelling approach.",
                ],
            },
        ],
    },

    {
        slug: "flight-dynamics",
        number: "03",
        title: "Aircraft Flight Dynamics",
        organization: "University of Toronto Aerospace Team — UAS Division",
        dates: "September 2025 – Present",
        summary:
            "Aircraft stability, control, aerodynamic analysis, and mechanical design for UTAT's competition unmanned aircraft.",
        tags: [
            "XFLR5",
            "MATLAB",
            "SolidWorks",
            "Aircraft Stability",
            "Aerodynamics",
        ],
        metrics: [
            {
                value: "5–15%",
                label: "static-margin design range",
            },
            {
                value: "25–37%",
                label: "MAC centre-of-gravity range",
            },
            {
                value: "~10",
                label: "tail configurations evaluated",
            },
        ],
        sections: [
            {
                title: "Stability and control",
                paragraphs: [
                    "The flight-dynamics work required defining a tail configuration that could maintain suitable stability and control across the aircraft's expected centre-of-gravity range while remaining practical to manufacture.",
                ],
                bullets: [
                    "Defined acceptable horizontal-tail geometry across a 5–15% static-margin range and a 25–37% MAC centre-of-gravity range.",
                    "Combined Raymer-based analytical calculations, Excel parameter studies, XFLR5 simulations, and scissor plots.",
                    "Re-optimized the horizontal tail across approximately ten configurations.",
                    "Replaced a NACA 0009 tail airfoil with a manufacturable flat-plate design while maintaining stability and control margins.",
                ],
            },
            {
                title: "Control authority",
                bullets: [
                    "Calculated stabilizer hinge moments using XFLR5 at maximum flight speed.",
                    "Analysed actuator requirements in MATLAB.",
                    "Confirmed that the selected servo could provide sufficient control authority.",
                ],
            },
            {
                title: "Mechanical design",
                bullets: [
                    "Designed a 3D-printable horizontal-stabilizer adapter in SolidWorks.",
                    "Integrated servo mounting directly into the component.",
                    "Iterated the design for manufacturability, weight, structural strength, and assembly through prototype printing and physical testing.",
                ],
            },
            {
                title: "Competition",
                paragraphs: [
                    "The aircraft placed third in Design Report and fourth overall in the Advanced Class at SAE Aero Design West 2026.",
                ],
            },
        ],
    },

    {
        slug: "rocketry",
        number: "04",
        title: "Hybrid Rocket Mechanical Design",
        organization: "University of Toronto Aerospace Team — Rocketry Division",
        dates: "January 2025 – Present",
        summary:
            "Mechanical design and structural verification for hybrid-propulsion hardware and static-test infrastructure.",
        tags: [
            "ANSYS Mechanical",
            "Onshape",
            "Structural Analysis",
            "Rocket Propulsion",
        ],
        metrics: [
            {
                value: "0.89 → 2.49",
                label: "test-stand plate factor of safety",
            },
            {
                value: "2.0",
                label: "chamber design factor of safety",
            },
            {
                value: "2.0",
                label: "fastener verification factor of safety",
            },
        ],
        sections: [
            {
                title: "Oxidizer system",
                bullets: [
                    "Designed a multi-part hybrid-rocket oxidizer-tank assembly in Onshape.",
                    "Modified mechanical drawings to support fabrication, assembly, and system integration.",
                ],
            },
            {
                title: "Structural redesign",
                bullets: [
                    "Used ANSYS Mechanical to identify structural failure in a bulkhead test-stand plate.",
                    "Redesigned the plate geometry.",
                    "Increased the calculated factor of safety from 0.89 to 2.49.",
                ],
            },
            {
                title: "Engineering verification",
                bullets: [
                    "Performed analytical stress calculations for the combustion chamber and determined the minimum wall thickness required for a factor of safety of 2.",
                    "Calculated static-test-stand bolt stresses and verified fastener integrity against allowable limits.",
                ],
            },
            {
                title: "Composite manufacturing",
                bullets: [
                    "Fabricated a carbon-fibre composite tube using epoxy wet layup on a mandrel.",
                    "Performed composite layup preparation for a liquid-rocket nose-cone mould.",
                ],
            },
        ],
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}