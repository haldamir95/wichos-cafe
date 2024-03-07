'use client'
import { useState } from "react";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import logoImage from '../public/Copia de favicon.ico'
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Image
                            width={50}
                            alt="NextUI hero Image"
                            src={logoImage.src}
                        />
                        <p className="font-bold text-inherit">Wichoo&apos;s Cafe</p>
                    </NextLink>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden md:flex">

                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {siteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <NextLink
                            className={clsx(
                                linkStyles({ color: "foreground" }),
                                "data-[active=true]:text-primary data-[active=true]:font-medium"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
};
