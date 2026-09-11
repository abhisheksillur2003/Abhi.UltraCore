import { BrandMark } from '@/components/brand-mark';
import { ArrowUpRight, Code2, Boxes, Compass } from 'lucide-react';
import Image from 'next/image';
import { Hero } from '@/components/hero';
import {
  Navigation,
  Intro,
  Cursor,
  MotionProvider,
  Reveal,
  CopyEmail,
  Year,
  MagneticLink,
} from '@/components/experience';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { certifications, contactHref, skills, email } from '@/data/content';
function SectionHeading({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="section-heading">
      <span className="section-label mono">
        <span>{number}</span> / {label}
      </span>
      <h2>{children}</h2>
    </Reveal>
  );
}
export default function Home() {
  return (
    <MotionProvider>
      <Intro />
      <Cursor />
      <Navigation />
      <main id="main-content">
        <Hero />
        <section
          id="about"
          tabIndex={-1}
          className="section-shell about-section"
        >
          <SectionHeading number="01" label="ABOUT">
            Engineering with
            <br />
            <span>the product in mind.</span>
          </SectionHeading>
          <Reveal className="about-content">
            <p>
              I’m a Full-Stack Software Engineer focused on building scalable
              SaaS products, intelligent web applications, and AI-powered
              solutions. I combine engineering, automation, and product thinking
              to turn complex ideas into practical digital products.
            </p>
            <div className="about-identities">
              <span>
                <Code2 size={19} />
                Engineer
              </span>
              <span>
                <Boxes size={19} />
                Builder
              </span>
              <span>
                <Compass size={19} />
                Product thinker
              </span>
            </div>
          </Reveal>
        </section>
        <section
          id="services"
          tabIndex={-1}
          className="section-shell standard-section"
        >
          <SectionHeading number="02" label="SERVICES">
            Built end to end.
            <br />
            <span>Considered at every layer.</span>
          </SectionHeading>
          <Reveal>
            <Services />
          </Reveal>
        </section>
        <section
          id="projects"
          tabIndex={-1}
          className="section-shell standard-section projects-section"
        >
          <SectionHeading number="03" label="SELECTED PROJECTS">
            The thinking.
            <br />
            <span>The building. The work.</span>
          </SectionHeading>
          <Projects />
        </section>
        <section id="skills" tabIndex={-1} className="skills-section">
          <div className="section-shell">
            <Reveal className="skills-heading">
              <span className="section-label mono">
                <span>04</span> / SKILLS
              </span>
              <h2>The tools behind the thinking.</h2>
              <span className="mono">A CONNECTED TOOLKIT</span>
            </Reveal>
          </div>
          <div
            className="skills-rail"
            tabIndex={0}
            role="region"
            aria-label="Technology skills, scroll horizontally to see all"
          >
            <div className="skills-track">
              {skills.map((skill, i) => (
                <span key={skill}>
                  <small className="mono">
                    {String(i + 1).padStart(2, '0')}
                  </small>
                  {skill}
                  <i>✳</i>
                </span>
              ))}
            </div>
          </div>
          <p className="skills-hint mono section-shell">
            EXPLORE THE TOOLKIT ↔
          </p>
        </section>
        <section
          id="certifications"
          tabIndex={-1}
          className="section-shell certifications-section"
        >
          <SectionHeading number="05" label="CERTIFICATIONS">
            Always building.
            <br />
            <span>Always learning.</span>
          </SectionHeading>
          <div className="credentials">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <a
                  className="credential"
                  href={c.document}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${c.name} certificate`}
                >
                  <span className="credential-preview" aria-hidden="true">
                    <Image
                      src={c.preview}
                      alt=""
                      width={360}
                      height={240}
                      sizes="112px"
                    />
                  </span>
                  <span className="credential-copy">
                    <span className="credential-meta mono">
                      <span>{c.issuer}</span>
                      <span>{c.date}</span>
                    </span>
                    <span className="credential-title">{c.name}</span>
                    <span className="credential-action mono">
                      View certificate <ArrowUpRight size={13} />
                    </span>
                  </span>
                  <span className="credential-index mono" aria-hidden="true">
                    0{i + 1}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="contact" tabIndex={-1} className="contact-section">
          <div className="section-shell">
            <Reveal>
              <span className="section-label mono">
                <span>06</span> / LET’S CONNECT
              </span>
              <h2>
                Have something
                <br />
                <span>worth building?</span>
                <ArrowUpRight aria-hidden="true" />
              </h2>
              <div className="contact-bottom">
                <div>
                  <p>A product, a collaboration, or the next chapter.</p>
                  <MagneticLink href={contactHref}>
                    Contact Me <ArrowUpRight size={20} />
                  </MagneticLink>
                </div>
                <div className="contact-email">
                  <a href={`mailto:${email}`}>{email}</a>
                  <CopyEmail />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="section-shell">
        <div className="footer-top">
          <a href="#home" className="brand">
            <BrandMark size={20} />
            <span>
              ABHI<span className="brand-light">.UltraCore</span>
            </span>
          </a>
          <p>Built with intent. Engineered for impact.</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="footer-bottom mono">
          <span>
            © <Year /> ABHISHEK S ILLUR
          </span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </MotionProvider>
  );
}
