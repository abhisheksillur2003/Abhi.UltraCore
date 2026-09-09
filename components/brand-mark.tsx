/** UltraCore: an open architectural A surrounding an independent core. */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="brand-mark"
    >
      <path d="M3 33 16 7h8L11 33H3Z" fill="currentColor" />
      <path d="m25 12 12 21h-9l-7-13 4-8Z" fill="currentColor" />
      <path d="m19 24 5 5-5 5-5-5 5-5Z" fill="currentColor" opacity=".55" />
      <path d="M28 6h6v6h-6z" fill="currentColor" />
    </svg>
  );
}
