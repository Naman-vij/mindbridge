import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MindBridge Support Services" },
      { name: "description", content: "Get in touch with MindBridge Support Services in Adelaide. We're here to answer your questions about NDIS mental health and complex care support." },
      { property: "og:title", content: "Contact Us — MindBridge Support Services" },
      { property: "og:description", content: "Reach out for NDIS mental health and complex care support in Adelaide." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  } catch (err) {
    console.error("Error sending message:", err);
  }
};

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg px-4 py-20 sm:py-24 hero-pattern">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase animate-fade-up">Get In Touch</p>
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-up stagger-1 [text-shadow:0_2px_18px_rgba(0,0,0,0.25)]">
            Contact <span className="text-gradient-brand">Us</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/90 leading-relaxed animate-fade-up stagger-2">
            We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-14 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3 animate-fade-up">
              <h2 className="font-heading text-xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we'll respond within 1–2 business days.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-10 text-center animate-scale-up">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 animate-pulse-glow" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Your message has been received. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      maxLength={255}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-200"
                      placeholder="0405793164"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      maxLength={1000}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 resize-y transition-all duration-200"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground teal-glow-hover font-bold px-8 py-6 hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 animate-slide-left">
              <h2 className="font-heading text-xl font-bold text-foreground">Get in Touch</h2>
              <div className="mt-7 space-y-6">
                {[
                  {
                    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
                    title: "Location",
                    content: <p className="mt-1 text-sm text-muted-foreground">Adelaide, South Australia</p>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                    title: "Email",
                    content: <a href="mailto:info@mindbridgesupport.com.au" className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary">info@mindbridgesupport.com.au</a>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
                    title: "Phone",
                    content: <a href="tel:+61405793164" className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary">0405 793 164</a>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    title: "Hours",
                    content: <p className="mt-1 text-sm text-muted-foreground">Mon–Fri: 9am – 5pm ACST</p>,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-2xl bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Participants are welcome to refer themselves directly, or have their Support Coordinator or Plan Manager contact us on their behalf to arrange supports.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Please note:</strong> we currently provide services to self-managed and plan-managed participants only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
