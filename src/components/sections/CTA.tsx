import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { fadeUp, stagger } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/lib/supabase';

const projectTypes = [
  'Home Charging',
  'Commercial Charging',
  'Fleet Charging',
  'Government / Public',
  'Custom Project',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function CTA() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('enquiries').insert({
      name: form.name,
      company: form.company || null,
      email: form.email,
      phone: form.phone || null,
      project_type: form.projectType || null,
      message: form.message || null,
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-700 via-volt-700 to-ink-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-20" aria-hidden="true" />
      <div className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-electric-400/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-volt-400/20 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance"
          >
            Ready to Electrify Your Future?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl mx-auto text-lg text-white/80 text-pretty">
            Tell us about your site and we'll send a fixed-scope proposal within two business days.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Calendar className="h-4 w-4" />
                Book Consultation
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-3xl glass p-7 lg:p-10 shadow-card"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-electric-400" />
              <h3 className="font-display text-2xl font-bold text-white">Thank you!</h3>
              <p className="text-ink-300 max-w-md">
                Your enquiry has been received. A Gentrix specialist will reach out within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name <span className="text-electric-400">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company or organisation"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email <span className="text-electric-400">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+971 50 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  value={form.projectType}
                  onValueChange={(v) => setForm({ ...form, projectType: v })}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your site, number of chargers and timeline…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {status === 'error' && (
                <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email sales@futureway.ae.
                </div>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
