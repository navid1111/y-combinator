import { Home, Calendar, FileText, Settings } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/calendar" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2">
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </Link>
        </li>
        <li>
          <Link href="/documents" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2">
            <FileText className="w-5 h-5" />
            <span>Documents</span>
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded p-2">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

