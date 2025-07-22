import Link from "next/link"
import { Facebook, MessageCircle, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/10 text-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">✞</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">EOTC Sunday School</h3>
                <p className="text-sm text-muted-foreground">የኢ.ቀ.ተ.ቤ.ክ ሰንበት ት/ቤት</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">Church Structure</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Dioceses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Subcities
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Churches
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <MessageCircle className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Ethiopian Orthodox Tewahedo Church - Sunday School Unity. All rights reserved.</p>
          <p className="text-sm mt-2">የኢትዮጵያ ቀዳማዊ ተዋሕዶ ቤተክርስቲያን ሰንበት ት/ቤቶች አንድነት</p>
        </div>
      </div>
    </footer>
  )
}
