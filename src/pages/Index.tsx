import { useState } from "react";
import { ArrowRight, Zap, Cpu, Target, Rocket, CheckCircle2, Mail, Building2, MessageSquare, Headphones, TrendingUp, Clock, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import blazLogo from "@/assets/blaz-logo.png";
import transphereLogo from "@/assets/transphere-logo.png";
import hvacLogo from "@/assets/hvac-logo.png";

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
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI Consulting + Custom Software</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            AI that actually moves{" "}
            <span className="text-gradient">the numbers.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We build AI solutions focused on real outcomes and ROI. No hype, no fluff — just tools that work and results you can measure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow px-8 h-12 text-base">
              Work with us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection("services")} variant="outline" size="lg" className="border-border hover:bg-secondary h-12 text-base">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "AI Strategy & Roadmapping", desc: "Identify high-impact AI opportunities and build a practical path to implementation." },
              { icon: Cog, title: "Process Automation & Agents", desc: "Automate repetitive workflows with intelligent agents that handle tasks 24/7." },
              { icon: Cpu, title: "Custom AI Tools & Apps", desc: "Build internal tools and applications tailored to your specific business needs." },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gradient-to-b from-card to-background border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Actual Customer Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real projects, real outcomes.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here's how Space Square is helping businesses automate, grow, and operate smarter.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                logo: blazLogo, 
                company: "Bläz Entertainment",
                link: "https://www.blaz.us/",
                tagline: "AI Tools + Mobile App (iOS & Android)",
                desc: "Built multiple AI-powered tools and a full-service mobile app to enhance event discovery, automate workflows, and boost attendee engagement for Detroit's premier nightlife brand.",
                highlights: [
  "AI-powered content automation + real-time event insights",
  "Intelligent reservation and guest-experience flows",
  "Cross-platform mobile app (iOS & Android) driving engagement"
]
              },
              { 
                logo: transphereLogo, 
                company: "Transphere Inc.",
                link: "https://www.transphereinc.com/",
                tagline: "Freight Forwarding Operations Automation",
                desc: "Developed a custom AI-powered web app to manage shipment lifecycle updates, automate customer notifications, and streamline day-to-day freight operations.",
                highlights: ["Faster shipment tracking visibility", "Instant customer notifications", "Smoother back-office workflow with fewer manual tasks"]
              },
              { 
                logo: hvacLogo, 
                company: "Father & Son HVAC",
                link: "https://share.google/l7j74yKRN8frkQw5r",
                tagline: "AI Scheduling Assistant + Workflow Automation",
                desc: "Created an AI-powered assistant to simplify appointment scheduling, reminders, and technician operations for a local HVAC business.",
                highlights: ["Easy calendar + appointment management", "Real-time schedule updates & messaging", "Streamlined technician coordination"]
              },
            ].map((item, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6">
                  <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-cover" />
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <h3 className="text-2xl font-bold mb-1">{item.company}</h3>
                </a>
                <p className="text-primary font-medium text-sm mb-4">{item.tagline}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Highlights</p>
                  {item.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s create something that delivers 10× value.</h2>
            <p className="text-muted-foreground text-lg">
              Drop us a line at{" "}
              <a href="mailto:info@spacesquare.dev" className="text-primary hover:underline font-medium">
                info@spacesquare.dev
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 p-8 rounded-3xl bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary h-12"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background border-border focus:border-primary h-12"
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
                className="bg-background border-border focus:border-primary resize-none"
                placeholder="Tell us about your challenges or goals..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow h-12 text-base">
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
            <span className="text-sm text-muted-foreground">© 2025 Space Square. All rights reserved.</span>
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
