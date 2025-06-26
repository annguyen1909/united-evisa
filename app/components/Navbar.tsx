"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Get Your eVisa", href: "/apply" },
  { label: "Pricing", href: "/pricing" },
  { label: "Info Center", href: "/blog" },
  { label: "Support", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="w-full sticky z-20 top-0 bg-white h-17 shadow-md p-0 flex justify-between items-center lg:justify-evenly max-md:justify-between">
      <Link href="/" className="w-42 md:mr-12 h-10">
        <div className="relative w-full h-full z-20 gap-2 flex items-center">
          <Image
            src="/images/logo.png"
            alt="eVisa Logo1"
            width={60}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
          <Image
            src="/images/logotext.png"
            alt="eVisa Logo2"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden whitespace-nowrap lg:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label} className="h-full">
                <NavigationMenuLink
                  href={item.href}
                  className="relative flex items-center h-full w-full cursor-pointer transition-all duration-300 bg-white
            before:absolute before:inset-0 before:bg-[#16610E] rounded-none
            before:w-0 before:h-full before:transition-all before:duration-300 before:z-0 before:pointer-events-none 
            hover:before:w-full hover:text-white overflow-hidden"
                  style={{ minHeight: "56px" }} // Ensures full nav height (adjust as needed)
                >
                  <div className="relative z-10 font-manrope text-lg xl:text-xl w-full px-4 my-auto flex items-center justify-center">
                    {item.label}
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {session?.user ? (
          <>
            <Link href="/profile" className="text-[#16610E] font-semibold px-4">
              My Profile
            </Link>
            <Button
              variant="outline"
              className="border-[#16610E] text-[#16610E]"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#16610E] hover:bg-[#16610E]/80 text-white px-6">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Button */}
      <button
        className="lg:hidden ml-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-4 border-gray-200 shadow-md lg:hidden">
          <p className="text-gray-600 font-semibold pb-2">MENU</p>
          <nav className="flex flex-col bg-gray-100 rounded-lg p-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-gray-600 p-1 font-semibold uppercase hover:text-primary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <hr className="mt-1 w-full" />
              </div>
            ))}

            {session?.user ? (
              <>
                <Link
                  href="/profile"
                  className="text-[#16610E] font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                    signOut({ callbackUrl: "/login" });
                  }}
                  className="mt-2 border-[#16610E] text-[#16610E]"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#16610E] hover:bg-[#16610E]/80 text-white mt-1 py-6 w-full">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </nav>
  );
}
