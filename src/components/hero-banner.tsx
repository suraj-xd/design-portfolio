
import HeroSubtitle from "./elements.tsx/hero-subtitle";
import HeroTitle from "./elements.tsx/hero-title";
import OpenToWork from "./elements.tsx/open-to-work";

export default function HeroBanner({
  title,
  subtitle,
  openToWork,
}: {
  title: string;
  subtitle: string;
  openToWork: boolean;
}) {
  return (
    <div className="mb-8">
      <HeroTitle title={title} />
      <div className="flex items-center justify-start gap-2">
        <HeroSubtitle subtitle={subtitle} />
        <OpenToWork openToWork={openToWork} />
      </div>
    </div>
  );
}
