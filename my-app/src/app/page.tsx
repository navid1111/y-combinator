import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FeaturesGrid } from './components/feature-grid';
import { FeaturesSection } from './components/features-section';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="font-bold">Notion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Overview</DropdownMenuItem>
                <DropdownMenuItem>Features</DropdownMenuItem>
                <DropdownMenuItem>Solutions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm">
                Teams <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Enterprise</DropdownMenuItem>
                <DropdownMenuItem>Small business</DropdownMenuItem>
                <DropdownMenuItem>Startups</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#" className="text-sm">
              Individuals
            </Link>
            <Link href="#" className="text-sm">
              Download
            </Link>
            <Link href="#" className="text-sm">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hidden md:inline-block text-sm">
            Request a demo
          </Link>
          <Link href="#" className="hidden md:inline-block text-sm">
            Log in
          </Link>
          <Button className="bg-black text-white hover:bg-gray-800">
            Get Notion free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              The happier workspace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Write. Plan. Collaborate. With a little help from AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Get Notion free
              </Button>
              <Button size="lg" variant="outline">
                Request a demo
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Trusted by teams at</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-8 w-[2px] bg-gray-200" />
                <div className="h-8 w-[2px] bg-gray-200" />
                <div className="h-8 w-[2px] bg-gray-200" />
                <div className="h-8 w-[2px] bg-gray-200" />
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HX1akKhVsUXXDBfMKqU7lHwQMx9ODT.png"
              alt="Notion workspace illustration"
              width={600}
              height={600}
              className="w-full"
              priority
            /> */}
          </div>
        </div>
      </div>
      <FeaturesSection />
      <FeaturesGrid />
      <Footer />
    </div>
  );
}
