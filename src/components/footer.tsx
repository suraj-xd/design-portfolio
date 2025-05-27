import FeedbackBadge from "./feedback-badge";
import FooterStickyBanner from "./footer-sticky-banner";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <FeedbackBadge />
      <FooterStickyBanner />
    </div>
  );
}
