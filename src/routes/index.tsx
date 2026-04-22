import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindBridge Support Services — NDIS Mental Health & Complex Care, Adelaide" },
      {
        name: "description",
        content:
          "RN-led mental health and complex care support for NDIS participants in Adelaide. Person-centred, recovery-focused NDIS services.",
      },
      {
        property: "og:title",
        content: "MindBridge Support Services — NDIS Mental Health & Complex Care",
      },
      {
        property: "og:description",
        content: "RN-led mental health and complex care support for NDIS participants in Adelaide.",
      },
    ],
  }),
  component: HomePage,
});

// const services = [
//   {
//     title: "Mental Health & Psychosocial Support",
//     description:
//       "Personalised support to help you manage your mental health, build resilience, and work towards your recovery goals.",
//     image:
//       "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Nursing & Clinical Support",
//     description:
//       "RN-led services including medication support, health monitoring, and personalised care plans.",
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Daily Living Support",
//     description:
//       "Assistance with personal care, hygiene, meals, and daily routines to promote independence.",
//     image:
//       "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Community Participation",
//     description:
//       "Support to engage in social activities, attend appointments, and build meaningful life skills.",
//     image:
//       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Complex Care Support",
//     description:
//       "Specialised care for high-needs participants with multiple diagnoses and hospital transitions.",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
//         />
//       </svg>
//     ),
//   },
// ];

const values = [
  {
    title: "Dignity & Respect",
    description: "We honour each person's unique story, choices, and cultural background.",
    emoji: "🤝",
  },
  {
    title: "Safety First",
    description: "Clinical governance and RN oversight ensure the highest standards of care.",
    emoji: "🛡️",
  },
  {
    title: "Independence",
    description: "We empower participants to build skills and take charge of their lives.",
    emoji: "🌟",
  },
  {
    title: "Recovery-Focused",
    description: "Every plan is built around hope, strengths, and meaningful goals.",
    emoji: "🌱",
  },
];

function HomePage() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Sarah M.",
      text: "MindBridge made me feel truly heard for the first time. The support has been life-changing.",
      role: "NDIS Participant",
    },
    {
      name: "James T.",
      text: "Having an RN who understands both my mental and physical health needs is incredible.",
      role: "NDIS Participant",
    },
    {
      name: "Priya K.",
      text: "The team's patience and professionalism gave our family so much peace of mind.",
      role: "Family Member",
    },
  ]);

  useEffect(() => {
    // Fetch testimonials from backend API
    fetch("http://localhost:5000/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/services")
    .then((res) => res.json())
    .then((data) => setServices(data))
    .catch((err) => console.error("Error fetching services:", err));
}, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg px-4 py-24 sm:py-32 lg:py-40 hero-pattern">
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float stagger-3" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs font-semibold tracking-widest text-white uppercase animate-fade-up">
            Registered Provider · Adelaide, SA
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up stagger-1 [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]">
            RN-led Mental Health &amp; <span className="text-gradient-brand">Complex Care</span>{" "}
            Support
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up stagger-2">
            Founded by Rhythm, a Registered Nurse in Adelaide, MindBridge Support Services delivers
            person-centred, recovery-focused care that puts you at the heart of everything we do.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up stagger-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-accent text-base font-bold shadow-xl teal-glow-hover hover:bg-white/95 px-8 py-6"
            >
              <Link to="/contact">Get Support</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-accent text-base px-8 py-6 font-semibold"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-4 py-20 sm:py-24 lg:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase animate-fade-up">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl animate-fade-up stagger-1"
            >
              How We Support You
            </h2>
            <p className="mt-4 text-muted-foreground animate-fade-up stagger-2">
              Comprehensive NDIS services tailored to your individual needs and goals.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {services.map((service, i) => (
              <div
                // key={service.title}
                key={service.id}
                className={`group relative overflow-hidden rounded-3xl bg-card shadow-xl ring-1 ring-border/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:ring-primary/40 animate-fade-up stagger-${i + 1} ${i % 2 === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    // src={service.image}
                    src={`http://localhost:5000${service.image_url}`}

                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-3 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg ring-4 ring-card transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:teal-glow"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="p-7 pt-10">
                  <h3 className="font-heading text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-fade-up">
            <Button
              asChild
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">View All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-gradient-to-b from-muted/50 to-background px-4 py-20 sm:py-24"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase animate-fade-up">
              Our Values
            </p>
            <h2
              id="values-heading"
              className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl animate-fade-up stagger-1"
            >
              Our Approach
            </h2>
            <p className="mt-4 text-muted-foreground animate-fade-up stagger-2">
              Everything we do is guided by our commitment to your wellbeing and independence.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group rounded-2xl bg-card p-7 shadow-sm border border-transparent hover-lift hover:border-primary/30 animate-fade-up stagger-${i + 1}`}
              >
                <div
                  className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                  aria-hidden="true"
                >
                  {v.emoji}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding notice */}
      <section className="px-4 py-20 sm:py-24" aria-labelledby="onboarding-heading">
        <div className="mx-auto max-w-3xl rounded-3xl animated-gradient-bg p-10 text-center sm:p-14 relative overflow-hidden animate-scale-up shadow-2xl">
          <div className="absolute inset-0 hero-pattern" aria-hidden="true" />
          <div className="relative">
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm animate-pulse-glow"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h2
              id="onboarding-heading"
              className="font-heading text-2xl font-bold text-white sm:text-3xl"
            >
              We're Growing — Join Us Early
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85 leading-relaxed">
              MindBridge Support Services is currently onboarding new clients. As we grow our client
              base, we'll be expanding our team of dedicated support workers. Get in touch now to be
              among our first participants.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-accent font-bold teal-glow-hover px-8 py-6 hover:bg-white/95"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section className="bg-muted/30 px-4 py-20 sm:py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase animate-fade-up">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl animate-fade-up stagger-1"
          >
            What People Say
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card
                key={t.name}
                className={`border-border/60 hover-lift animate-fade-up stagger-${i + 1}`}
              >
                <CardContent className="p-7">
                  <div className="mb-4 flex gap-1" aria-hidden="true">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden animated-gradient-bg px-4 py-20 sm:py-24 hero-pattern">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 right-20 h-48 w-48 rounded-full bg-primary/25 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl animate-fade-up [text-shadow:0_2px_18px_rgba(0,0,0,0.25)]">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 animate-fade-up stagger-1">
            Reach out today and let's create a support plan that works for you. We're here to help
            every step of the way.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up stagger-2">
            <Button
              asChild
              size="lg"
              className="bg-white text-accent font-bold shadow-xl teal-glow-hover hover:bg-white/95 px-8 py-6 text-base"
            >
              <Link to="/contact">Get Support</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-accent text-base px-8 py-6 font-semibold"
            >
              <a href="tel:+61400000000">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
