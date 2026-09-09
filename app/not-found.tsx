import { BrandMark } from '@/components/brand-mark';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <Link href="/" className="brand">
        <BrandMark size={23} />
        ABHI.UltraCore
      </Link>
      <span className="mono">ROUTE RESOLUTION / NOT FOUND</span>
      <h1>
        404<span>.</span>
      </h1>
      <h2>This route doesn’t exist in the system.</h2>
      <Link className="primary-button" href="/">
        Back to Home <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
