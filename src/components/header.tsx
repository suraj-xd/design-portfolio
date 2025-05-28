import { ArrowLeftIcon } from "./phosphorous-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigationItem from "./comman/navigation-item";
import { homeUrl, navigationRoutes } from "~/constants/navigation-routes";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="mt-3 flex w-full items-center justify-between px-8 py-6 sm:mt-10">
      <div className="flex items-center">
        {pathname === homeUrl ? (
          <Image
            src="/gradient.png"
            alt="logo"
            className="size-5 overflow-hidden rounded-full object-cover"
            width={100}
            height={100}
          />
        ) : (
          <Link
            href={homeUrl}
            className="flex items-center justify-start gap-1 text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeftIcon />
            home
          </Link>
        )}
      </div>
      <nav className="flex items-center space-x-8">
        {navigationRoutes.map((route) => (
          <NavigationItem key={route.name} {...route} />
        ))}
      </nav>
    </header>
  );
}
