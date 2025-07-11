import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronRight } from "lucide-react"
import { StructureTree } from "./structure-tree"

interface Breadcrumb {
  name: string
  href: string
}

interface HeaderProps {
  breadcrumb?: Breadcrumb[]
}

export function Header({ breadcrumb }: HeaderProps) {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container ml-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 ">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-900/15 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">መለያ</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">EOTC Sunday School Unity</h1>
                <p className="text-sm text-gray-600">የኢ.ኦ.ተ.ቤ.ክ ሰንበት ት/ቤቶች አንድነት</p>
              </div>
            </Link>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-yellow-600">
                    ዋና ገጽ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>መዋቅር</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4 max-h-96 overflow-y-auto">
                    <StructureTree />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-yellow-600">
                    ዝግጅት
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-yellow-600">
                    ምስል
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-yellow-600">
                    ያግኙ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {breadcrumb && breadcrumb.length > 1 && (
          <div className="flex items-center space-x-2 py-2 text-sm text-gray-600">
            {breadcrumb.map((item, index) => (
              <div key={item.href} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                <Link
                  href={item.href}
                  className={`hover:text-yellow-600 ${
                    index === breadcrumb.length - 1 ? "text-gray-900 font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
