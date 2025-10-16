"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    // { name: "Posts", href: "#posts" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-lg backdrop-saturate-150 bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <nav className="px-6 py-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-lg font-medium text-white dark:text-gray-300 bg-transparent hover:bg-white/10 transition-all duration-200 rounded-full px-4 py-2 focus:bg-transparent active:bg-transparent focus:outline-none"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="backdrop-blur-lg backdrop-saturate-150 bg-white/10 dark:bg-black/20 border border-white/20 rounded-full p-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed top-20 right-4 backdrop-blur-lg backdrop-saturate-150 bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-in slide-in-from-top-5 duration-200">
              <nav className="p-4">
                <ul className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block text-lg font-medium text-white dark:text-gray-300 hover:bg-white/10 transition-all duration-200 rounded-xl px-6 py-3"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
}