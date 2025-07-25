"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X, Church, Globe } from "lucide-react"
import { StructureTree } from "./structure-tree"
import { useState } from "react"

interface Breadcrumb {
  name: string
  href: string
}

interface HeaderProps {
  breadcrumb?: Breadcrumb[]
}

export function Header({ breadcrumb }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-foreground rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Church className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-destructive-foreground text-xs font-bold">✠</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                EOTC Sunday School Unity
              </h1>
              <p className="text-sm text-muted-foreground font-ethiopic">የኢ.ኦ.ተ.ቤ.ክ ሰንበት ት/ቤቶች አንድነት</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium font-ethiopic transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      ዋና ገጽ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-ethiopic bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    መዋቅር
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] m-auto p-6 bg-card shadow-xl rounded-lg border">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-foreground font-ethiopic">የቤተክርስቲያን መዋቅር</h3>
                        <p className="text-sm text-muted-foreground mt-1">Church organizational structure</p>
                      </div>
                      <div className="max-h-96 overflow-y-auto w-[600px]">
                        <StructureTree />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/events" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium font-ethiopic transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      ዝግጅቶች
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium font-ethiopic transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      ምስሎች
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact"  legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium font-ethiopic transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      ያግኙን
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-border">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <Globe className="w-4 h-4 mr-2" />
                Join Us
              </Button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium font-ethiopic text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ዋና ገጽ
              </Link>
              <Link
                href="/structure"
                className="block px-3 py-2 text-base font-medium font-ethiopic text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                መዋቅር
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-base font-medium font-ethiopic text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ዝግጅቶች
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-base font-medium font-ethiopic text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ምስሎች
              </Link>
              <Link
                href="/ContactSection"
                className="block px-3 py-2 text-base font-medium font-ethiopic text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ያግኙን
              </Link>
              <div className="pt-4 mt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-lg shadow-md">
                  <Globe className="w-4 h-4 mr-2" />
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 1 && (
          <div className="flex items-center space-x-2 py-3 text-sm border-t border-border bg-muted/50">
            <div className="flex items-center space-x-2 text-muted-foreground">
              {breadcrumb.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />}
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition-colors font-ethiopic ${
                      index === breadcrumb.length - 1
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
