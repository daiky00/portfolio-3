import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react";

interface MobileMenuProps {
  isActive: (path: string) => string;
}

export function MobileMenu({ isActive }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]" role="dialog" aria-label="Navigation Menu">
        <SheetTitle className="text-lg font-semibold mb-4">Navigation</SheetTitle>
        <nav className="flex flex-col gap-4">
          <Link 
            to="/" 
            className={`text-base font-medium ${isActive('/')}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`text-base font-medium ${isActive('/projects')}`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link 
            to="/crypto" 
            className={`text-base font-medium ${isActive('/crypto')}`}
            onClick={handleLinkClick}
          >
            Crypto
          </Link>
          <Link 
            to="/about" 
            className={`text-base font-medium ${isActive('/about')}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-base font-medium ${isActive('/contact')}`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/daiky00" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/francisco-pena/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}