const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <ellipse cx="12" cy="12" rx="6" ry="10" stroke="currentColor" />
    <path d="M2 12h20" stroke="currentColor" />
  </svg>
);

export default GlobeIcon;
