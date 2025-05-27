export default function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="mb-2 font-serif text-4xl leading-tight text-[#00997e]">
      {title}
    </h1>
  );
}
