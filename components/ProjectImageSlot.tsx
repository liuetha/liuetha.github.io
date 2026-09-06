import type { ProjectImage } from "@/data/projects";

type ProjectImageSlotProps = {
  image?: ProjectImage;
  label?: string;
  compact?: boolean;
  gallery?: boolean;
  placeholder?: boolean;
};

export default function ProjectImageSlot({
  image,
  label = "Project photo",
  compact = false,
  gallery = false,
  placeholder = false,
}: ProjectImageSlotProps) {
  if (!image) {
    if (!placeholder) return null;

    return (
      <div
        className={`project-image-slot project-image-placeholder${compact ? " project-image-compact" : ""}`}
        aria-label={`${label} placeholder`}
      >
        <span>{label}</span>
      </div>
    );
  }

  const classes = [
    "project-image-slot",
    compact ? "project-image-compact" : "",
    gallery ? "project-image-gallery-item" : "",
    image.fit === "contain" ? "project-image-contain" : "project-image-cover",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={classes}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      {image.caption && !compact && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
