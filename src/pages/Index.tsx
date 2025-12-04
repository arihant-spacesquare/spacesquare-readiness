import { useState } from "react";
import { ArrowRight, Zap, Cpu, Target, Rocket, CheckCircle2, Mail, Building2, MessageSquare, Headphones, TrendingUp, Clock, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success and open mailto
    const mailtoLink = `mailto:info@spacesquare.dev?subject=Inquiry from ${formData.name} at ${formData.company}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening email client",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S²</span>
            </div>
            <span className="font-semibold text-lg">Space Square</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</button>
            <button onClick={() => scrollToSection("process")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Process</button>
            <button onClick={() => scrollToSection("cases")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Use Cases</button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</button>
          </div>
          <Button onClick={() => scrollToSection("contact")} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Work with us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI Consulting + Custom Software</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            AI that actually moves{" "}
            <span className="text-gradient">the numbers.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We build AI solutions focused on real outcomes and ROI. No hype, no fluff — just tools that work and results you can measure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow px-8">
              Work with us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection("services")} variant="outline" size="lg" className="border-border hover:bg-secondary">
              What we do
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Outcome-focused services built to drive revenue, cut costs, and save time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "AI Strategy & Roadmapping", desc: "Identify high-impact AI opportunities and build a practical path to implementation." },
              { icon: Cog, title: "Process Automation & Agents", desc: "Automate repetitive workflows with intelligent agents that handle tasks 24/7." },
              { icon: Cpu, title: "Custom AI Tools & Apps", desc: "Build internal tools and applications tailored to your specific business needs." },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fast, practical, no over-engineering. We move quickly and measure everything.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Listen & Diagnose", desc: "Understand your bottlenecks and identify ROI opportunities." },
              { step: "02", title: "Design & Validate", desc: "Prototype quickly with clear success metrics defined upfront." },
              { step: "03", title: "Build & Integrate", desc: "Deliver AI tools that actually fit your existing workflows." },
              { step: "04", title: "Measure & Improve", desc: "Track results continuously and scale what works." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="cases" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sample Use Cases</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real projects, real results. Here's how we've helped businesses like yours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Headphones, 
                industry: "Nightlife Event Curation Company", 
                desc: "Built AI tools for event insights, content automation, and engagement data to drive turnout and repeat attendance.",
                results: ["Automated content creation", "Real-time engagement analytics", "Improved event targeting"]
              },
              { 
                icon: TrendingUp, 
                industry: "Freight Forwarding Company", 
                desc: "Automated document handling, shipment tracking logic, and data extraction workflows to reduce manual steps.",
                results: ["80% faster document processing", "Reduced turnaround time", "Lower operational overhead"]
              },
              { 
                icon: Clock, 
                industry: "HVAC Services Company", 
                desc: "Created a scheduling + ops assistant to streamline customer bookings, reminders, and technician routing.",
                results: ["Automated scheduling", "Optimized routing", "Better customer communication"]
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.industry}</h3>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <div className="space-y-2">
                  {item.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Space Square */}
      <section className="py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Space Square</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not another AI consultancy. We build things that pay for themselves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "ROI-first", desc: "We tie every build to real business outcomes. If it doesn't move the needle, we don't build it." },
              { title: "We ship, not theorize", desc: "Fast prototypes that turn into real tools. No 100-page strategy decks gathering dust." },
              { title: "Tech + business fluency", desc: "We translate pain points into workable solutions. No lost-in-translation moments." },
              { title: "Flexible & stack-agnostic", desc: "We integrate with the systems you already use. No rip-and-replace required." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something that pays for itself.</h2>
            <p className="text-muted-foreground text-lg">
              Drop us a line at{" "}
              <a href="mailto:info@spacesquare.dev" className="text-primary hover:underline">
                info@spacesquare.dev
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  placeholder="Your company"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What do you want to improve?</label>
              <Textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-primary resize-none"
                placeholder="Tell us about your challenges or goals..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow">
              <Mail className="mr-2 w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">S²</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2024 Space Square. All rights reserved.</span>
          </div>
          <a href="mailto:info@spacesquare.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            info@spacesquare.dev
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;