import Link from "next/link";

export default function NavigationItem({
  name,
  href,
  external,
}: {
  name: string;
  href: string;
  external: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className="text-gray-600 transition-colors hover:text-[#00997e] hover:underline"
    >
      {name}
    </Link>
  );
}
