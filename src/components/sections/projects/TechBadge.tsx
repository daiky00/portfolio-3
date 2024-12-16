interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="rounded bg-secondary px-2.5 py-0.5 text-sm">
      {tech}
    </span>
  );
}