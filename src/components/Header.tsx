import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mindbridge-logo.png";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center group" aria-label="MindBridge Support Services home">
          <img src={logo} alt="MindBridge Support Services" className="h-50 w-50 sm:h-20 md:h-24 transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "relative rounded-lg px-3.5 py-2 text-sm font-semibold text-primary bg-primary/8" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {/* <Button asChild variant="outline" size="sm" className="text-xs">
            <Link to="/admin">Admin</Link>
          </Button> */}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 teal-glow-hover font-semibold">
            <Link to="/contact">Get Support</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border/40 bg-background px-4 pb-4 pt-2 md:hidden animate-fade-in" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
              activeProps={{ className: "block rounded-lg px-3 py-3 text-sm font-semibold text-primary bg-primary/8" }}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 space-y-2">
            {/* <Button asChild variant="outline" className="w-full text-sm">
              <Link to="/admin" onClick={() => setMobileOpen(false)}>Admin Dashboard</Link>
            </Button> */}
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 teal-glow-hover font-semibold">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Support</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
