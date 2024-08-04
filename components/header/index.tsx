"use client";

import React from "react";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem} from "@nextui-org/react";
import Logo from "@/components/logo";
import { LanuageDropDownMenu } from "@/components/language";
import { ModeToggle } from "@/components/mode-toggle";

export default function App() {
  const menuItems = [
    "Üniversitemiz",
    "Akademik",
    "İdari Birimler",
    "Araştırma",
    "International",
    "Aday Öğrenci",
  ];

  return (
    <Navbar disableAnimation isBordered className="py-3" maxWidth="full">
      <NavbarContent justify="start">
        <Logo LogoClass="h-auto w-24 md:w-32 dark:invert" />
      </NavbarContent>
        
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/page/universitemiz" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
              Üniversitemiz
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/page/akademik" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
              Akademik
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/page/idari-birimler" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
              İdari Birimler
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/page/arastirma" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
              Araştırma
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/page/International" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
              International
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/page/aday-ogrenci" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
            Aday Öğrenci
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="gap-4" justify="end">
        <LanuageDropDownMenu />
        <ModeToggle />
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>

      <NavbarMenu className="md:hidden pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
