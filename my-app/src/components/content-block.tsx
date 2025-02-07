"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import type React from "react" // Added import for React

interface ContentBlockProps {
  title: string
  children: React.ReactNode
}

export function ContentBlock({ title, children }: ContentBlockProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border rounded-lg mb-4">
      <button className="flex items-center justify-between w-full p-4 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  )
}

