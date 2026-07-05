import { useState, useRef, FormEvent, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SocialIcons } from "@/components/SocialIcons";
import { CONTACT_METHODS, PROFILE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key not found. Please check your .env file.");
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      setTimeout(() => resetStatus(), 3000);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      setTimeout(() => resetStatus(), 3000);
      return;
    }

    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        reply_to: form.email,
        subject: `Portfolio Contact: ${form.name}`,
      };

      console.log("Sending email with params:", {
        to: PROFILE.email,
        from: form.email,
        name: form.name,
      });

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setStatus("success");
      setStatusMessage("✓ Message sent successfully! I'll get back to you soon.");
      
      const sentMessages = JSON.parse(localStorage.getItem("sentMessages") || "[]");
      sentMessages.push({
        ...form,
        timestamp: new Date().toISOString(),
        status: "delivered",
        emailId: response.text,
      });
      localStorage.setItem("sentMessages", JSON.stringify(sentMessages));

      setForm({ name: "", email: "", message: "" });
      setTimeout(() => resetStatus(), 5000);
      
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("error");
      setStatusMessage(
        error instanceof Error 
          ? `Failed to send: ${error.message}` 
          : "Something went wrong. Please try again or email me directly."
      );
      setTimeout(() => resetStatus(), 4000);
    }
  };

  const resetStatus = () => {
    setStatus("idle");
    setStatusMessage("");
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:[box-shadow:var(--shadow-glow)] disabled:opacity-50 disabled:cursor-not-allowed";

  const statusColors = {
    idle: "",
    sending: "border-primary/40 bg-primary/5",
    success: "border-green-500/40 bg-green-500/5",
    error: "border-red-500/40 bg-red-500/5",
  };

  return (
    <section id="contact" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-20" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project, a question, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal variant="left" className="flex flex-col gap-4">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label.includes("Phone") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover-lift group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 text-primary">
                  <m.icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                  <span className="block truncate font-medium text-foreground group-hover:text-primary">
                    {m.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <p className="mb-4 text-sm font-medium text-muted-foreground">Find me online</p>
              <SocialIcons />
            </div>

            {/* Message counter */}
            {typeof window !== "undefined" && (
              <div className="rounded-2xl border border-border/40 bg-card/30 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {JSON.parse(localStorage.getItem("sentMessages") || "[]").length}
                  </span>{" "}
                  messages sent via this form
                </p>
              </div>
            )}
          </Reveal>

          {/* Form */}
          <Reveal variant="right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={cn(
                "rounded-3xl border border-border bg-card/60 p-6 sm:p-8 transition-all",
                statusColors[status]
              )}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    disabled={status === "sending" || status === "success"}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    disabled={status === "sending" || status === "success"}
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  disabled={status === "sending" || status === "success"}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Status Messages */}
              {statusMessage && (
                <div
                  className={cn(
                    "mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm",
                    status === "success" && "bg-green-500/10 text-green-400 border border-green-500/20",
                    status === "error" && "bg-red-500/10 text-red-400 border border-red-500/20",
                    status === "sending" && "bg-primary/10 text-primary border border-primary/20"
                  )}
                >
                  {status === "success" && <CheckCircle size={18} className="shrink-0" />}
                  {status === "error" && <AlertCircle size={18} className="shrink-0" />}
                  {status === "sending" && <Loader2 size={18} className="shrink-0 animate-spin" />}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={cn(
                  "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
                  status === "success"
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-primary text-primary-foreground hover:[box-shadow:var(--shadow-glow)]"
                )}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                {status === "success" 
                  ? "✓ Message delivered! I'll respond via email." 
                  : "Your message will be sent directly to my inbox."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}