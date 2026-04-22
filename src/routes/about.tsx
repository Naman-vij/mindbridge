import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MindBridge Support Services" },
      { name: "description", content: "Learn about MindBridge Support Services — founded by Rhythm, a Registered Nurse in Adelaide. Our mission, vision, and values for NDIS mental health and complex care." },
      { property: "og:title", content: "About Us — MindBridge Support Services" },
      { property: "og:description", content: "Founded by a Registered Nurse. Person-centred, recovery-focused NDIS care in Adelaide." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg px-4 py-20 sm:py-24 hero-pattern">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/25 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase animate-fade-up">Our Story</p>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-up stagger-1 [text-shadow:0_2px_18px_rgba(0,0,0,0.25)]">
            About <span className="text-gradient-brand">MindBridge</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/90 leading-relaxed animate-fade-up stagger-2">
            Building bridges between clinical expertise and compassionate, person-centred care.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="px-4 py-20 sm:py-24" aria-labelledby="founder-heading">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
            <div className="flex justify-center lg:col-span-2 animate-scale-up">
              <div className="relative">
                <div className="flex h-52 w-52 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl bg-primary/10 blur-xl" aria-hidden="true" />
              </div>
            </div>
            <div className="lg:col-span-3 animate-fade-up">
              <h2 id="founder-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Meet Rhythm — Founder & <span className="text-gradient-teal">Registered Nurse</span>
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                MindBridge Support Services was founded by Rhythm, a dedicated Registered Nurse based in Adelaide, South Australia. With extensive experience in mental health nursing and complex care, Rhythm recognised the need for NDIS services that truly put participants first — combining clinical rigour with genuine human connection.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every aspect of MindBridge reflects Rhythm's belief that quality care begins with listening, understanding, and respecting each person's unique journey. As both the founder and lead clinician, Rhythm ensures that clinical excellence is woven into every service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-linear-to-b from-muted/40 to-background px-4 py-20 sm:py-24" aria-labelledby="mvv-heading">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase animate-fade-up">What Drives Us</p>
          <h2 id="mvv-heading" className="mt-2 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl animate-fade-up stagger-1">
            Our Mission, Vision & Values
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Mission",
                emoji: "⚡",
                content: "To deliver RN-led, person-centred mental health and disability support that empowers participants to live with dignity, safety, and independence.",
              },
              {
                title: "Vision",
                emoji: "👁️",
                content: "A community where every person receives compassionate, clinically sound support to live independently and confidently.",
              },
            ].map((item, i) => (
              <div key={item.title} className={`rounded-2xl bg-card p-7 shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 animate-fade-up stagger-${i + 1}`}>
                <div className="mb-4 text-3xl" aria-hidden="true">{item.emoji}</div>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.content}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-card p-7 shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 animate-fade-up stagger-3">
              <div className="mb-4 text-3xl" aria-hidden="true">💛</div>
              <h3 className="font-heading text-lg font-bold text-foreground">Values</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Dignity & Respect</strong> — honouring each person's journey</li>
                <li><strong className="text-foreground">Safety</strong> — clinically guided care at every level</li>
                <li><strong className="text-foreground">Independence</strong> — building confidence and life skills</li>
                <li><strong className="text-foreground">Recovery</strong> — strengths-based, hope-driven support</li>
                <li><strong className="text-foreground">Compassion</strong> — genuine care in every interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center animate-scale-up">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to hear from you. Whether you're a participant, family member, or support coordinator, get in touch to learn more.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground teal-glow-hover font-bold px-8 py-6 hover:bg-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
