import { Link } from "react-router-dom";
import { services, caseStudies } from "@/data/content";

const SiteFooter = () => (
  <footer className="border-t border-border/60 px-6 py-14">
    <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded flex items-center justify-center font-display font-bold text-xs text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
            S²
          </span>
          <span className="font-display font-semibold">Space Square</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">
          AI consulting and custom software focused on outcomes you can measure.
        </p>
        <a href="mailto:info@spacesquare.dev" className="inline-block mt-4 text-sm text-primary hover:underline">
          info@spacesquare.dev
        </a>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">Services</h2>
        <ul className="space-y-2 text-sm">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">Work</h2>
        <ul className="space-y-2 text-sm">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link to={`/work/${c.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{c.company}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border/60 text-sm text-muted-foreground">
      © {new Date().getFullYear()} Space Square. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;
