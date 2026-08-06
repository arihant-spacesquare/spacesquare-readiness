import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
            S²
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">Space Square</span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn("text-sm transition-colors", isActive || pathname.startsWith(l.to) ? "text-primary" : "text-muted-foreground hover:text-foreground")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Work with us</Link>
          </Button>
          <button
            className="md:hidden p-2 text-muted-foreground"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden border-t border-border/60 bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
