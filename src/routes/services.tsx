import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — MindBridge Support Services" },
      { name: "description", content: "Explore MindBridge's NDIS services: mental health support, RN-led nursing care, daily living assistance, community participation, and complex care in Adelaide." },
      { property: "og:title", content: "Our Services — MindBridge Support Services" },
      { property: "og:description", content: "Comprehensive NDIS support services in Adelaide including mental health, nursing care, and complex care." },
    ],
  }),
  component: ServicesPage,
});

// const services = [
//   {
//     title: "Mental Health & Psychosocial Support",
//     description: "Our psychosocial support helps you manage your mental health in everyday life. We work alongside you to develop coping strategies, build emotional resilience, and progress toward your personal recovery goals.",
//     benefits: ["Personalised recovery planning", "Emotional regulation strategies", "Routine & structure support", "Crisis prevention planning"],
//     image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Nursing & Clinical Support",
//     description: "Led by our founding Registered Nurse, our clinical services ensure your health needs are professionally managed. From medication support to ongoing health monitoring, we provide safe, evidence-based care.",
//     benefits: ["Medication management & support", "Health assessments & monitoring", "Individualised care plans", "Clinical oversight & governance"],
//     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Daily Living Support",
//     description: "We assist with the daily tasks that help you live comfortably and independently. Whether it's personal care, meal preparation, or establishing healthy routines, we're here to support your day-to-day life.",
//     benefits: ["Personal care & hygiene assistance", "Meal preparation & nutrition", "Household routines & organisation", "Promoting independent living skills"],
//     image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Community Participation",
//     description: "Social connection is essential for wellbeing. We support you to engage with your community — attending activities, building friendships, and developing life skills that foster belonging and confidence.",
//     benefits: ["Social & recreational activities", "Appointment & transport support", "Skill-building & education", "Building meaningful connections"],
//     image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Complex Care Support",
//     description: "For participants with high or complex needs — including multiple diagnoses or hospital-to-home transitions — we provide coordinated, RN-led care that ensures safety and continuity across all aspects of your support.",
//     benefits: ["Multi-diagnosis care coordination", "Hospital discharge & transition support", "High-intensity daily living", "Integrated care team collaboration"],
//     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80",
//   },
// ];

function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/services")
    .then((res) => res.json())
    .then((data) => setServices(data))
    .catch((err) => console.error(err));
}, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg px-4 py-20 sm:py-24 hero-pattern">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/25 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase animate-fade-up">NDIS Services</p>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-up stagger-1 [text-shadow:0_2px_18px_rgba(0,0,0,0.25)]">
            Our <span className="text-gradient-brand">Services</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/90 leading-relaxed animate-fade-up stagger-2">
            Tailored NDIS support services designed around your needs, delivered with clinical excellence and genuine care.
          </p>
        </div>
      </section>

      {/* Services — alternating image/text rows, no cards */}
      <section className="px-4 py-20 sm:py-28" aria-label="Services list">
        <div className="mx-auto max-w-6xl space-y-24 sm:space-y-32">
          {services.map((service, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                // key={service.title}
                key={service.id}
                className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-16 animate-fade-up stagger-${(idx % 4) + 1}`}
              >
                {/* Image */}
                <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[5/4] shadow-2xl">
                    <img
                      // src={service.image}
                      src={`http://localhost:5000${service.image_url}`}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" aria-hidden="true" />
                  </div>
                  {/* Decorative number */}
                  <div
                    className={`absolute -top-6 ${reverse ? "-right-2 sm:-right-6" : "-left-2 sm:-left-6"} font-heading text-[6rem] sm:text-[8rem] font-extrabold leading-none text-primary/10 select-none pointer-events-none transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </div>
                  {/* Floating accent */}
                  <div
                    className={`absolute ${reverse ? "-left-4 -bottom-4" : "-right-4 -bottom-4"} h-24 w-24 rounded-full bg-primary/15 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/25`}
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Service 0{idx + 1}
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h2>
                  <div className="mt-4 h-1 w-16 rounded-full bg-primary transition-all duration-500 group-hover:w-28" aria-hidden="true" />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2" role="list">
                    {service.benefits?.map((b, bi) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-foreground transition-transform duration-300 hover:translate-x-1"
                        style={{ transitionDelay: `${bi * 40}ms` }}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-muted/30 to-background px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center animate-scale-up">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'll work with you and your support coordinator to find the right fit. Get in touch for a free, no-obligation chat.
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
