import { Link } from "@tanstack/react-router";
import logo from "@/assets/mindbridge-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-card to-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="MindBridge Support Services" className="h-20 w-auto sm:h-24" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              RN-led mental health and complex care support for NDIS participants in Adelaide, South Australia.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {["Mental Health Support", "Nursing & Clinical Care", "Daily Living Support", "Community Participation", "Complex Care"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>Adelaide, South Australia</li>
              <li>
                <a href="mailto:info@mindbridgesupport.com.au" className="transition-colors duration-200 hover:text-primary">
                  info@mindbridgesupport.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61400000000" className="transition-colors duration-200 hover:text-primary">
                  0405 793 164
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MindBridge Support Services. All rights reserved.</p>
          <p className="mt-1.5">Registered Provider · Adelaide, SA</p>
        </div>
      </div>
    </footer>
  );
}
