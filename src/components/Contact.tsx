import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Linkedin, Github, Phone, MapPin } from "lucide-react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moulika-manthripragada/",
      color: "hover:text-[#0077b5]",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:manthripragadamoulika@gmail.com",
      color: "hover:text-accent",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+12622815297",
      color: "hover:text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      description: "Thiensville, WI",
      href: "https://www.google.com/maps/search/Thiensville,+WI",
      color: "hover:text-red-500",
    }




    // {
    //   icon: Github,
    //   label: "GitHub",
    //   href: "#",
    //   color: "hover:text-foreground",
    // },
  ];

  return (
    <section id="contact" className="py-20  relative" ref={ref}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Social Links Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {socialLinks.map((link, index) => (
              <Card
                key={index}
                className="p-4 bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  aria-label={link.label}
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <link.icon className={`h-6 w-6 text-accent transition-colors ${link.color}`} />
                    <p className="text-sm text-muted-foreground">{link.description}</p>

                  </div>
                  <span className="text-foreground font-medium">{link.label}</span>
                </a>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-2"
          >
            <Card className="p-6 bg-background border-accent/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="bg-card border-accent/20 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-card border-accent/20 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-card border-accent/20 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="gradient"
                  className="w-full group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
