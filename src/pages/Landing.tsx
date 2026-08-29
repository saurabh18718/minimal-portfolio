import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "Engineering",
    avatar: "AC",
  },
  {
    name: "Jordan Lee",
    role: "Design",
    avatar: "JL",
  },
  {
    name: "Sam Patel",
    role: "Product",
    avatar: "SP",
  },
  {
    name: "Morgan Blake",
    role: "Operations",
    avatar: "MB",
  },
];

const projects = [
  {
    title: "Platform v2",
    description: "Complete rebuild of the core platform infrastructure.",
    tags: ["Engineering", "Infrastructure"],
  },
  {
    title: "Design System",
    description: "Unified component library across all product surfaces.",
    tags: ["Design", "Frontend"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time metrics and reporting for the team.",
    tags: ["Product", "Data"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
      >
        <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">Studio</span>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#team" className="hover:text-foreground transition-colors">Team</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6">
        <div className="mx-auto max-w-4xl w-full pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">
              Team Portfolio
            </p>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            We build things
            <br />
            <span className="text-muted-foreground">that matter.</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-8 max-w-md"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              A small team focused on craft, clarity, and shipping
              products we&apos;re proud of.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-12"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-2.5 hover:bg-secondary transition-colors"
            >
              See our work
              <ArrowUpRight className="size-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-sm text-muted-foreground mb-4 tracking-wide uppercase"
          >
            About
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug"
            >
              Small team,
              <br />
              deliberate work.
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base leading-relaxed space-y-4"
            >
              <p>
                We&apos;re a close-knit team of four. Every decision is intentional.
                We don&apos;t chase trends — we focus on solving real problems with
                clean, maintainable work.
              </p>
              <p>
                This portfolio is a snapshot of where we are today. It will evolve
                as we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-border/60" />
      </div>

      {/* Team */}
      <section id="team" className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-sm text-muted-foreground mb-4 tracking-wide uppercase"
          >
            Team
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-16"
          >
            The people.
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i + 2}
                className="flex items-center gap-5"
              >
                <div className="size-12 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground shrink-0">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-border/60" />
      </div>

      {/* Work */}
      <section id="work" className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-sm text-muted-foreground mb-4 tracking-wide uppercase"
          >
            Work
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-16"
          >
            Selected projects.
          </motion.h2>
          <div className="space-y-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i + 2}
                className="group py-8 border-t border-border/60 last:border-b cursor-default"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-border/60" />
      </div>

      {/* Contact */}
      <section id="contact" className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-sm text-muted-foreground mb-4 tracking-wide uppercase"
          >
            Contact
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            Let&apos;s talk.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-base leading-relaxed max-w-md mb-8"
          >
            We&apos;re always open to conversations about interesting problems and
            potential collaborations.
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={3}
            href="mailto:hello@studio.team"
            className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-2.5 hover:bg-secondary transition-colors"
          >
            hello@studio.team
            <ArrowUpRight className="size-3.5" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border/50">
        <div className="mx-auto max-w-4xl flex items-center justify-between text-xs text-muted-foreground">
          <span>&copy; 2026 Studio</span>
          <span>Built with care</span>
        </div>
      </footer>
    </div>
  );
}
