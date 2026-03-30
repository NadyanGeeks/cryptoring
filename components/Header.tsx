"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/favicon.ico"
              alt="Cryptoring Logo"
              width={40}
              height={40}
            />
            <p className="text-2xl text-white font-medium">Cryptoring</p>
          </div>
        </Link>

        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathname === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>

          <p>Search Modal</p>

          <Link
            href="/coins"
            className={cn("nav-link", {
              "is-active": pathname === "/coins",
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
