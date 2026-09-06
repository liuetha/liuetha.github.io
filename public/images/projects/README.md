# Project images

Put project photos in this folder, then add them in `data/projects.ts`.

Example cover image:

```ts
coverImage: {
  src: "/images/projects/cold-spray-cover.jpg",
  alt: "ANSYS Fluent particle trajectories through the aerosol deposition nozzle",
},
```

Example image inside a project section:

```ts
{
  title: "Flow and particles",
  paragraphs: ["..."],
  image: {
    src: "/images/projects/cold-spray-particles.jpg",
    alt: "Particle trajectories coloured by velocity in the CFD model",
    caption: "Optional caption shown below the image.",
  },
},
```

If an image is omitted, the site shows a light placeholder so you can see where the photo will go.
