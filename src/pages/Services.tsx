import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";

const Services = () => (
  <Layout>
    <Seo
      title="AI Services — Strategy, Agents & Custom Apps | Space Square"
      description="AI strategy and roadmapping, intelligent workflows and AI agents, and custom AI tools and apps — built for measurable business outcomes."
      path="/services"
      schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://spacesquare.dev/services/${s.slug}`,
          name: s.title,
        })),
      }}
    />
    <section className="px-6 py-20 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Services</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">AI work that pays for itself.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Three ways we help: figure out what's worth building, automate the work in between, and build the tool when nothing off the shelf fits.
        </p>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <article key={s.slug} className={`rounded-3xl surface border border-border p-8 card-hover ${i === 0 ? "md:col-span-2" : ""}`}>
            <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s.body}</p>
            <ul className="space-y-2.5 mb-6">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{o}</span>
                </li>
              ))}
            </ul>
            <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <Button asChild size="lg" className="glow h-12 px-8">
          <Link to="/contact">Talk through your use case</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
