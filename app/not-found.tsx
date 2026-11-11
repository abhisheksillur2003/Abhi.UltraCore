import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main-content" className="shell legal">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p>
        Return to the portfolio to explore projects, experience, and contact
        details.
      </p>
      <Link className="button" href="/">
        Back to portfolio
      </Link>
    </main>
  );
}
