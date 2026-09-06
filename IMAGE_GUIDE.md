# Project images

Project images live in `public/images/projects/` and are connected to the site in `data/projects.ts`.

## Cover image

Each project can have one `coverImage`. It appears on the homepage and at the top of the project page.

```ts
coverImage: {
  src: "/images/projects/solar-car-cover.jpg",
  alt: "Blue Sky Solar Racing solar car on track",
},
```

## One image in a section

```ts
image: {
  src: "/images/projects/uas-tail-sizing.png",
  alt: "Linear horizontal-tail sizing plot",
  caption: "Tail sizing across stability and trim constraints.",
  fit: "contain",
},
```

Use `fit: "contain"` for plots, CAD screenshots, CFD contours, and other figures where cropping would remove information. Use `fit: "cover"` for normal photos.

## Two images side by side

Use `images` when a section benefits from a comparison or CAD + physical prototype pair.

```ts
images: [
  {
    src: "/images/projects/before.png",
    alt: "Result before the change",
    caption: "Before",
    fit: "contain",
  },
  {
    src: "/images/projects/after.png",
    alt: "Result after the change",
    caption: "After",
    fit: "contain",
  },
],
```

On mobile, paired images stack vertically.

## PDF presentation

The aerosol-deposition presentation is stored at:

`public/files/vacuum-cold-spray-presentation.pdf`

Its title, description, and path are configured through the `presentation` field of the cold-spray project in `data/projects.ts`.
