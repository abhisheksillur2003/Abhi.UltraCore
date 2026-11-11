import { Navigation } from '@/components/portfolio-interactions';
import { email } from '@/data/content';
export const metadata = { title: 'Privacy Policy (draft)' };
export default function Privacy() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="shell legal">
        <a href="/">Back to portfolio</a>
        <h1>Privacy Policy</h1>
        <p className="draft-notice">
          Draft for review. This describes the current portfolio implementation.
          Hosting data practices, retention periods, and applicable legal
          requirements still need confirmation by the site owner.
        </p>
        <h2>About this site</h2>
        <p>
          ABHI.UltraCore presents the software engineering work of Abhishek S
          Illur. Questions about this draft can be sent to{' '}
          <a href={'mailto:' + email}>{email}</a>.
        </p>
        <h2>Demo interactions</h2>
        <p>
          The MeetingHub demo uses temporary browser memory for your selected
          date, time, and preview state. It does not submit meeting details to a
          server, send invitations, or retain those choices after a page reload.
        </p>
        <h2>Contact and external links</h2>
        <p>
          Email links open your email application or Gmail. LinkedIn links open
          LinkedIn. Information you choose to send through those services is
          handled by the relevant service and the recipient. This site has no
          contact form or account registration.
        </p>
        <h2>Storage and hosting</h2>
        <p>
          The current portfolio code adds no analytics, advertising trackers, or
          cookies. The hosting platform may process connection data or use
          authentication cookies to provide access. The owner must confirm the
          platform’s processing, retention, and any applicable disclosures
          before treating this draft as final.
        </p>
        <h2>Review still required</h2>
        <p>
          The owner needs to confirm the responsible party’s details, hosting
          providers, relevant jurisdiction, retention periods, and the process
          for privacy requests. No unverified legal commitments are made in this
          draft.
        </p>
      </main>
    </>
  );
}
