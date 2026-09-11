'use client';

import { BrandMark } from '@/components/brand-mark';
import { MagneticLink } from '@/components/experience';
import { contactHref } from '@/data/content';
import { ArrowDown, ArrowUpRight, Terminal, Workflow } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  function moveScene(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || !visualRef.current) return;
    const bounds = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualRef.current.style.setProperty('--scene-rx', `${-8 - y * 12}deg`);
    visualRef.current.style.setProperty('--scene-ry', `${12 + x * 18}deg`);
    visualRef.current.style.setProperty('--glow-x', `${50 + x * 24}%`);
    visualRef.current.style.setProperty('--glow-y', `${48 + y * 20}%`);
  }

  function resetScene() {
    if (!visualRef.current) return;
    visualRef.current.style.removeProperty('--scene-rx');
    visualRef.current.style.removeProperty('--scene-ry');
    visualRef.current.style.removeProperty('--glow-x');
    visualRef.current.style.removeProperty('--glow-y');
  }

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-eyebrow">
        <span className="cross">
          <BrandMark size={28} />
        </span>
        <span>ABHISHEK S ILLUR</span>
        <span className="hero-edition">ENGINEERING × PRODUCT</span>
      </div>
      <h1>
        Ideas into
        <br />
        <span className="headline-last">
          working <em>systems.</em>
          <span className="headline-dot">↗</span>
        </span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-copy">
          <p>
            Full-Stack Software Engineer building scalable SaaS products and
            modern web applications.
          </p>
          <MagneticLink href={contactHref}>
            Contact Me <ArrowUpRight size={19} />
          </MagneticLink>
          <span className="hero-note mono">
            THOUGHTFULLY DESIGNED. BUILT TO WORK.
          </span>
        </div>
        <div
          ref={visualRef}
          className="core-visual"
          aria-hidden="true"
          onPointerMove={moveScene}
          onPointerLeave={resetScene}
        >
          <div className="scene-ambient" />
          <div className="visual-grid" />
          <div className="hero-scene">
            <div className="core-orbit orbit-one">
              <i />
              <i />
            </div>
            <div className="core-orbit orbit-two">
              <i />
              <i />
            </div>
            <div className="core-orbit orbit-three">
              <i />
            </div>
            <div className="core-node">
              <div className="core-slab slab-back" />
              <div className="core-slab slab-middle" />
              <div className="core-slab slab-front">
                <BrandMark size={42} />
                <span>UltraCore</span>
                <small>IDEA → SYSTEM</small>
              </div>
              <span className="core-beam" />
            </div>
            <div className="system-fragment fragment-code">
              <div>
                <Terminal size={13} />
                <span>product.ts</span>
                <i />
              </div>
              <code>
                <b>const</b> product = build({'{'})
                <br />
                &nbsp; experience: <strong>&apos;intuitive&apos;</strong>,<br />
                &nbsp; architecture: <strong>&apos;scalable&apos;</strong>
                <br />
                {'}'});
              </code>
            </div>
            <div className="system-fragment fragment-status">
              <span className="mono">CORE STATUS</span>
              <strong>ONLINE</strong>
              <div>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="system-fragment fragment-flow">
              <Workflow size={18} />
              <span>
                Design <b>→</b> Develop <b>→</b> Deliver
              </span>
            </div>
          </div>
          <span className="visual-coordinate mono">
            X 12.48 / Y 08.24 / SYSTEM ACTIVE
          </span>
        </div>
      </div>
      <div className="hero-baseline mono">
        <span>INDEPENDENT THINKING. CONNECTED SYSTEMS.</span>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
