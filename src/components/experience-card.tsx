import Image from "next/image";

export default function ExperienceCard({
  name,
  logo,
  position,
  date,
}: {
  name: string;
  logo: string;
  position: string;
  date: string;
}) {
  return (
    <div className="flex w-full items-center justify-start gap-2 rounded-2xl border border-gray-200 px-4 py-3">
      <Image
        src={logo}
        width={40}
        height={40}
        className="rounded-full"
        alt={`${name} logo`}
      />

      <div className="w-full items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-sm opacity-50">{date}</p>
          </div>
          <p className="text-xs text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
}
