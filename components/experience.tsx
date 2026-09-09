'use client';
import { BrandMark } from '@/components/brand-mark';
import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Command,
  Copy,
  Moon,
  Plus,
  Sun,
  X,
} from 'lucide-react';
import { email, sections } from '@/data/content';
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.65, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [compact, setCompact] = useState(false);
  const [theme, setTheme] = useState('dark');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [resumeMessage, setResumeMessage] = useState('');
  useEffect(() => {
    // Synchronize the pre-paint document theme with the hydrated control.
    // oxlint-disable-next-line react/react-compiler
    setTheme(document.documentElement.dataset.theme || 'dark');
    const pref = matchMedia('(prefers-color-scheme: light)');
    const change = () => {
      let stored = null;
      try {
        stored = localStorage.getItem('ultracore-theme');
      } catch {}
      if (!stored) {
        const t = pref.matches ? 'light' : 'dark';
        document.documentElement.dataset.theme = t;
        setTheme(t);
      }
    };
    pref.addEventListener('change', change);
    const scroll = () => {
      setCompact(scrollY > 100);
      const elements = ['home', ...sections.map((s) => s.toLowerCase())]
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      let id = 'home';
      for (const el of elements) {
        if (el.getBoundingClientRect().top < innerHeight * 0.4) id = el.id;
      }
      setActive(id[0].toUpperCase() + id.slice(1));
    };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', scroll);
      pref.removeEventListener('change', change);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === 'Tab') {
        const list = Array.from(
          navRef.current?.querySelectorAll<HTMLElement>('a,button') ?? [],
        ).filter((el) => el.getClientRects().length > 0);
        if (!list?.length) return;
        const first = list[0],
          last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('ultracore-theme', next);
    } catch {}
  }
  async function resume(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    try {
      const response = await fetch('/Abhishek_Software_Engineer.pdf', {
        method: 'HEAD',
      });
      if (
        !response.ok ||
        !response.headers.get('content-type')?.includes('pdf')
      ) {
        setResumeMessage(
          'The résumé will be available soon. Please email me to request a copy.',
        );
        return;
      }
      const a = document.createElement('a');
      a.href = '/Abhishek_Software_Engineer.pdf';
      a.download = 'Abhishek_Software_Engineer.pdf';
      a.click();
      setResumeMessage('Résumé download started.');
    } catch {
      setResumeMessage(
        'Unable to download. Please email me to request a copy.',
      );
    }
  }
  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`command-nav ${compact ? 'compact' : ''} ${open ? 'is-open' : ''}`}
      >
        <div className="command-top">
          <a
            className="brand"
            href="#home"
            aria-label="ABHI.UltraCore home"
            onClick={() => setOpen(false)}
          >
            <BrandMark size={19} />
            <span>
              ABHI<span className="brand-light">.UltraCore</span>
            </span>
          </a>
          <span className="nav-divider" />
          <button
            ref={buttonRef}
            className="index-button"
            aria-expanded={open}
            aria-controls="section-index"
            onClick={() => setOpen(!open)}
          >
            <span className="active-dot" />
            <span>
              {open ? 'Close index' : active === 'Home' ? 'Explore' : active}
            </span>
            {open ? <X size={16} /> : <Plus size={16} />}
          </button>
          <button
            className="theme-button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
          >
            <span key={theme}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </span>
          </button>
          <a
            className="resume-link"
            href="/Abhishek_Software_Engineer.pdf"
            download
            onClick={resume}
            aria-label="Download Résumé"
          >
            <span>Résumé</span>
            <ArrowDownToLine size={15} />
          </a>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="section-index"
              ref={panelRef}
              className="nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="nav-panel-label mono">
                <Command size={13} /> SECTION INDEX <span>ESC TO CLOSE</span>
              </div>
              {sections.map((section, i) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  aria-current={active === section ? 'location' : undefined}
                  onClick={() => {
                    setOpen(false);
                    document
                      .getElementById(section.toLowerCase())
                      ?.focus({ preventScroll: true });
                  }}
                >
                  <span className="mono">0{i + 1}</span>
                  <span>{section}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <a
                className="mobile-resume"
                href="/Abhishek_Software_Engineer.pdf"
                download
                onClick={resume}
              >
                Download Résumé <ArrowDownToLine size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        {resumeMessage && (
          <div className="resume-message" role="status">
            {resumeMessage}
            <button
              aria-label="Dismiss résumé message"
              onClick={() => setResumeMessage('')}
            >
              <X size={14} />
            </button>
          </div>
        )}
      </nav>
      {open && (
        <button
          className="nav-backdrop"
          aria-label="Close navigation"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
export function Intro() {
  useEffect(() => {
    try {
      sessionStorage.setItem('ultracore-intro', 'seen');
    } catch {}
  }, []);
  return (
    <div className="intro" aria-hidden="true">
      <div>
        <BrandMark size={23} />
        <span>ABHI.UltraCore</span>
      </div>
      <span className="intro-line" />
      <small className="mono">INITIALIZING INTERFACE</small>
    </div>
  );
}
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
        .matches
    )
      return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
          ref.current.style.opacity = '1';
          ref.current.classList.toggle(
            'cursor-active',
            !!(e.target as Element).closest('a,button,summary'),
          );
        }
      });
    };
    const hide = () => {
      if (ref.current) ref.current.style.opacity = '0';
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', hide);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', hide);
    };
  }, []);
  return (
    <div ref={ref} className="custom-cursor" aria-hidden="true">
      <span />
    </div>
  );
}
export function Tilt({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== 'mouse' || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.transform = `perspective(1200px) rotateX(${(-(e.clientY - r.top - r.height / 2) / r.height) * 3}deg) rotateY(${((e.clientX - r.left - r.width / 2) / r.width) * 3}deg)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = '';
      }}
    >
      {children}
    </div>
  );
}
export function CopyEmail() {
  const [state, setState] = useState('Copy email');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  return (
    <button
      className="copy-email"
      aria-label={state}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setState('Copied!');
        } catch {
          setState('Select the email to copy');
        }
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setState('Copy email'), 2500);
      }}
    >
      {state === 'Copied!' ? <Check size={15} /> : <Copy size={15} />}
      <span role="status">{state}</span>
    </button>
  );
}
export function Year() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setYear(new Date().getFullYear()),
    );
    return () => cancelAnimationFrame(frame);
  }, []);
  return <>{year}</>;
}
export function MagneticLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const reduced = useReducedMotion();
  return (
    <a
      href={href}
      className="primary-button"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== 'mouse') return;
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.09}px,${(e.clientY - r.top - r.height / 2) * 0.12}px)`;
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = '';
      }}
    >
      {children}
    </a>
  );
}

