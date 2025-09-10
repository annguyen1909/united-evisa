"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  User,
  LogOut,
  Settings,
  FileText,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Anton } from "next/font/google";

const navItems = [
  {
    label: "Get Your eVisa",
    href: "/apply",
  },
  {
    label: "Check Requirements",
    href: "/check-requirements",
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Info Center",
    href: "/blog",
  },
  {
    label: "Support",
    href: "/support",
  },
  { label: "FAQ", 
    href: "/faq" }
];

const poppins = Poppins({
  weight: ["800", "500"],
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full sticky z-40 top-0 transition-all duration-300 min-h-[70px] border-b border-transparent", 
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-emerald-100/30 py-3" 
          : "bg-gradient-to-r from-white/98 via-emerald-50/30 to-white/98 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300 hover:scale-105">
          <div className="relative w-10 h-10 transition-all duration-300 group-hover:rotate-12">
            <Image
              src="/images/logo.png"
              alt="eVisa Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className={`text-2xl leading-tight text-emerald-800 tracking-wide uppercase transition-colors duration-300 group-hover:text-emerald-900 ${anton.className}`}>Worldmaxxing</span>
            <span className={`text-sm text-slate-600 tracking-widest uppercase transition-colors duration-300 group-hover:text-emerald-600 ${anton.className}`}>Global Services</span>
          </div>
          <div className="flex items-center h-10 ml-3 pl-3 border-l border-slate-300 transition-colors duration-300 group-hover:border-emerald-300">
            <div className="flex flex-col items-start justify-center">
              <span className="text-lg font-extrabold text-emerald-700 leading-tight transition-colors duration-300 group-hover:text-emerald-800">eVisa</span>
              <span className="text-lg font-bold text-slate-700 leading-tight transition-colors duration-300 group-hover:text-emerald-600">Center</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6">
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.href === "/apply" ? (
                    <NavigationMenuLink
                      href={item.href}
                      className="relative group inline-flex h-11 w-max items-center ml-2 justify-center rounded-md px-5 py-2.5 text-white font-semibold bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="animate-bounce">🚀</span>
                        {item.label}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 animate-pulse"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-slate-700 relative overflow-hidden",
                        "font-medium transition-all duration-300 hover:bg-emerald-50/80 hover:text-emerald-800 hover:shadow-md",
                        "focus:bg-emerald-100/60 focus:text-emerald-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/10 before:to-emerald-600/10 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0"
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth */}
          <div className="hidden xl:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-full"
              asChild
            >
            </Button>

            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full border-emerald-200/60 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10"
                  >
                    <div className="flex items-center gap-2">
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="bg-emerald-100 text-emerald-700 rounded-full p-1">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-slate-700">
                        {session.user.name?.split(' ')[0] || 'Account'}
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-500" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-1">
                  <div className="flex items-center justify-start gap-2 p-2 pb-4">
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="bg-emerald-100 text-emerald-700 rounded-full p-2">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{session.user.name}</span>
                      <span className="text-xs text-slate-500 truncate">{session.user.email}</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>My Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/list" className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>My Applications</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/help" className="cursor-pointer">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help & Support</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="text-red-600 focus:text-red-600 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Mobile Button */}
        <div className="xl:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-full"
            asChild
          >
          </Button>

          {session?.user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-100"
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5 text-slate-700" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-1">
                <div className="flex items-center justify-start gap-2 p-2 pb-4">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-emerald-100 text-emerald-700 rounded-full p-2">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{session.user.name}</span>
                    <span className="text-xs text-slate-500 truncate">{session.user.email}</span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/applications" className="cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>My Applications</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <button
            className="text-slate-700 p-2 rounded-md hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="lg:hidden fixed left-0 right-0 top-0 bottom-0 z-[9999] bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div
              className="absolute top-0 right-0 w-full max-w-sm h-[calc(100vh)] bg-white shadow-xl z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <p className="font-medium text-lg text-slate-800">Menu</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto h-[calc(100%-60px)]">
                <div className="p-4">
                  {/* Mobile Auth Buttons */}
                  {!session?.user && (
                    <div className="flex flex-col gap-2 mb-6">
                      <Link href="/signup" className="w-full" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          Sign up
                        </Button>
                      </Link>
                      <Link href="/login" className="w-full" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full border-slate-200">
                          Log in
                        </Button>
                      </Link>
                    </div>
                  )}

                  {/* Mobile Nav Items */}
                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <div key={item.label} className="space-y-2">
                        <Link href={item.href}
                          className={`flex justify-between items-center px-2 py-1.5 text-base font-medium rounded-lg transition-all ${
                            item.href === "/apply" 
                              ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg" 
                              : "text-slate-800"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            {item.href === "/apply" && <span>🚀</span>}
                            {item.label}
                          </span>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Additional Links */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="space-y-4">
                      <Link
                        href="/support"
                        className="flex items-center gap-2 text-sm text-slate-600 px-2 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>Help & Support</span>
                      </Link>

                      <Link
                        href="/list"
                        className="flex items-center gap-2 text-sm text-slate-600 px-2 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Track Application</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </nav >
  );
}