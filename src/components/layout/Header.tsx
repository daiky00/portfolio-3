import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import { Link, useLocation } from "react-router-dom"
import { Logo } from "@/components/logo/Logo"

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/projects') {
      return location.pathname.startsWith(path) ? "text-foreground" : "text-muted-foreground hover:text-foreground";
    }
    return location.pathname === path ? "text-foreground" : "text-muted-foreground hover:text-foreground";
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center justify-between">
        <div className="md:hidden">
          <MobileMenu isActive={isActive} />
        </div>
        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
          <Logo className="hover:scale-105 transition-transform" size={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/projects" className={`text-sm font-medium ${isActive('/projects')}`}>
            Projects
          </Link>
          <Link to="/crypto" className={`text-sm font-medium ${isActive('/crypto')}`}>
            Crypto
          </Link>
          <Link to="/about" className={`text-sm font-medium ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`text-sm font-medium ${isActive('/contact')}`}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <ModeToggle />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/daiky00" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/francisco-pena/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}