import {
  Navigation,
  MeetingDemo,
  CopyEmail,
} from '@/components/portfolio-interactions';
import { BrandMark } from '@/components/brand-mark';
import {
  certifications,
  services,
  skills,
  email,
  linkedinHref,
  contactHref,
  meetingStack,
} from '@/data/content';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="hero shell" id="home">
          <p className="eyebrow">
            ABHISHEK S ILLUR / FULL-STACK SOFTWARE ENGINEER
          </p>
          <h1>
            Considered interfaces.
            <br />
            <span>Capable software.</span>
          </h1>
          <p className="hero-description">
            I build web applications that bring the interface, the data, and the
            details together.
          </p>
          <div className="actions">
            <a className="button" href="#projects">
              Explore the work
            </a>
            <a className="text-link" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-product">
            <div className="product-intro">
              <span className="eyebrow">IN FOCUS / MEETINGHUB</span>
              <p>
                A little structure.
                <br /> A better meeting.
              </p>
              <span className="muted">Try the scheduling demo.</span>
            </div>
            <MeetingDemo />
          </div>
        </section>
        <section id="projects" className="shell section">
          <div className="section-title">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Built around the task.</h2>
            <p className="section-lead">
              From making time for a conversation to making sense of data. A
              closer look at the decisions behind the software.
            </p>
          </div>
          <article className="project-story meeting-story">
            <div>
              <p className="eyebrow">SAAS PRODUCT</p>
              <h3>MeetingHub</h3>
              <p className="project-subtitle">
                Scheduling, with the details in place.
              </p>
            </div>
            <div>
              <p>
                A guided flow brings meeting details, timezones, and invitations
                together. The interface above is a local demonstration of that
                scheduling experience.
              </p>
              <dl className="project-facts">
                <div>
                  <dt>Workflow</dt>
                  <dd>Schedule, review, and invite both participants.</dd>
                </div>
                <div>
                  <dt>Foundation</dt>
                  <dd>
                    Authentication, meeting management, and subscription usage
                    controls.
                  </dd>
                </div>
              </dl>
              <details className="architecture">
                <summary>Explore the architecture</summary>
                <p>
                  Supabase authentication and PostgreSQL store the application
                  data. Row Level Security controls access to meetings. Stripe
                  supports subscription billing, while Resend and React Email
                  deliver invitations.
                </p>
                <ul className="tags">
                  {meetingStack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
          <article className="project-story quant-story">
            <div>
              <p className="eyebrow">DATA ANALYSIS / PYTHON</p>
              <h3>QuantLens</h3>
              <p className="project-subtitle">Find structure in market data.</p>
              <p>
                A Python pipeline to download, process, analyse, and visualise
                stock-market time series. Moving averages, RSI, and volume bring
                trend and momentum into view.
              </p>
              <ul className="tags">
                <li>Python</li>
                <li>Matplotlib</li>
                <li>mplfinance</li>
              </ul>
            </div>
            <figure className="chart-panel">
              <figcaption>
                <strong>QuantLens</strong>
                <span>Illustrative data</span>
              </figcaption>
              <p>Price and moving average</p>
              <svg
                viewBox="0 0 600 280"
                role="img"
                aria-label="Simulated price series and smoothed moving average, shown only to illustrate the analysis approach"
              >
                <g stroke="var(--line)" strokeWidth="1">
                  <path d="M30 40H570M30 110H570M30 180H570M30 250H570" />
                </g>
                <path
                  d="M30 220L45 211L60 216L75 195L90 205L105 182L120 198L135 160L150 176L165 151L180 170L195 185L210 172L225 160L240 174L255 141L270 155L285 120L300 139L315 112L330 125L345 95L360 116L375 130L390 112L405 119L420 88L435 101L450 75L465 89L480 62L495 78L510 54L525 62L540 38L555 52L570 32"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                />
                <path
                  d="M30 225C150 210 130 160 230 168S360 120 410 110S510 80 570 60"
                  fill="none"
                  stroke="var(--muted)"
                  strokeDasharray="5 5"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="chart-key">
                <span>Solid: simulated price</span>
                <span>Dashed: moving average</span>
              </div>
              <small>
                Illustration only. No live market feed or investment guidance.
              </small>
            </figure>
          </article>
          <article className="dev-story">
            <div className="dev-lettering" aria-hidden="true">
              <span>DevSpace.</span>
              <p>
                Design.
                <br />
                Develop.
                <br />
                Iterate.
              </p>
              <small>HTML / CSS / JAVASCRIPT</small>
            </div>
            <div>
              <p className="eyebrow">FRONTEND FOUNDATIONS</p>
              <h3>DevSpace</h3>
              <p className="project-subtitle">A home for the work.</p>
              <p>
                A responsive portfolio built with HTML, CSS, and JavaScript.
                Dynamic content and interactive components make projects and
                skills easier to explore on every screen.
              </p>
              <p className="muted project-note">
                The typography study alongside this description represents the
                project’s frontend focus.
              </p>
            </div>
          </article>
        </section>
        <section id="about" className="shell section about">
          <div>
            <p className="eyebrow">02 / ABOUT</p>
            <h2>
              The interface is
              <br />
              only the beginning.
            </h2>
          </div>
          <div className="prose">
            <p>
              I’m Abhishek S Illur, a Full-Stack Software Engineer focused on
              SaaS products, web applications, AI integrations, and automation.
            </p>
            <p>
              I work across the frontend and backend, connecting product
              decisions to the systems that support them.
            </p>
            <a
              className="text-link"
              href="/Abhishek_Software_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé (PDF)
            </a>
          </div>
        </section>
        <section id="experience" className="shell section experience">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <div className="experience-layout">
            <h2>
              Explain it clearly.
              <br />
              Build on the fundamentals.
            </h2>
            <div>
              <p className="eyebrow">TEACHING ASSISTANT INTERN / REMOTE</p>
              <h3>Jainemo Pvt. Ltd.</h3>
              <p className="company-detail">at Apna College</p>
              <p>
                Guided students through Data Structures and Algorithms in Java,
                helping them work through difficult concepts and debug their
                code.
              </p>
              <a
                className="text-link"
                href={linkedinHref}
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn profile
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="shell section services">
          <div>
            <p className="eyebrow">04 / WHAT I DO</p>
            <h2>
              From the first interaction
              <br />
              to the data behind it.
            </h2>
            <p className="section-lead">Explore the areas I work in.</p>
          </div>
          <div className="service-list">
            {services.map((s, i) => (
              <details key={s.title}>
                <summary>
                  <span className="service-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.title}
                  <span className="disclosure" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="service-body">
                  <p>{s.description}</p>
                  <ul className="tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section id="skills" className="shell section skills">
          <p className="eyebrow">05 / TOOLKIT</p>
          <h2>The tools behind the work.</h2>
          <ul className="skill-list">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section id="certifications" className="shell section">
          <p className="eyebrow">06 / CONTINUED LEARNING</p>
          <h2>A foundation to build on.</h2>
          <div className="certificates">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.document}
                target="_blank"
                rel="noreferrer"
                className="certificate"
              >
                <Image
                  src={c.preview}
                  alt=""
                  width={180}
                  height={120}
                  sizes="(max-width:600px) 90px, 150px"
                />
                <div>
                  <p className="eyebrow">{c.issuer}</p>
                  <h3>{c.name}</h3>
                  <p className="muted">{c.date}</p>
                </div>
                <span className="certificate-action">
                  View certificate <span className="pdf-label">PDF</span>
                </span>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="shell section contact">
          <p className="eyebrow">07 / START A CONVERSATION</p>
          <h2>
            What are you
            <br />
            working on?
          </h2>
          <p>
            Tell me about the product, the problem, and where you want to take
            it.
          </p>
          <a className="contact-address" href={'mailto:' + email}>
            {email}
          </a>
          <div className="actions">
            <a
              className="button"
              href={contactHref}
              target="_blank"
              rel="noreferrer"
            >
              Contact me in Gmail
            </a>
            <a
              className="text-link"
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
          <CopyEmail />
        </section>
      </main>
      <footer className="shell footer">
        <a className="brand" href="#home">
          <BrandMark size={24} />
          ABHI.UltraCore
        </a>
        <p>Abhishek S Illur</p>
        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <span>Drafts for review</span>
        </div>
      </footer>
    </>
  );
}
