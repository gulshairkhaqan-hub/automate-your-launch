import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const inputCls = "w-full rounded-md border border-border bg-surface-3/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all";

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // prevent duplicate submissions

    // Client-side validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    if (!name) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-lead", {
        body: {
          name,
          email,
          business: formData.business || null,
          message: formData.message || null,
          source_page: typeof window !== "undefined" ? window.location.pathname : null,
        },
      });

      if (error) {
        console.error("[LeadCaptureForm] submit failed", error);
        toast.error("Something went wrong. Please try again or message us on WhatsApp.");
        return;
      }

      if (data && (data as { success?: boolean }).success) {
        const notified = (data as { notified?: boolean }).notified;
        if (notified === false) {
          // DB save succeeded; notification didn't (still a success for the user)
          console.warn("[LeadCaptureForm] Lead saved but notification webhook failed");
        }
        setSubmitted(true);
        toast.success("Message sent successfully. We'll be in touch within 24 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("[LeadCaptureForm] unexpected error", err);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gold-gradient mb-6 shadow-lg shadow-cyan/30">
          <svg className="w-8 h-8 text-gold-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours to schedule your free audit.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lead-name" className="block font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
          <input
            id="lead-name"
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Email</label>
          <input
            id="lead-email"
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="lead-business" className="block font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Business Type</label>
        <select
          id="lead-business"
          required
          value={formData.business}
          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
          className={inputCls}
        >
          <option value="">Select your business type</option>
          <option value="coach">Coach / Consultant</option>
          <option value="agency">Agency</option>
          <option value="real-estate">Real Estate</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="local">Local Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="lead-msg" className="block font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Your biggest bottleneck?</label>
        <textarea
          id="lead-msg"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          placeholder="E.g., I'm losing leads because my follow-up is too slow..."
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-press w-full rounded-md gold-gradient px-6 py-3.5 text-sm font-semibold text-gold-foreground disabled:opacity-60 shadow-lg shadow-cyan/20 hover:shadow-cyan/40"
      >
        {loading ? "Submitting..." : "Get Your Free Automation Audit →"}
      </button>
      <p className="text-xs text-muted-foreground/70 text-center font-mono">
        🔒 your_data.encrypted = true · we never share your info
      </p>
    </form>
  );
}
