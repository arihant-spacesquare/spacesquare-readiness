import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Cog, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies, services, processSteps } from "@/data/content";

const icons = [Target, Cog, Cpu];

const Index = () => (
  <Layout>
    <Seo
      title="Space Square | AI Consulting & Custom Software"
      description="AI that actually moves the numbers. Space Square delivers AI strategy, intelligent workflows, and custom software with measurable ROI."
      path="/"
    />

    {/* Hero */}
    <section className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full blur-3xl pointer-events-none" style={{ background: "var(--gradient-deep)" }} aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium tracking-wide uppercase">AI Consulting + Custom Software</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
            AI that actually moves <span className="text-gradient">the numbers.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            We build AI solutions focused on real outcomes and ROI. No hype, no fluff — just tools that work and results you can measure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="glow h-12 px-8 text-base">
              <Link to="/contact">Work with us <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 text-base">
              <Link to="/work">See our work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Bento: services + stats */}
    <section className="px-6 pb-24" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold">What we do</h2>
          <Link to="/services" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-6 auto-rows-[minmax(0,auto)]">
          {services.map((s, i) => {
            const Icon = icons[i];
            const span = i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3";
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`${span} group rounded-3xl surface border border-border p-8 card-hover`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}

          <div className="md:col-span-3 rounded-3xl border border-primary/25 p-8 flex flex-col justify-between" style={{ backgroundImage: "var(--gradient-deep)" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">How we work</p>
              <ul className="space-y-3">
                {processSteps.map((p) => (
                  <li key={p.step} className="flex items-start gap-3 text-sm">
                    <span className="font-display text-primary/70 font-bold">{p.step}</span>
                    <span className="text-foreground/85">{p.title} — <span className="text-muted-foreground">{p.desc}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/process" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Work */}
    <section className="px-6 py-24 border-t border-border/60" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">Actual customer use cases</span>
            <h2 id="work-heading" className="text-3xl md:text-4xl font-bold">Real projects, real outcomes.</h2>
          </div>
          <Link to="/work" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link key={item.slug} to={`/work/${item.slug}`} className="group rounded-3xl surface border border-border p-8 card-hover flex flex-col">
              <img src={item.logo} alt={`${item.company} logo`} loading="lazy" className="w-14 h-14 rounded-2xl object-cover mb-6" />
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.company}</h3>
              <p className="text-primary text-sm font-medium mb-4">{item.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
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
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-24 border-t border-border/60">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's create something that delivers 10× value.</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Tell us what's slow, manual, or expensive. We'll tell you whether AI actually fixes it.
        </p>
        <Button asChild size="lg" className="glow h-12 px-8 text-base">
          <Link to="/contact">Start a conversation <ArrowRight className="ml-2 w-5 h-5" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
