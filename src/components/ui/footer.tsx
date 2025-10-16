import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks?: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-12 sm:pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Brand and Social Links Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
          {/* Logo and Brand */}
          <Link
            href="#home"
            className="flex items-center gap-x-2 flex-shrink-0"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-lg sm:text-xl truncate">{brandName}</span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {socialLinks.map((item, i) => (
              <Button
                key={i}
                aria-label={`${item.label} Social Link`}
                variant="secondary"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center"
                asChild
              >
                <a
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50"></div>

        {/* Bottom Links & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2 w-full">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6">
            {mainLinks.map((link, i) => (
              <Button key={i} variant={"link"} className="flex-shrink-0">
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-white underline-offset-4 hover:underline transition-all whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Copyright Section */}
          <div className="text-white/80 text-xs sm:text-sm text-center sm:text-left leading-6 space-y-1">
            <div>{copyright.text}</div>
            {copyright.license && (
              <div className="text-gray-400">{copyright.license}</div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
