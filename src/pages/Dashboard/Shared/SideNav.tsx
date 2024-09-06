"use client";
import React from "react";
import Link from "next/link";
import { Bell, Home, ListPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

const dashboardMenu = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Work",
    path: "/works",
    count: 6,
  },
];

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden border-r lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 xl:h-[60px] xl:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <h1 className="text-4xl font-semibold">
              Zihad <span className="text-accent ">.</span>
            </h1>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium xl:px-4 gap-4 mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default SideNav;
