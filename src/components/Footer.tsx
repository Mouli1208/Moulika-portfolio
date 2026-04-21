import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/moulika-manthripragada/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:manthripragadamoulika@gmail.com", label: "Email" },
    // { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-accent/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
              >
                <link.icon className="h-5 w-5 text-accent" />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()}{" "}
            <motion.span
              className="text-accent font-bold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Moulika Manthripragada
            </motion.span>
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg animate-pulse-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
