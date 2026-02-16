import { ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-foreground md:text-4xl">
          Let's build something together
        </h2>
        <p className="mt-4 text-muted-foreground">
          Open to full-time roles and freelance collaborations in product design.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full max-w-sm rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <a
            href="mailto:sanmanbayani.work@gmail.com"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <span className="text-sm text-muted-foreground">
          © 2026 Sanman Bayani. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="https://bit.ly/sanmanbehance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Behance
          </a>
          <a
            href="mailto:sanmanbayani.work@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
