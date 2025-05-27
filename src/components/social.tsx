import Link from "next/link";
import { socialLinks } from "~/constants";

export default function Social() {
  return (
    <div className="mb-16 flex flex-wrap items-center gap-6">
      {socialLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </div>
  );
}
