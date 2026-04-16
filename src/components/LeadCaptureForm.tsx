import { useState } from "react";
import { motion } from "framer-motion";

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API call later
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gold-gradient mb-6">
          <svg className="w-8 h-8 text-gold-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-shadow"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-shadow"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Business Type</label>
        <select
          required
          value={formData.business}
          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-shadow"
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
        <label className="block text-sm font-medium text-foreground mb-1.5">What's your biggest bottleneck?</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          placeholder="E.g., I'm losing leads because my follow-up is too slow..."
          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-shadow resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-charcoal-light disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Get Your Free Automation Audit →"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        🔒 Your information is 100% secure. We never share your data.
      </p>
    </form>
  );
}
