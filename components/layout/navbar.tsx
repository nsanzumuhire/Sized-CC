"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useQuoteModal } from "@/components/providers/quote-modal-provider";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-black dark:text-white group-hover:text-primary transition-colors">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl border-black/5 dark:border-white/5 h-16"
          : "bg-transparent border-transparent h-20"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold font-heading tracking-tighter text-black dark:text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            SIZED<span className="text-primary">.CC</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center justify-center flex-1 px-8"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 data-[state=open]:bg-black/5 dark:data-[state=open]:bg-white/5">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[650px] lg:grid-cols-[.75fr_1fr] bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border border-black/10 dark:border-white/10">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/10 dark:to-neutral-950 p-6 no-underline outline-none focus:shadow-md border border-primary/20 dark:border-primary/10"
                          href="#services"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-black dark:text-white">
                            Custom Fabrication
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Precision metal cutting for signage, furniture, branding, and décor — built to exact size.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#services" title="Signage">
                      2D & 3D signage, embossed & reflective signs, indoor & outdoor installations.
                    </ListItem>
                    <ListItem href="#services" title="Branding">
                      Clothes branding, commercial vehicle wrapping, wall branding & installations.
                    </ListItem>
                    <ListItem href="#services" title="Furniture & Interior">
                      Custom furniture & tables, interior design for homes, offices, restaurants.
                    </ListItem>
                    <li className="col-span-1 lg:col-span-2">
                      <ul className="grid grid-cols-3 gap-2">
                        <NavigationMenuLink asChild>
                          <a
                            href="#services"
                            className="block select-none rounded-md p-2 text-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-xs font-medium text-black dark:text-white hover:text-primary transition-colors">Home Décor</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            href="#services"
                            className="block select-none rounded-md p-2 text-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-xs font-medium text-black dark:text-white hover:text-primary transition-colors">Gifts</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            href="#services"
                            className="block select-none rounded-md p-2 text-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-xs font-medium text-black dark:text-white hover:text-primary transition-colors">Print</div>
                          </a>
                        </NavigationMenuLink>
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 data-[state=open]:bg-black/5 dark:data-[state=open]:bg-white/5">
                  Process
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.65fr_1fr] bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border border-black/10 dark:border-white/10">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/10 dark:to-neutral-950 p-6 no-underline outline-none focus:shadow-md border border-primary/20 dark:border-primary/10"
                          href="#our-process"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-black dark:text-white">
                            Our Process
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            From concept to delivery — precision-crafted results, built to last.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#our-process" title="01. Tell Us Your Idea">
                      Share your concept, design, size, and material requirements.
                    </ListItem>
                    <ListItem href="#our-process" title="02. Design & Mockups">
                      We create detailed mockups for your review and revisions.
                    </ListItem>
                    <ListItem href="#our-process" title="03. Confirm & Produce">
                      Price agreed, payment processed, precision fabrication begins.
                    </ListItem>
                    <ListItem href="#our-process" title="04. Delivery & Install">
                      Express or scheduled delivery with installation if required.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#portfolio"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                    )}
                  >
                    Portfolio
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#faq"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                    )}
                  >
                    FAQ
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#contact"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                    )}
                  >
                    Contact
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-3"
        >
          <ThemeToggle />
          <Button
            variant="ghost"
            className="text-black dark:text-white hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-sm font-medium"
          >
            Log in
          </Button>
          <Button 
            onClick={openModal}
            className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white hover:opacity-90 rounded-full text-sm font-semibold px-6 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            Get Quote
          </Button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-black dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-white dark:bg-black z-40 overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-4">
              {[
                { href: "#services", label: "Services" },
                { href: "#our-process", label: "Process" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 border-b border-black/10 dark:border-white/5 hover:border-primary/30"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Button 
                  onClick={() => { setIsOpen(false); openModal(); }}
                  className="w-full bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white rounded-full py-6 text-lg font-bold mt-4 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
                >
                  Request Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
