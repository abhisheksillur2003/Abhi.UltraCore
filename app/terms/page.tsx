import { Navigation } from '@/components/portfolio-interactions';
import { email } from '@/data/content';
export const metadata = { title: 'Terms of Service (draft)' };
export default function Terms() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="shell legal">
        <a href="/">Back to portfolio</a>
        <h1>Terms of Service</h1>
        <p className="draft-notice">
          Draft for review. These notes describe the portfolio’s purpose and
          limitations. They are not a completed service agreement. The owner
          must confirm legal and business details before final publication of
          terms.
        </p>
        <h2>Purpose</h2>
        <p>
          ABHI.UltraCore is the portfolio of Abhishek S Illur. It presents
          project descriptions, experience, skills, a résumé, and certificates.
          The site does not take payments, sell subscriptions, or enter service
          contracts.
        </p>
        <h2>Demonstrations</h2>
        <p>
          The MeetingHub interface is a simulated scheduling demonstration. It
          does not create real meetings or send invitations. The QuantLens chart
          uses illustrative data and is not a live financial product or
          investment recommendation.
        </p>
        <h2>Project enquiries</h2>
        <p>
          Contacting the portfolio owner starts a conversation. Project scope,
          pricing, timelines, and any service terms would need to be agreed
          separately. No service availability or delivery commitment is made
          here.
        </p>
        <h2>Linked materials</h2>
        <p>
          Résumé and certificate links open documents. External services,
          including Gmail and LinkedIn, have their own terms and privacy
          practices.
        </p>
        <h2>Review still required</h2>
        <p>
          Business identity, governing jurisdiction, intellectual property
          permissions, and any appropriate liability terms need owner and legal
          review. For questions, contact <a href={'mailto:' + email}>{email}</a>
          .
        </p>
      </main>
    </>
  );
}
