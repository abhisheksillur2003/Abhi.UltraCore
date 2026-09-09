'use client';
import { Tilt, MagneticLink } from '@/components/experience';
import {
  ArrowUpRight,
  ArrowDown,
  Terminal,
  Layers3,
  Workflow,
} from 'lucide-react';
export function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-eyebrow">
        <span className="cross">✳</span>
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
          <MagneticLink href="mailto:abhisheksillur2003@gmail.com">
            Contact Me <ArrowUpRight size={19} />
          </MagneticLink>
          <span className="hero-note mono">
            THOUGHTFULLY DESIGNED. BUILT TO WORK.
          </span>
        </div>
        <Tilt className="core-visual">
          <div className="visual-grid" />
          <div className="core-orbit orbit-one" />
          <div className="core-orbit orbit-two" />
          <div className="core-chip">
            <Layers3 size={34} />
            <span>UltraCore</span>
            <small>IDEA → SYSTEM</small>
          </div>
          <div className="system-fragment fragment-code">
            <div>
              <Terminal size={13} />
              <span>product.ts</span>
              <i />
            </div>
            <code>
              <b>const</b> product = build({'{'}
              <br />
              &nbsp; experience: <strong>&apos;intuitive&apos;</strong>,<br />
              &nbsp; architecture: <strong>&apos;scalable&apos;</strong>
              <br />
              {'}'});
            </code>
          </div>
          <div className="system-fragment fragment-flow">
            <Workflow size={18} />
            <span>
              Design <b>→</b> Develop <b>→</b> Deliver
            </span>
          </div>
          <span className="visual-coordinate mono">
            [ SYSTEM THINKING, IN MOTION ]
          </span>
        </Tilt>
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
