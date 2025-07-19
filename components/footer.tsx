import Link from "next/link"
import { Facebook, MessageCircle, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-yellow-900/10 text-yellow-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✞</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">EOTC Sunday School</h3>
                <p className="text-sm text-gray-700">የኢ.ቀ.ተ.ቤ.ክ ሰንበት ት/ቤት</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-950">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-950">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-950">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-950">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Church Structure</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Dioceses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Subcities
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Churches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              <MessageCircle className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              <Youtube className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Ethiopian Orthodox Tewahedo Church - Sunday School Unity. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">የኢትዮጵያ ቀዳማዊ ተዋሕዶ ቤተክርስቲያን ሰንበት ት/ቤቶች አንድነት</p>
        </div>
      </div>
    </footer>
  )
}
