"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Zihad <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => (
            <SheetClose key={i} asChild>
              <Link
                href={link.path}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
          <Link href="/contact" className="w-full">
            <Button variant="outline" className="w-full">
              Hire me
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
