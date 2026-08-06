import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@spacesquare.dev?subject=${encodeURIComponent(
      `Inquiry from ${formData.name}${formData.company ? ` at ${formData.company}` : ""}`,
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    toast({ title: "Opening email client", description: "We'll get back to you within 24 hours." });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 p-8 rounded-3xl surface border border-border">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 bg-background" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
          <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="h-12 bg-background" placeholder="Your company" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">What do you want to improve?</label>
        <Textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background resize-none" placeholder="Tell us about your challenges or goals..." />
      </div>
      <Button type="submit" size="lg" className="w-full glow h-12 text-base">
        <Mail className="mr-2 w-5 h-5" /> Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
