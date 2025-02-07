import { Search, Settings, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center w-full max-w-md">
        <Search className="w-4 h-4 mr-2 text-gray-500" />
        <Input type="search" placeholder="Search..." className="w-full" />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}

