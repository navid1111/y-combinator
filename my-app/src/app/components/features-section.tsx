import { FolderClosed, MessageCircleQuestion, Network } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Find everything.
          <br />
          Instantly.
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          No more endless searching. Our built-in AI finds what you're looking
          for, whether its stored in Notion or one of your other apps.
        </p>
        <Link
          href="#"
          className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
        >
          Explore knowledge management →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="mb-4">
            <FolderClosed className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teamspaces</h3>
          <p className="text-gray-600">
            Dedicated spaces for every team & project.
          </p>
        </div>
        <div>
          <div className="mb-4">
            <Network className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Integrations</h3>
          <p className="text-gray-600">Connected to all your other tools.</p>
        </div>
        <div>
          <div className="mb-4">
            <MessageCircleQuestion className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Just ask AI</h3>
          <p className="text-gray-600">Trusted answers across your apps.</p>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden bg-[#ff9f7c] p-8">
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wnKXKz50PbgQWwUpZ6hbRMZmxzrmBw.png"
          alt="Notion workspace interface"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg"
        /> */}
      </div>

      <div className="mt-12 flex items-center gap-6 text-sm text-gray-600">
        <span>Replaces</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Confluence"
              width={20}
              height={20}
              className="opacity-50"
            />
            Confluence
          </span>
          <span className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="SharePoint"
              width={20}
              height={20}
              className="opacity-50"
            />
            SharePoint
          </span>
          <span className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Google Drive"
              width={20}
              height={20}
              className="opacity-50"
            />
            Google Drive
          </span>
        </div>
      </div>
    </section>
  );
}
