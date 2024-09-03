import React from "react";
import Link from "next/link";
import { Bell, Home, ListPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SideNav = () => {
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
          <nav className="grid items-start px-2 text-sm font-medium xl:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/works"
              className="flex items-center gap-3 rounded-lg px-3 bg-[#b1b1cf1a] py-2 text-muted-foreground transition-all hover:text-accent"
            >
              <ListPlus />
              Works
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
