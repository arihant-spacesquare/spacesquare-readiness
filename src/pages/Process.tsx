import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/data/content";

const Process = () => (
  <Layout>
    <Seo
      title="How We Work — Our AI Delivery Process | Space Square"
      description="Fast, practical, no over-engineering. Space Square's four-step process: listen and diagnose, design and validate, build and integrate, measure and improve."
      path="/process"
      schema={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How Space Square delivers AI projects",
        step: processSteps.map((p, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: p.title,
          text: p.desc,
        })),
      }}
    />
    <section className="px-6 py-20 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Process</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">Fast, practical, no over-engineering.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">We move quickly and measure everything. Here's what working with us looks like.</p>
      </div>
    </section>

    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
        {processSteps.map((p) => (
          <article key={p.step} className="rounded-3xl surface border border-border p-8 card-hover">
            <div className="font-display text-5xl font-bold text-primary/30 mb-4">{p.step}</div>
            <h2 className="text-xl font-bold mb-2">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <Button asChild size="lg" className="glow h-12 px-8">
          <Link to="/contact">Start with a diagnosis <ArrowRight className="ml-2 w-5 h-5" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Process;
