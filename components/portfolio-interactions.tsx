'use client';
import { useState, useRef } from 'react';
import { BrandMark } from './brand-mark';
import { email, sections } from '@/data/content';
export function Navigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main navigation">
        <a className="brand" href="/#home">
          <BrandMark size={26} />
          <span>
            ABHI<span className="brand-light">.UltraCore</span>
          </span>
        </a>
        <div className="nav-actions">
          <div
            className="explore"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setOpen(false);
                trigger.current?.focus();
              }
            }}
          >
            <button
              ref={trigger}
              className="nav-link"
              aria-expanded={open}
              aria-controls="explore-menu"
              onClick={() => setOpen(!open)}
            >
              Explore <span aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
            {open && (
              <div id="explore-menu" className="explore-menu">
                {sections.map((s) => (
                  <a
                    key={s}
                    href={'/#' + s.toLowerCase()}
                    onClick={() => setOpen(false)}
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            className="resume-link"
            href="/Abhishek_Software_Engineer.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <span className="pdf-label">PDF</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
export function MeetingDemo() {
  const [tab, setTab] = useState('Schedule');
  const [time, setTime] = useState('10:00');
  const [day, setDay] = useState('24');
  const [confirmed, setConfirmed] = useState(false);
  const tabs = ['Schedule', 'Overview', 'Invitation'];
  return (
    <div className="demo">
      <div className="demo-top">
        <strong>
          MeetingHub<span className="brand-period">.</span>
        </strong>
        <span className="demo-label">INTERACTIVE DEMO</span>
      </div>
      <div className="demo-tabs" role="tablist" aria-label="MeetingHub views">
        {tabs.map((t, i) => (
          <button
            key={t}
            id={'demo-tab-' + t}
            role="tab"
            aria-selected={tab === t}
            aria-controls="demo-panel"
            tabIndex={tab === t ? 0 : -1}
            onClick={() => setTab(t)}
            onKeyDown={(e) => {
              if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                      ? 2
                      : (i + (e.key === 'ArrowRight' ? 1 : 2)) % 3;
                setTab(tabs[next]);
                document.getElementById('demo-tab-' + tabs[next])?.focus();
              }
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div
        id="demo-panel"
        className="demo-body"
        role="tabpanel"
        aria-labelledby={'demo-tab-' + tab}
        tabIndex={0}
      >
        {tab === 'Schedule' ? (
          <>
            <p className="eyebrow">PRODUCT DISCOVERY / 30 MINUTES</p>
            <h3>Make time for a good idea.</h3>
            <div className="scheduler">
              <div>
                <p className="field-label">November 2026</p>
                <div
                  className="days"
                  role="group"
                  aria-label="Choose a demo date"
                >
                  {['23', '24', '25', '26', '27'].map((d, i) => (
                    <button
                      key={d}
                      aria-pressed={day === d}
                      onClick={() => {
                        setDay(d);
                        setConfirmed(false);
                      }}
                    >
                      <small>{['MON', 'TUE', 'WED', 'THU', 'FRI'][i]}</small>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <label className="time-label">
                Time in UTC
                <select
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setConfirmed(false);
                  }}
                >
                  <option>10:00</option>
                  <option>11:30</option>
                  <option>14:00</option>
                </select>
              </label>
            </div>
            <div className="demo-bottom">
              <span>
                {day} Nov · {time} UTC
              </span>
              <button
                className="button small"
                onClick={() => {
                  setConfirmed(true);
                  setTab('Invitation');
                }}
              >
                Preview invitation
              </button>
            </div>
          </>
        ) : tab === 'Overview' ? (
          <>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h3>One place for the next conversation.</h3>
            {confirmed ? (
              <div className="meeting-row">
                <span className="date-number">
                  {day}
                  <small>NOV</small>
                </span>
                <div>
                  <strong>Product discovery</strong>
                  <p>{time} UTC · 30 minutes</p>
                </div>
                <button
                  className="text-link"
                  onClick={() => setTab('Schedule')}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="empty-state">
                <p>No meetings in this demo yet.</p>
                <button
                  className="text-link"
                  onClick={() => setTab('Schedule')}
                >
                  Schedule a demo meeting
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="eyebrow">INVITATION PREVIEW</p>
            <h3>
              {confirmed ? 'You’re invited.' : 'Your invitation starts here.'}
            </h3>
            <div className="invitation">
              <strong>Product discovery</strong>
              <p>
                {day} November 2026 at {time} UTC
              </p>
              <p>30 minutes to discuss the product and next steps.</p>
            </div>
            <button className="text-link" onClick={() => setTab('Schedule')}>
              Change date or time
            </button>
          </>
        )}
      </div>
      <p className="demo-disclaimer" role="status">
        {confirmed ? 'Preview ready. ' : ''}Simulated scheduling. No invitation
        is sent or saved.
      </p>
    </div>
  );
}
export function CopyEmail() {
  const [status, setStatus] = useState('');
  return (
    <div className="copy-email">
      <button
        className="text-link"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus('Email address copied.');
          } catch {
            setStatus(
              'Copy unavailable. Select the email address above to copy it.',
            );
          }
        }}
      >
        Copy email address
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
