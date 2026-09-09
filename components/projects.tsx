'use client';
import { useState } from 'react';
import {
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  LayoutDashboard,
  Mail,
  MoreHorizontal,
  Search,
  Video,
  ArrowUpRight,
} from 'lucide-react';
import { meetingStack } from '@/data/content';
import { Reveal, Tilt } from '@/components/experience';
function Tags({ items }: { items: string[] }) {
  return (
    <div className="tech-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
function MeetingMockup() {
  const [tab, setTab] = useState('Dashboard');
  return (
    <div className="meeting-stage">
      <div
        className="mockup-tabbar"
        role="tablist"
        aria-label="MeetingHub interface previews"
      >
        {['Dashboard', 'Scheduling', 'Invitation'].map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            aria-controls="meeting-preview"
            id={`tab-${t}`}
            tabIndex={tab === t ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const tabs = ['Dashboard', 'Scheduling', 'Invitation'];
                const next =
                  tabs[
                    (tabs.indexOf(t) + (e.key === 'ArrowRight' ? 1 : 2)) % 3
                  ];
                setTab(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
        <span className="mono">INTERFACE STUDY</span>
      </div>
      <Tilt className="meeting-window">
        <div className="window-chrome">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>MEETING HUB</span>
          <span className="mono">PRODUCT PREVIEW</span>
        </div>
        <div
          className="meeting-app"
          id="meeting-preview"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
        >
          <aside className="meeting-sidebar">
            <span className="meeting-brand">
              <span>m.</span>MeetingHub
            </span>
            <div className="sidebar-selected">
              <LayoutDashboard size={15} />
              Overview
            </div>
            <div>
              <CalendarDays size={15} />
              Meetings
            </div>
            <div>
              <Mail size={15} />
              Invitations
            </div>
            <div className="sidebar-plan">
              <small>YOUR WORKSPACE</small>
              <strong>Free plan</strong>
              <span>5 meetings / month</span>
              <div className="usage-track">
                <i />
              </div>
              <small>USAGE METERING</small>
            </div>
          </aside>
          <div className="meeting-main">
            {tab === 'Dashboard' ? (
              <>
                <div className="dashboard-heading">
                  <div>
                    <span className="mock-eyebrow">YOUR DAY, IN FOCUS</span>
                    <h4>Good meetings start here.</h4>
                  </div>
                  <span className="mock-primary">
                    <PlusSymbol />
                    New meeting
                  </span>
                </div>
                <div className="dashboard-overview">
                  <div>
                    <CalendarDays size={17} />
                    <span>Plan with clarity</span>
                    <small>All your meetings in one place</small>
                  </div>
                  <div>
                    <Globe2 size={17} />
                    <span>Every timezone, covered</span>
                    <small>Explicit time. Fewer mix-ups.</small>
                  </div>
                </div>
                <div className="meeting-list-heading">
                  <h5>Upcoming meetings</h5>
                  <span>
                    <Search size={13} /> Search meetings
                  </span>
                </div>
                <div className="meeting-card">
                  <div className="date-tile">
                    <span>SEP</span>
                    <b>24</b>
                  </div>
                  <div>
                    <h5>Product discovery</h5>
                    <span>10:00 – 10:30 · UTC</span>
                  </div>
                  <span className="status-tag">Scheduled</span>
                  <MoreHorizontal size={17} />
                </div>
                <div className="meeting-card">
                  <div className="date-tile violet">
                    <span>SEP</span>
                    <b>25</b>
                  </div>
                  <div>
                    <h5>Design review</h5>
                    <span>14:00 – 14:45 · UTC</span>
                  </div>
                  <span className="status-tag">Scheduled</span>
                  <MoreHorizontal size={17} />
                </div>
                <div className="dashboard-bottom">
                  <Check size={14} /> Branded invitations. Sent to both
                  participants.
                </div>
              </>
            ) : tab === 'Scheduling' ? (
              <>
                <span className="mock-eyebrow">GUIDED MEETING CREATION</span>
                <h4>A little structure. A better meeting.</h4>
                <div className="wizard-steps">
                  {[
                    'Date',
                    'Time',
                    'Participant',
                    'Details',
                    'Review',
                    'Confirm',
                  ].map((s, i) => (
                    <span key={s} className={i === 4 ? 'current-step' : ''}>
                      {i < 4 ? <Check size={12} /> : i + 1}
                      <small>{s}</small>
                    </span>
                  ))}
                </div>
                <div className="review-panel">
                  <span className="mock-eyebrow">REVIEW YOUR MEETING</span>
                  <h5>Product discovery</h5>
                  <p>
                    <CalendarDays size={15} />
                    24 September 2026
                  </p>
                  <p>
                    <Clock3 size={15} />
                    10:00 – 10:30 <b>UTC</b>
                  </p>
                  <p>
                    <Video size={15} />
                    Meeting link validated
                  </p>
                  <div>
                    <Check size={14} /> Invitations go to organiser +
                    participant
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className="mock-eyebrow">BRANDED EMAIL PREVIEW</span>
                <div className="email-preview">
                  <span className="meeting-brand">
                    <span>m.</span>MeetingHub
                  </span>
                  <div className="email-icon">
                    <Mail size={26} />
                  </div>
                  <h4>You’re invited.</h4>
                  <p>Let’s make time for a good conversation.</p>
                  <div className="email-details">
                    <h5>Product discovery</h5>
                    <p>Thursday, 24 September 2026</p>
                    <strong>10:00 – 10:30 UTC</strong>
                    <span className="mock-primary">
                      Join meeting <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <small>Your meeting time is shown explicitly in UTC.</small>
                </div>
              </>
            )}
          </div>
        </div>
      </Tilt>
      <div className="meeting-stage-bottom mono">
        <span>AUTH → SCHEDULE → INVITE</span>
        <span>DESIGNED TO REMOVE FRICTION</span>
      </div>
    </div>
  );
}
function PlusSymbol() {
  return <span style={{ fontSize: 16, lineHeight: 1 }}>+</span>;
}
function QuantMockup() {
  return (
    <Tilt className="quant-window">
      <div className="quant-header">
        <strong>
          Quant<span>Lens</span>
        </strong>
        <span className="mono">TECHNICAL ANALYSIS</span>
        <span className="quant-live">HISTORICAL DATA</span>
      </div>
      <div className="quant-title">
        <div>
          <span className="mono">PRICE & MOMENTUM</span>
          <h4>Reading between the trends.</h4>
        </div>
        <span className="mono">1D</span>
      </div>
      <div className="chart-legend mono">
        <span>
          <i />
          Price
        </span>
        <span>
          <i />
          MA50
        </span>
        <span>
          <i />
          MA200
        </span>
      </div>
      <svg
        className="stock-chart"
        viewBox="0 0 600 270"
        role="img"
        aria-label="Illustrative candlestick price chart with 50-day and 200-day moving averages and volume"
      >
        <g stroke="var(--line)" strokeWidth=".8">
          {[35, 85, 135, 185, 235].map((y) => (
            <path key={y} d={`M0 ${y}H600`} />
          ))}
          {[60, 160, 260, 360, 460, 560].map((x) => (
            <path key={x} d={`M${x} 0V270`} />
          ))}
        </g>
        {Array.from({ length: 42 }, (_, i) => {
          const y = 170 - i * 2.8 + Math.sin(i * 0.57) * 19;
          const up = i % 3 !== 0;
          return (
            <g
              key={i}
              stroke={up ? '#6bbca5' : '#cf8394'}
              fill={up ? '#6bbca5' : '#cf8394'}
            >
              <path d={`M${i * 14 + 9} ${y - 12}v32`} />
              <rect x={i * 14 + 5} y={y} width="8" height={8 + (i % 9)} />
              <rect
                x={i * 14 + 5}
                y={253 - ((i % 7) + 2) * 3}
                width="8"
                height={((i % 7) + 2) * 3}
                opacity=".3"
                stroke="none"
              />
            </g>
          );
        })}
        <path
          d="M0 183 C65 190 80 150 135 167 S225 156 260 145 S355 131 397 108 S460 121 495 84 S560 77 600 62"
          fill="none"
          stroke="#9e91dd"
          strokeWidth="2"
        />
        <path
          d="M0 195 Q160 193 280 157 T600 109"
          fill="none"
          stroke="#bdab79"
          strokeWidth="2"
        />
        <text x="8" y="263" fill="var(--muted)" fontSize="9">
          VOLUME
        </text>
      </svg>
      <div className="rsi-label mono">
        <span>RELATIVE STRENGTH INDEX</span>
        <span>RSI · 14</span>
      </div>
      <svg
        className="rsi-chart"
        viewBox="0 0 600 60"
        aria-label="Illustrative relative strength index"
        role="img"
      >
        <path
          d="M0 12H600M0 48H600"
          stroke="var(--line)"
          strokeDasharray="4 4"
        />
        <path
          d="M0 38L20 25L40 31L60 40L80 28L100 33L120 14L140 29L160 19L180 32L200 38L220 24L240 34L260 29L280 17L300 25L320 15L340 29L360 25L380 39L400 32L420 20L440 27L460 18L480 34L500 22L520 30L540 18L560 27L580 17L600 24"
          stroke="#9e91dd"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
      <div className="quant-footer mono">
        <span>PYTHON / MATPLOTLIB / MPLFINANCE</span>
        <span>ILLUSTRATIVE CHART</span>
      </div>
    </Tilt>
  );
}
function DevMockup() {
  return (
    <div
      className="dev-stage"
      aria-label="DevSpace responsive portfolio interface study"
    >
      <div className="dev-browser">
        <div className="dev-chrome">
          <span>devspace.</span>
          <span>About &nbsp; Work &nbsp; Contact</span>
        </div>
        <div className="dev-content">
          <span className="mono">DESIGN. DEVELOP. ITERATE.</span>
          <h4>
            A space for
            <br />
            <em>what I build.</em>
          </h4>
          <p>
            Thoughtful interfaces.
            <br />A foundation in the web.
          </p>
          <div className="dev-line" />
          <div className="dev-mini-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
        <span className="dev-bottom mono">RESPONSIVE BY DESIGN</span>
      </div>
      <div className="dev-phone">
        <div />
        <span>devspace.</span>
        <h4>
          A space
          <br />
          for what
          <br />
          <em>I build.</em>
        </h4>
        <p>Thoughtful interfaces.</p>
        <i />
        <i />
        <small>SMALL SCREEN. SAME INTENT.</small>
      </div>
    </div>
  );
}
export function Projects() {
  return (
    <div className="projects-content">
      <article className="flagship">
        <Reveal>
          <div className="project-header">
            <div>
              <div className="project-kicker mono">
                <span>01 / SAAS PLATFORM</span>
                <span className="flagship-label">FLAGSHIP PROJECT</span>
              </div>
              <h3>MEETING HUB</h3>
              <p>Less scheduling friction. Better first impressions.</p>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </Reveal>
        <Reveal>
          <MeetingMockup />
        </Reveal>
        <Reveal className="case-details">
          <div>
            <span className="detail-label mono">THE PROBLEM</span>
            <p>
              A simple meeting shouldn’t mean tangled timezones, broken links,
              and impersonal invitations.
            </p>
          </div>
          <div>
            <span className="detail-label mono">THE APPROACH</span>
            <p>
              A guided creation flow that sends branded, timezone-aware
              invitations to both organiser and participant in under a minute.
            </p>
          </div>
          <div>
            <span className="detail-label mono">ENGINEERED FOR</span>
            <ul>
              <li>Validated scheduling & duplicate prevention</li>
              <li>Search, filter, sort & manage meetings</li>
              <li>Database-enforced subscription quotas</li>
              <li>Stripe Checkout & Billing Portal</li>
            </ul>
          </div>
        </Reveal>
        <details className="project-architecture">
          <summary>
            Explore the architecture <ChevronRight size={15} />
          </summary>
          <div>
            <p>
              Email authentication, sign-up and password reset, with
              architecture prepared for Google and GitHub sign-in. Row Level
              Security protects meeting data. Resend and React Email deliver
              invitations designed for Gmail, Outlook and Apple Mail.
            </p>
            <p>
              Meeting management supports viewing, editing, deleting and
              duplicating. Free includes 5 meetings/month, Startup 50, and Pro
              500, with usage enforced at the database layer.
            </p>
            <Tags items={meetingStack} />
          </div>
        </details>
        <Tags
          items={['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Resend']}
        />
      </article>
      <article className="quant-project">
        <Reveal className="quant-copy">
          <span className="project-kicker mono">
            02 / STOCK TECHNICAL ANALYSIS
          </span>
          <h3>QuantLens</h3>
          <p className="project-subtitle">
            From market data
            <br />
            to a clearer picture.
          </p>
          <div className="compact-story">
            <span className="detail-label mono">THE PROBLEM</span>
            <p>Raw historical prices hide the patterns that matter.</p>
            <span className="detail-label mono">THE APPROACH</span>
            <p>
              A Python pipeline to download, process, analyse and visualise
              stock-market time series. Moving averages, RSI and volume bring
              trend and momentum into focus.
            </p>
          </div>
          <Tags items={['Python', 'Matplotlib', 'mplfinance']} />
        </Reveal>
        <Reveal className="quant-visual">
          <QuantMockup />
        </Reveal>
      </article>
      <article className="dev-project">
        <Reveal>
          <DevMockup />
        </Reveal>
        <Reveal className="dev-copy">
          <span className="project-kicker mono">
            03 / PERSONAL PORTFOLIO WEBSITE
          </span>
          <h3>DevSpace</h3>
          <p className="project-subtitle">
            A foundation.
            <br />
            Built from the browser up.
          </p>
          <div className="compact-story">
            <span className="detail-label mono">THE PROBLEM</span>
            <p>Projects and skills need a clear home on every screen.</p>
            <span className="detail-label mono">THE APPROACH</span>
            <p>
              A responsive portfolio with modern CSS, dynamic content,
              interactive components and smooth navigation. The frontend
              foundation behind a broader product-building practice.
            </p>
          </div>
          <Tags items={['HTML', 'CSS', 'JavaScript']} />
        </Reveal>
      </article>
    </div>
  );
}
