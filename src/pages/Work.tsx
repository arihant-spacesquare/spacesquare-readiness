import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/content";

const Work = () => (
  <Layout>
    <Seo
      title="Case Studies — AI Projects & Outcomes | Space Square"
      description="Real AI and custom software projects from Space Square: nightlife events tooling, freight operations automation, and HVAC scheduling assistants."
      path="/work"
      schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: caseStudies.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://spacesquare.dev/work/${c.slug}`,
          name: c.company,
        })),
      }}
    />
    <section className="px-6 py-20 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Case studies</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">Real projects, real outcomes.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Here's how Space Square is helping businesses automate, grow, and operate smarter.
        </p>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
        {caseStudies.map((item, i) => (
          <Link key={item.slug} to={`/work/${item.slug}`} className={`group rounded-3xl surface border border-border p-8 card-hover ${i === 0 ? "md:col-span-2" : ""}`}>
            <img src={item.logo} alt={`${item.company} logo`} loading="lazy" className="w-14 h-14 rounded-2xl object-cover mb-6" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-2">{item.industry}</p>
            <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{item.company}</h2>
            <p className="text-primary text-sm font-medium mb-4">{item.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
            <ul className="space-y-2.5 pt-5 border-t border-border">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{h}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Work;
