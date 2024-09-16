"use client";
import React from "react";
import Link from "next/link";
import { CircleUser, Home, ListPlus, Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { dashboardMenu } from "@/lib/constant";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          {/* nav */}
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <h1 className="text-4xl font-semibold">
                Zihad <span className="text-accent ">.</span>
              </h1>
            </Link>
            {dashboardMenu.map((menu, i) => {
              if (menu.name === "Dashboard") {
                return (
                  <Link
                    key={i}
                    href="/dashboard"
                    className={`flex items-center gap-3 rounded-lg px-3 bg-[#b1b1cf1a] py-2  transition-all hover:text-accent ${
                      pathname === menu.path
                        ? "text-accent"
                        : "text-muted-foreground"
                    } `}
                  >
                    <ListPlus />
                    {menu.name}
                  </Link>
                );
              } else if (menu.count) {
                return (
                  <Link
                    key={i}
                    href={`/dashboard${menu.path}`}
                    className={`flex items-center gap-3 rounded-lg px-3 bg-[#b1b1cf1a] py-2  transition-all hover:text-accent ${
                      pathname === "/dashboard" + menu.path
                        ? "text-accent"
                        : "text-muted-foreground"
                    } `}
                  >
                    <ListPlus />
                    {menu.name}
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {menu.count}
                    </Badge>
                  </Link>
                );
              }
            })}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[&>*]:cursor-pointer">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default MobileNav;
