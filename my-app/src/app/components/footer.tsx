import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="font-bold">Notion</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[120px]">
                  English
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>한국어</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="space-y-2 text-sm text-gray-600">
              <p>We do not sell or share your personal information</p>
              <button className="hover:text-gray-900">Cookie settings</button>
              <p>© 2025 Notion Labs, Inc.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms & privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Download</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    iOS & Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Mac & Windows
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Web Clipper
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Notion for</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Small business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    Explore more <span className="ml-1">→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
